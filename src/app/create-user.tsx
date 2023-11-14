"use client"

import { createUser } from "@/server/db"
import { useRouter } from "next/navigation"

export function CreateUser() {
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        await createUser()
        router.refresh()
      }}
    >
      create new user
    </button>
  )
}
