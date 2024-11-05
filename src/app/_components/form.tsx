"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as UIForm,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { FacesFormField } from "./faces-form-field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  recommendationScore: z
    .string()
    .min(1, { message: "Por favor, selecione uma opção" }),
  qualityOfService: z
    .enum(["Muito Bom", "Bom", "Regular", "Ruim", "Muito Ruim"], {
      message: "Por favor, selecione uma opção",
    })
    .optional()
    .refine((value) => value !== undefined, {
      message: "Por favor, selecione uma opção",
    }),
  productVariety: z
    .enum(["Muito Bom", "Bom", "Regular", "Ruim", "Muito Ruim"], {
      message: "Por favor, selecione uma opção",
    })
    .optional()
    .refine((value) => value !== undefined, {
      message: "Por favor, selecione uma opção",
    }),
  productPricing: z
    .enum(["Muito Bom", "Bom", "Regular", "Ruim", "Muito Ruim"], {
      message: "Por favor, selecione uma opção",
    })
    .optional()
    .refine((value) => value !== undefined, {
      message: "Por favor, selecione uma opção",
    }),

  bowlOrSmoothieAssembly: z
    .enum(["Muito Bom", "Bom", "Regular", "Ruim", "Muito Ruim"], {
      message: "Por favor, selecione uma opção",
    })
    .optional()
    .refine((value) => value !== undefined, {
      message: "Por favor, selecione uma opção",
    }),
  improvementSuggestions: z.string().min(1, {
    message: "Por favor, escreva alguma sugestão de melhoria.",
  }),
});

function Form() {
  const scoreArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qualityOfService: undefined,
      productVariety: undefined,
      productPricing: undefined,
      bowlOrSmoothieAssembly: undefined,
      improvementSuggestions: "",
      recommendationScore: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <UIForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto space-y-12"
      >
        <FormField
          control={form.control}
          name={"recommendationScore"}
          render={({ field }) => (
            <FormItem className="space-y-6">
              <FormLabel className="text-2xl font-extrabold italic text-purple-500">
                Em uma escala de 1 a 10, o quanto você recomendaria a OAKBERRY
                para seus amigos ou familiares? *
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex justify-between"
                >
                  {scoreArray.map((radio) => (
                    <FormItem
                      className="flex flex-col items-center justify-center gap-1 space-x-3 text-center"
                      key={radio}
                    >
                      <FormLabel className="text-xl font-bold text-purple-500">
                        {radio}
                      </FormLabel>
                      <FormControl>
                        <RadioGroupItem value={radio} className="mx-auto"/>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FacesFormField
          form={form}
          name="qualityOfService"
          label="Como você avalia a qualidade do atendimento? *"
        />
        <FacesFormField
          form={form}
          name="productVariety"
          label="Como você avalia a variedade de produtos? *"
        />
        <FacesFormField
          form={form}
          name="productPricing"
          label="Como você avalia o preço dos produtos? *"
        />
        <FacesFormField
          form={form}
          name="bowlOrSmoothieAssembly"
          label="Como você avalia a montagem do seu Bowl ou Smoothie? *"
        />
        <FormField
          control={form.control}
          name="improvementSuggestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-extrabold italic text-purple-500">
                Você tem alguma sugestão de como podemos melhorar? *
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none rounded-2xl border border-purple-500"
                  rows={8}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            className="rounded-3xl bg-purple-500 px-12 text-lg font-extrabold leading-normal text-white hover:border-2 hover:border-purple-500 hover:bg-transparent hover:text-purple-500"
          >
            Enviar
          </Button>
        </div>
      </form>
    </UIForm>
  );
}

export { Form };
