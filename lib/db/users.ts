import { db } from "./client";

export type AppUser = {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
};

type CreateUserInput = {
  email: string;
  fullName?: string | null;
};

export async function listUsers(): Promise<AppUser[]> {
  const { data, error } = await db
    .from("app_users")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as AppUser[];
}

export async function getUserByEmail(email: string): Promise<AppUser | null> {
  const { data, error } = await db
    .from("app_users")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (error) throw error;
  return (data as AppUser | null) ?? null;
}

export async function createUser(input: CreateUserInput): Promise<AppUser> {
  const { data, error } = await db
    .from("app_users")
    .insert({
      email: input.email,
      full_name: input.fullName ?? null,
    })
    .select("*")
    .single();

  if (error) throw error;
  return data as AppUser;
}

export async function updateUserName(id: string, fullName: string): Promise<AppUser> {
  const { data, error } = await db
    .from("app_users")
    .update({ full_name: fullName })
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw error;
  return data as AppUser;
}

export async function deleteUser(id: string): Promise<void> {
  const { error } = await db.from("app_users").delete().eq("id", id);
  if (error) throw error;
}

