"use server"

import { join } from "path"

import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"
import { user } from "./schema"

const db = drizzle(
  createClient({
    url:
      "file:///" +
      join(
        import.meta.url.replace(/\\/g, "/").replace(/^file:\/\/+/i, ""),
        "../sqlite.db"
      ),
  })
)

export const createUser = async () =>
  (await db.insert(user).values({}).run()).toJSON()

export const getUsers = async () => (await db.select().from(user).run()).rows
