Oauth setup with githubProvider steps:

1. github.com developer settings to open new oauth application
2.  Add AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET to .env
3. npm install @nextui-org/react@2.2.9 framer-motion@10.16.4 --legacy-peer-deps
4. npm i --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3 --legacy-peer-deps
5. npm i @prisma/client@5.22.0 --legacy-peer-deps
6. npx prisma migrate dev
7. Create db/index.ts in app for PrismaAdapter to call
8. Create 'auth.ts' using NextAuth and PrismaAdapter
9. Handle Github server and app server requests through app/api/auth/[...nextauth]/route.ts
10. Make server actions to handle signIn & signOut
11. Make client component app/components/profile.tsx to handle client signIn & signOut


Initial Design Steps after oauth setup:

1. Separate app data and apply each to different route
2. Make 'path helper' functions housed in single file.  The single file locations allows easier path(s) modifications across Link components or multiple files.
3. Organize step 1 into routing folders and corresponding page.tsx
4. Identify where data changes in application
5. Create server action placeholders for each change in step 4
6. Revalidate paths where clearing the cache occurs allowing server component to fetch fresh data