# Job Tracker

## Getting Started

Follow these steps to set up and run this project locally.

### Prerequisites

- Node.js installed on your machine
- A Clerk account

### Installation

1. **Download dependencies**

   ```sh
   npm i
   ```

2. **Set up Clerk authentication**

   1. Create a [Clerk](https://clerk.com/) account and set up a project for this application.
   2. Retrieve your **publishable key** and **secret key** from the Clerk dashboard.
   3. Define the following environment variables in a `.env.local` file:
      ```env
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
      CLERK_SECRET_KEY=your_secret_key
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_sign_in_url
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_sign_up_url
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=your_after_sign_in_url
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=your_after_sign_up_url
      ```

3. **Run the application**
   ```sh
   npm run dev
   ```

Your application should now be running locally!
