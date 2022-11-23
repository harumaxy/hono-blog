/** @jsx jsx */
/** @jsxFrag  Fragment */
import { Hono } from "hono";
import { jsx } from "hono/middleware/jsx/index.ts";
import { App } from "./app.tsx";

const app = new Hono();

app.get("/", (c, _next) => {
  c.status(200);
  return c.html(<App />);
});

// export default {
//   async fetch(request: Request, env: any) {
//     try {
//       return new Response("hi");
//     } catch (e) {
//       return new Response(e.message);
//     }
//   },
// };

export default app;
