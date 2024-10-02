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
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.string().default("5432"),
});

type Env = z.infer<typeof envSchema>;

const env = envSchema.parse(process.env);

export { Env, env };
