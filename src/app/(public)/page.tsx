import { HydrateClient } from "@/trpc/server";
import { Form } from "../_components/form";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Home() {
  return (
    <HydrateClient>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-offWhite-500 py-10 md:py-20">
        <section className="w-10/12 max-w-7xl space-y-12">
          <Form />
        </section>
      </main>
      <Footer />
    </HydrateClient>
  );
}
