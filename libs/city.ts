import z from "zod";

const citySchema = z.object({
  id: z.string(),
  cityName: z.string(),
  prefCode: z.number(),
  rentPerSqm: z.number(),
});

export type City = z.infer<typeof citySchema>;
