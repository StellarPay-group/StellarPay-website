export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Sign In</h1>
      <a
        href="/api/auth/signin"
        className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        Sign in with GitHub
      </a>
    </main>
  );
} 