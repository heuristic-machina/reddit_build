Oauth setup with githubProvider steps:

![cloning_reddit_next_auth_setup](https://github.com/user-attachments/assets/1d4ffd61-2634-4937-b997-c163a206602e)


Initial Design Steps after oauth setup:

1. Separate app data and apply each to different route
2. Make 'path helper' functions
3. Organize step 1 into routing folders and corresponding page.tsx
4. Identify where data changes in application
5. Create server action placeholders for each change in step 4
6. Revalidate paths where clearing the cache occurs allowing server component to fetch fresh data