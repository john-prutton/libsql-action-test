"use server"

import { createUser } from "./db"

export async function tryCreateUser() {
  return createUser()
}
