import { t } from "elysia";

// Define a TypeScript interface for the user
export interface SurveyResponse {
  id?: number;
  responseId: string;
  fieldName: string;
  fieldValue: string;
}

// Create a matching schema using Elysia's t validator
export const surveyResponseSchema = t.Object({
  responseId: t.String(),
  fieldName: t.String(),
  fieldValue: t.String(),
});