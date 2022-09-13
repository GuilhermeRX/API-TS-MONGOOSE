import { z } from "zod";

const userSchemaZod = z.object({
  name: z.string(),
  email: z.string(),
});

type IUser = z.infer<typeof userSchemaZod>;

export default IUser;
export { userSchemaZod };

