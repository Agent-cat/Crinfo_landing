import bcrypt from "bcryptjs";

//admin / admin123
const ADMIN_CREDENTIALS = {
  username: "admin",
  passwordHash: "$2a$10$YourHashedPasswordHere",
};

export async function verifyCredentials(username: string, password: string) {
  if (username !== ADMIN_CREDENTIALS.username) {
    return false;
  }

  return password === "admin123";
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}
