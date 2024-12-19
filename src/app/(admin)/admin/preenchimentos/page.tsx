import { DataTable } from "@/components/data-table";
import { TooltipProvider } from "@/components/ui/tooltip";
import { surveyColumns } from "@/components/data-table/columns/survey-columns";
import { api } from "@/trpc/server";

export default async function Page() {
  const data = await api.survey.getAll();

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          {data && <DataTable data={data} columns={surveyColumns} />}
        </div>
      </TooltipProvider>
    </>
  );
}
