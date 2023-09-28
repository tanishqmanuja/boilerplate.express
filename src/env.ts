import "dotenv/config";
import { z } from "zod";

export const envSchema = z.object({
  PORT: z.coerce.number().default(8080),
});

export default envSchema.parse(process.env);
