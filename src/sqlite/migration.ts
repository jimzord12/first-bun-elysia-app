import { Database } from "bun:sqlite";

// Create or connect to a SQLite database
export const db = new Database("mydb.sqlite");
