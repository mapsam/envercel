import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  const name = process.env.ENVERCEL || 'Unknown';
  const env = Object.keys(process.env).map((e) => {
    return {key: e, val: process.env[e] }
  });

  return { props: { env, name } };
}

export default function Index({ env, name }) {
  const vars = env
    .sort((a, b) => a.key > b.key)
    .map((e, i) => {
      return (<li key={i}><strong>{e.key}</strong>: {e.val}</li>);
    });

  return (
    <div>
      <Head>
        <title>envercel</title>
        <meta name='description' content='envercel does next.js and vercel environments' />
      </Head>

      <p>This is a Next.js app. Using the <strong>{name}</strong> configuration.</p>
      <p>See more at <Link href='https://github.com/mapsam/envercel'>github.com/mapsam/envercel</Link>.</p>

      {env.VERCEL &&
        <p>This app is running on Vercel in the <strong>{env.VERCEL_ENV}</strong> environment.</p>
      }

      <p>Environment:</p>
      <ul>{vars}</ul>
    </div>
  )
}
