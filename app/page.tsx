"use client";

import { Button } from "@/components/ui/button";
import { useExampleStore } from "@/store/exampleStore";

export default function Home() {
  const count = useExampleStore((state) => state.count);
  const increment = useExampleStore((state) => state.increment);
  const decrement = useExampleStore((state) => state.decrement);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Next.js Starter!</h1>
      <div className="flex items-center gap-4 mb-6">
        <Button onClick={decrement}>-</Button>
        <span className="text-2xl font-mono w-12 text-center">{count}</span>
        <Button onClick={increment}>+</Button>
      </div>
      <Button asChild>
        <a href="/about">Go to About Page</a>
      </Button>
    </main>
  );
}
