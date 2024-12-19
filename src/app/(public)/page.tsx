import { HydrateClient } from "@/trpc/server";
import { Form } from "../_components/form";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { NoSurvey } from "../_components/no-survey";

type SurveyParams = Promise<{ uuidVenda: string | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SurveyParams;
}) {
  const { uuidVenda } = await searchParams;

  return (
    <HydrateClient>
      <Header />
      <main className="flex min-h-[calc(100vh-500px)] flex-col items-center justify-center bg-offWhite-500 py-10">
        {uuidVenda?.trim() ? (
          <section className="w-10/12 max-w-7xl space-y-12">
            <Form orderId={uuidVenda} />
          </section>
        ) : (
          <section className="w-10/12 max-w-7xl">
            <NoSurvey />
          </section>
        )}
      </main>
      <Footer />
    </HydrateClient>
  );
}
