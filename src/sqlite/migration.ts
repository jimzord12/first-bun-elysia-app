import { Database } from "bun:sqlite";

// Create or connect to a SQLite database
export const db = new Database("mydb.sqlite");

// Create or Connect to surveyResults table
db.run(
  "CREATE TABLE IF NOT EXISTS surveyResults (id INTEGER PRIMARY KEY AUTOINCREMENT, responseId TEXT, fieldName TEXT, fieldValue TEXT)"
);
