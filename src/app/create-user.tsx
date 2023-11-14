"use client"

import { tryCreateUser } from "@/server/actions"
import { useRouter } from "next/navigation"

export function CreateUser() {
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        await tryCreateUser()
        router.refresh()
      }}
    >
      create new user
    </button>
  )
}
