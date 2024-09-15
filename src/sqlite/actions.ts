import type { SurveyResponse } from "../types";
import { db } from "./migration";

const addResponse = (newResponse: SurveyResponse) => {
  const propNamesOnly = Object.keys(newResponse);
  const propValuesOnly = Object.values(newResponse);

  db.run(
    `INSERT INTO surveyResults (${propNamesOnly.join(
      ", "
    )}) VALUES (${propNamesOnly.map(() => "?").join(", ")})`,
    ...propValuesOnly
  );
};

const getAllResponses = () => {
  const rows = db.query<SurveyResponse>("SELECT * FROM surveyResults").all();

  // Log the results
  console.log("Survey Responses:");
  rows.forEach((row: SurveyResponse) => {
    console.log(
      `ID: ${row.id}, ResponseID: ${row.responseId}, Field Name: ${row.fieldName}, Field Value: ${row.fieldValue}`
    );
  });

  return rows;
};

export { addResponse, getAllResponses };
