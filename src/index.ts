import { Elysia } from "elysia";

// This has a type error
new Elysia()
  .get("/", () => {
    console.log("A GET Request was received: PATH='/'");
    return "Bun's Elysia JS Frameworks is working correctly 👌";
  })
  .group("/google-forms", (instance) =>
    instance
      .get("/", () => {
        console.log("A GET Request was received: PATH='google-forms/'");
        return "Sending Data...";
      })
      .post("/", () => {
        console.log("A POST Request was received: PATH='google-forms/'");
        return "Receiving Data";
      })
  )
  .listen(3000, () =>
    console.log("🦊 Elysia server is running at http://localhost:3000")
  );
