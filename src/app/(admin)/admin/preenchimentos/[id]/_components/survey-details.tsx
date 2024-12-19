import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type SurveyDetails } from "@/types/survey-data";

interface SurveyDetailsProps {
  survey: SurveyDetails
}

export function SurveyDetails({ survey }: SurveyDetailsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Pesquisa de Satisfação</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">
              Em uma escala de 1 a 10, o quanto você recomendaria a OAKBERRY
              para seus amigos ou familiares?
            </h3>
            <Badge variant="secondary">
              {survey?.recommendationScore ?? "N/A"}
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">
              Como você avalia a qualidade do atendimento?
            </h3>
            <p>{survey?.qualityOfService ?? "N/A"}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">
              Como você avalia a variedade de produtos?
            </h3>
            <p>{survey?.productVariety ?? "N/A"}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">
              Como você avalia o preço dos produtos?
            </h3>
            <p>{survey?.productPricing ?? "N/A"}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">
              Como você avalia a montagem do seu Bowl ou Smoothie?
            </h3>
            <p>{survey?.bowlOrSmoothieAssembly ?? "N/A"}</p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h3 className="font-semibold">
              Você tem alguma sugestão de como podemos melhorar?
            </h3>
            <p className="text-sm text-gray-500">
              {survey?.improvementSuggestions ?? "N/A"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Cliente</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">Nome</h3>
            <p>{survey?.name ?? "N/A"}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Email</h3>
            <p>{survey?.email ?? "N/A"}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Contato</h3>
            <p>{survey?.phone ?? "N/A"}</p>
          </div>
        </CardContent>
      </Card>

      {survey?.giftCard && (
        <Card>
          <CardHeader>
            <CardTitle>Detalhes do cupom de desconto</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-semibold">ID externo</h3>
              <p>{survey?.giftCard.externalId ?? "N/A"}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Código</h3>
              <Badge>{survey?.giftCard.code ?? "N/A"}</Badge>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Data de inicio</h3>
              <p>{survey?.giftCard.startDate ?? "N/A"}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Data de fim</h3>
              <p>{survey?.giftCard.endDate ?? "N/A"}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Tipo de desconto</h3>
              <p>
                {survey?.giftCard.discountType === "1" ? "Fixo" : "Porcentagem"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Valor</h3>
              <p>{survey?.giftCard.discountValue ?? "N/A"}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
