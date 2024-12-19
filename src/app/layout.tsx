import "@/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { nexaSlab } from "@/assets/font";

export const metadata: Metadata = {
  title: "Pesquisa de Satisfação - OAKBERRY",
  description:
    "A OAKBERRY AÇAI BOWLS é um fast-food saudável, presente em mais de 40 países e com mais de 600 lojas entregamos uma experiência saborosa, natural e nutritiva com seus toppings preferidos e o padrão que já conhece.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nexaSlab.variable}`} suppressHydrationWarning>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
