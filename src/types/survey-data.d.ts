import { type RouterOutputs } from "@/trpc/react";

export type SurveyData = RouterOutputs["survey"]["getSurveyData"] | undefined;


export type SatisfactionSurvey = RouterOutputs["survey"]["getAll"][number];


export type SurveyDetails = RouterOutputs["survey"]["get"];
