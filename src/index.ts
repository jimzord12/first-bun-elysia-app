import { Elysia } from "elysia";

const app = new Elysia()
  .group("/", (instance) =>
    instance
      .get("/", () => "GET - The Bun + Elysia Web Server Root Directory")
      .post("/", () => "POST - The Bun + Elysia Web Server Root Directory")
  )

  .group("/google-forms", (instance) =>
    instance
      .get("/", () => "Sending Google Form Data...")
      .post("/", () => "Receiving Google Form Data...")
  )
  .onError(({ code }) => {
    if (code === "NOT_FOUND") return "Route not found :(";
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
