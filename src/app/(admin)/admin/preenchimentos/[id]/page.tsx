import { api } from "@/trpc/server";
import { SurveyDetails } from "./_components/survey-details";

type SurveyDetailsParams = Promise<{ id: string }>;

export default async function SurveyPage({
  params,
}: {
  params: SurveyDetailsParams;
}) {
  const { id } = await params;

  const survey = await api.survey.get({ id });

  return (
    <div className="container mx-auto py-10">
      <SurveyDetails survey={survey} />
    </div>
  );
}
