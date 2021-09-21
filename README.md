# envercel

For testing different environments with Next.js & Vercel.

### Local

```shell
# run dev - loads .env.development
npm run dev

# run production - loads .env.production
npm run build && npm start
```

### Deploy

Deployments are automated by Vercel.

environment | branch | uri
---|---|---
production | `main` | https://envercel.vercel.app/
preview | `preview` | https://envercel-dev.vercel.app/