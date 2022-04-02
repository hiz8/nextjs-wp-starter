# Next.js wp starter

nextjs-wp-starter repo.  
Based on [cms-wordpress in next.js example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress).

## Development

### 1. Build environment with docker.

```
# Build a development enviroment
$ docker-compose up -d
```

### 2. Prepare your WordPress site

Access `localhost:8000` to configure initial WordPress settings.
Then install and activate the WPGraphQL plugin.
We also recommend that you change your permalinks to a type that does not use parameters, i.e. something other than "basic".
If you do not change it, the values of the environment variables you set in the next step will be a bit redundant.

### 3. Set up environment variables

Copy `.env.local.example` to create `.env.local`.

```
cp .env.local.example .env.local
```

Open `.env.local` and set the WordPress GraphQL endpoint to `WORDPRESS_API_URL`.
If you did not change the permalink in step 2, you will probably get a 404 error unless you change it to something like `https://example.com/index.php?graphql`.

### Step 4. Run Next.js in development mode

```
npm install
npm run dev
```
