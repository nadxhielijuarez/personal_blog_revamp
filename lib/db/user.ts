import { db } from "./client";
import { neon } from "@neondatabase/serverless";

export type User = {
  id?: number;
  user_name: string;
  email: string;
  role: number;
}

export async function createUser(user: User) {
  const { user_name, email, role } = user;
  const result = await insertEntity<User>("users", { user_name, email, role });
  return result;
}



// export async function deleteUser<T>(table: string, columnName: string, entity: T):{
//   try {
//     const [result] = await db`DELETE FROM ${table} WHERE ${columnName} = ${entity.id} RETURNING *`;
//     if (!result) {
//       throw new Error(`Failed to delete entity from ${table}`);
//     }
//     return result;
//   } catch (error) {
//     return new Response('Error', { status: 404 });
//   }
// }