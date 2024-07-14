import { withAuth } from "next-auth/middleware"

// protecting the routes 
export const middleware = withAuth({
    // Define any custom middleware options here if needed
  });

// pages to protect
export const config = {
    matcher: ["/chat", "/chat/:id*","/register"],
    }