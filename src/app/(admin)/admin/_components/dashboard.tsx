"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { api } from "@/trpc/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

interface SurveyData {
  recommendationScore: string;
  qualityOfService: string;
  productVariety: string;
  productPricing: string;
  bowlOrSmoothieAssembly: string;
  improvementSuggestions: string;
}

// Definindo tipos mais específicos para o CustomTooltip
interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; fill?: string; stroke?: string }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="rounded border bg-white p-4 shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        {payload.map((pld, index) => (
          <p key={index} style={{ color: pld.fill ?? pld.stroke }}>
            {`${pld.name}: ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function SurveyDashboard() {
  const { data: surveyData } = api.survey.getAll.useQuery();

  if (!surveyData) {
    return null;
  }

  const processData = (attribute: keyof SurveyData) => {
    return Object.entries(
      surveyData.reduce(
        (acc, survey) => {
          const value = survey[attribute];
          acc[value] = (acc[value] ?? 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      ),
    ).map(([name, value]) => ({ name, value }));
  };

  const recommendationScoreData = processData("recommendationScore");
  const qualityOfServiceData = processData("qualityOfService");
  const productVarietyData = processData("productVariety");
  const productPricingData = processData("productPricing");
  const bowlOrSmoothieAssemblyData = processData("bowlOrSmoothieAssembly");

  const improvementSuggestionsData = processData("improvementSuggestions")
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <Card className="dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Pontuação de Recomendação</CardTitle>
          <CardDescription>
            Distribuição da pontuação de recomendação dos clientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={recommendationScoreData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {recommendationScoreData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <CustomTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Qualidade do Atendimento</CardTitle>
            <CardDescription>
              Distribuição da qualidade do atendimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={qualityOfServiceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CustomTooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Variedade dos Produtos</CardTitle>
            <CardDescription>
              Distribuição da variedade dos produtos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productVarietyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CustomTooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Preços dos Produtos</CardTitle>
            <CardDescription>
              Distribuição dos preços dos produtos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productPricingData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CustomTooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Montagem de Bowl ou Smoothie</CardTitle>
            <CardDescription>
              Distribuição da montagem de bowl ou smoothie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bowlOrSmoothieAssemblyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CustomTooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
