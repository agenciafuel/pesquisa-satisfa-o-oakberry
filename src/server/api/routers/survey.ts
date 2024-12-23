import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { env } from "@/env";

const baseUrl = env.UNIKA_API_URL;

const CLIENT_ID = env.CLIENT_ID;
const CLIENT_SECRET = env.CLIENT_SECRET;

export const surveyRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        recommendationScore: z.string(),
        qualityOfService: z.string(),
        productVariety: z.string(),
        productPricing: z.string(),
        bowlOrSmoothieAssembly: z.string(),
        improvementSuggestions: z.string(),
        email: z.string(),
        name: z.string(),
        telefone: z.string(),
        giftCard: z.object({
          id: z.number(),
          codigoCartao: z.string(),
          dataInicio: z.string(),
          dataLimite: z.string(),

          discountType: z.number(),
          discountValue: z.number(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { ...data } = input;

      const scores: Record<string, string> = {
        "1": "Muito ruim",
        "2": "Ruim",
        "3": "Regular",
        "4": "Bom",
        "5": "Muito bom",
      };

      const satisfactionSurvey = await ctx.db.satisfactionSurvey.create({
        data: {
          recommendationScore: data.recommendationScore,
          qualityOfService: scores[data.qualityOfService] ?? "",
          productVariety: scores[data.productVariety] ?? "",
          productPricing: scores[data.productPricing] ?? "",
          bowlOrSmoothieAssembly: scores[data.bowlOrSmoothieAssembly] ?? "",
          improvementSuggestions: data.improvementSuggestions,
          email: data.email,
          name: data.name,
          phone: data.telefone,
          giftCard: {
            create: {
              externalId: data.giftCard.id,
              code: data.giftCard.codigoCartao,
              startDate: data.giftCard.dataInicio,
              endDate: data.giftCard.dataLimite,
              discountType:
                data.giftCard.discountType === 1 ? "fixed" : "percentage",
              discountValue: String(data.giftCard.discountValue),
            },
          },
        },
      });
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const { id } = input;

      const survey = await ctx.db.satisfactionSurvey.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          giftCard: true,
        }
      });

      return survey;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const surveys = await ctx.db.satisfactionSurvey.findMany();

    return surveys;
  }),

  getSurveyData: publicProcedure
    .input(z.object({ orderId: z.string() }))
    .query(async ({ input }) => {
      const { orderId } = input;

      const surveyDataResponse = await fetch(
        `${baseUrl}vendas/getCuponsDesconto`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            uuidVenda: orderId,
          }),
        },
      );

      const surveyData = (await surveyDataResponse.json()) as SurveyApiResponse;

      const order = surveyData.vendas?.at(0);
      const clientId = order?.cliente.id;

      if (!clientId) {
        throw new Error("Client ID não encontrado.");
      }

      const surveyClientResponse = await fetch(
        ` ${baseUrl}vendas/vendas/getClientes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            idCliente: clientId,
          }),
        },
      );

      const surveyClient =
        (await surveyClientResponse.json()) as ClientApiResponse;

      const client = surveyClient.clientes?.at(0);

      const coupon = order?.cartoesPresente.at(-1);

      return {
        coupon: {
          ...coupon,
        },
        client: {
          email: client?.email,
          name: client?.razaoSocial,
          telefone: client?.telefone1,
        },
      };
    }),
});
