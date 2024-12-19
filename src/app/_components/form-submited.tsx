import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type SurveyData } from "@/types/survey-data";
import Confetti from "react-confetti-boom";

interface FormSubmitedProps {
  surveyData: SurveyData;
}

function FormSubmited({ surveyData }: FormSubmitedProps) {
  const discountType =
    surveyData?.coupon?.tipoDesconto === 1 ? "fixed" : "percentage";

  const getDiscountType = (discountValue: number) => {
    if (discountType === "fixed") {
      return `R$ ${discountValue.toFixed(2)}`;
    } else {
      return `${discountValue.toFixed(2)}%`;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Confetti
        mode="boom"
        particleCount={50}
        colors={["#ff577f", "#ff884b"]}
      />
      <Card className="mx-4 w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Parabéns
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Obrigado por preencher nossa pesquisa de satisfação!
          </p>
          <p className="mb-6">
            Como forma de agradecimento, aqui está um cupom especial para você:
          </p>
          <div className="mb-4 rounded-lg bg-gray-100 p-4">
            <p className="mb-2 text-3xl font-bold text-purple-600">
              {getDiscountType(surveyData?.coupon?.valorDesconto ?? 0)}
            </p>
            <p className="mb-1 text-lg font-semibold">
              Código do Cupom:{" "}
              <span className="text-purple-600">
                {surveyData?.coupon.codigoCartao}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export { FormSubmited };
