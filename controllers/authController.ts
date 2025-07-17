import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";

/**
 * AuthController handles authentication configuration and logic.
 * Extend this class to add more providers or custom logic.
 */
export class AuthController {
  static getProviders() {
    return [
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
      // Add more providers here
    ];
  }

  static getAuthOptions(): NextAuthOptions {
    return {
      providers: this.getProviders(),
      // Add more NextAuth config here (callbacks, pages, etc.)
    };
  }
}
