"use server"

import { join } from "path"

import { drizzle } from "drizzle-orm/better-sqlite3"
import Database from "better-sqlite3"
import { user } from "./schema"

const db = drizzle(
  new Database(
    join(
      import.meta.url.replace(/\\/g, "/").replace(/^file:\/\/+/i, ""),
      "../sqlite.db"
    )
  )
)

export const createUser = async () => db.insert(user).values({})

export const getUsers = async () =>
  db
    .select()
    .from(user)
    .execute()
    .then((data) => data)
