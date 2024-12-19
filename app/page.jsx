import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

import User from "./components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className="relative flex place-items-center">
        <h1>Project</h1>
        <pre>{JSON.stringify(session)}</pre>
        <User />
      </div>
      <Link href="/api/auth/signin">Sign in</Link>
    </main>
  );
}
