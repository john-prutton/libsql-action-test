import { getUsers } from "@/server/db"
import { CreateUser } from "./create-user"

export default async function Home() {
  const users = await getUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(users)}
      <CreateUser />
    </main>
  )
}
