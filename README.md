# envercel

For testing different environments with [Next.js](https://nextjs.org) & [Vercel](https://vercel.com).

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
preview | `preview` | https://envercel-preview.vercel.app/