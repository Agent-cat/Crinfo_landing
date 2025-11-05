"use server";

import { verifyCredentials } from "@/lib/admin-credentials";
import { createToken, setSession, clearSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const isValid = await verifyCredentials(username, password);

  if (!isValid) {
    return { error: "Invalid credentials" };
  }

  const token = await createToken({ username });
  await setSession(token);

  redirect("/admin/dashboard");
}

export async function logout() {
  await clearSession();
  redirect("/admin/login");
}
