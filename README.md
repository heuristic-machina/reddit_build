Section A
Oauth setup with githubProvider steps:

1. github.com developer settings to open new oauth application
2  Add AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET to .env
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

Section B
Initial Design Steps after oauth setup:

1. Separate app data and apply each to different route
2. Make 'path helper' functions
3. Organize step 1 into routing folders and corresponding page.tsx
4. Identify where data changes in application
5. Create server action placeholders for each change in step 4

Section C
After Auth conditioning find static & dynamic routes:
1. Stop running server
2. npm run build
3. The header component currently reads cookies by using auth making it dynamic (less performant)
4. Creating a headerAuth component using useSession() hook won't directly access cookies.  
5. useSession() hook makes a request using Nextjs automatic generated route to the backend to figure out auth status
6. Static pages utilizing caching are more performant in production giving user pre-rendered result

Section D
Build out homepage layout then functionality:
1. Set layout of components
2. NextUI elements styling added
3. Add field validation with zod to server actions
4. Match the return type from the formState in the server action to the useFormState() hook argument in the client component.
5. Add error handling as a prop to the client component in the create topic popover content fields.
6. Add authentication validation if user tries submitting to the form when not logged in or if there is a failure to save to the database for any reason.