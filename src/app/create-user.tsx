"use client"

import { createUser } from "@/server/db"

export function CreateUser() {
  return <button onClick={() => createUser()}>create new user</button>
}
