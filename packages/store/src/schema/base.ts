import { z } from "zod";

const FlavourSchema = z.string();
const ParentSchema = z.array(z.string()).optional();
const ContentSchema = z.array(z.string()).optional();

const role = ["root", "hub", "content"] as const;
const RoleSchema = z.enum(role);

export const BlockSchema = z.object({
  version: z.number(),
  model: z.object({
    role: RoleSchema,
    flavour: FlavourSchema,
  }),
});
