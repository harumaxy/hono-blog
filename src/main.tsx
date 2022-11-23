/** @jsx jsx */
/** @jsxFrag  Fragment */

import { serve } from "std/http/server.ts";
import { Hono } from "hono";
import { App } from "./app.tsx";
import { jsx } from "hono/middleware/jsx/index.ts";

const app = new Hono();

app.get("/", (c) => c.html(<App />));

serve(app.fetch);
