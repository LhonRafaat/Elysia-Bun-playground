import { z } from "zod";

const envSchema = z.object({
  PORT: z.string(),
  ENV: z
    .union([
      z.literal("development"),
      z.literal("testing"),
      z.literal("production"),
    ])
    .default("development"),
  // ...
});

// Validate `process.env` against our schema
// and return the result

type Env = z.infer<typeof envSchema>;

const env = envSchema.parse(process.env);

export { Env, env };
