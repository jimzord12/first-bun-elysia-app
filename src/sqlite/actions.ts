import { Database } from "bun:sqlite";
import type { SurveyResponse } from "../types";

const db = new Database("mydb.sqlite");

// Insert a new response
const addResponse = (newResponse: SurveyResponse) => {
  db.run(
    "INSERT INTO surveyResults (responseId, fieldName, fieldValue) VALUES (?, ?, ?)",
    newResponse.responseId,
    newResponse.fieldName,
    newResponse.fieldValue
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
