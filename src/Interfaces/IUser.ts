import { z } from "zod";

const userSchemaZod = z.object({
  name: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  email: z.string(),
});

type IUser = z.infer<typeof userSchemaZod>;

export default IUser;
export { userSchemaZod };

