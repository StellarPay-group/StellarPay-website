import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg text-center max-w-xl">This is a protected dashboard page. You are signed in as {session?.user?.email}.</p>
      <a href="/api/auth/signout" className="mt-6 underline text-blue-600">Sign out</a>
    </main>
  );
} 