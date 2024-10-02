import type { Env as EnvType } from "./env";
declare module "bun" {
  interface Env extends EnvType {}
}
