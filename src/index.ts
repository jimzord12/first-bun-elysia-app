import { Elysia } from "elysia";
import { bearer } from "@elysiajs/bearer";
import { addResponse, getAllResponses } from "./sqlite";
import { surveyResponseSchema } from "./types";

new Elysia()
  .use(bearer())
  .get("/", () => {
    console.log("A GET Request was received: PATH='/'");
    return "Bun's Elysia JS Frameworks is working correctly 👌";
  })
  .onBeforeHandle(({ bearer, set, error }) => {
    console.log("Checking for the Bearer Token...");
    if (!bearer) {
      console.log("[ERROR]: Incoming Request did not have a Bearer Token.");
      set.headers[
        "WWW-Authenticate"
      ] = `Bearer realm='sign', error="invalid_request"`;

      return error(400, "Bearer Token is required");
    }

    if (bearer !== process.env.THE_SECRET) {
      console.log("[ERROR]: Incoming Request's Bearer Token was not Valid.");

      set.headers[
        "WWW-Authenticate"
      ] = `Bearer realm='sign', error="invalid_token"`;

      return error(400, "The provided Bearer Token is not valid");
    }

    console.log("Validation of Bearer Token: SUCCESS");
  })
  .group("/google-forms", (instance) =>
    instance
      .get("/", () => {
        console.log("A GET Request was received: PATH='google-forms/'");
        return getAllResponses();
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