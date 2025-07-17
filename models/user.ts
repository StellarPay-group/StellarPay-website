/**
 * User model and types. Extend as needed for your domain.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  // Add more fields as needed
}

// Example: Add validation or ORM model here if needed
