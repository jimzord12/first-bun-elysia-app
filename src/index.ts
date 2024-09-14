import { Elysia } from "elysia";
import { db, addResponse, getAllResponses } from "./sqlite";
import { surveyResponseSchema } from "./types";

// Create a new table
db.run(
  "CREATE TABLE IF NOT EXISTS surveyResults (id INTEGER PRIMARY KEY AUTOINCREMENT, responseId TEXT, fieldName TEXT, fieldValue TEXT)"
);

// This has a type error
new Elysia()
  .get("/", () => {
    console.log("A GET Request was received: PATH='/'");
    return "Bun's Elysia JS Frameworks is working correctly 👌";
  })

  //
  .group("/google-forms", (instance) =>
    instance
      .get("/", () => {
        console.log("A GET Request was received: PATH='google-forms/'");
        return "Sending Data...";
      })
      .post(
        "/",
        ({ set, body, error }) => {
          console.log("A POST Request was received: PATH='google-forms/'");

          // Parse the incoming JSON data
          const { responseId, fieldName, fieldValue } = body;

          if (!responseId || !fieldName || !fieldValue) {
            // Respond with a 400 Bad Request status if any required field is missing
            return error(400, "All fields are required");
          }

          // If validation passes, proceed with your logic

          addResponse({ responseId, fieldName, fieldValue });

          set.status = "Created";
          return {
            status: "success",
            data: { responseId, fieldName, fieldValue },
          };
        },
        {
          body: surveyResponseSchema,
        }
      )
  )
  .listen(process.env.PORT || 3000, () =>
    console.log(
      `🦊 Elysia server is running at http://localhost:${
        process.env.PORT || 3000
      }`
    )
  );
