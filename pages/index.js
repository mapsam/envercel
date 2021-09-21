import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  const welcome = process.env.WELCOME || 'Uh oh';
  const env = process.env.ENV || 'Unknown';
  return { props: { welcome, env } };
}

export default function Index({ welcome, env }) {
  return (
    <div>
      <Head>
        <title>envercel</title>
        <meta name='description' content='envercel does next.js and vercel environments' />
      </Head>

      <p>{welcome}! This is the <strong>{env}</strong> environment.</p>
      <p>See more at <Link href='https://github.com/mapsam/envercel'>github.com/mapsam/envercel</Link>.</p>
    </div>
  )
}
