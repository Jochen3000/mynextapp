import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="my homepage" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur tempora voluptatem in cum nihil et aliquid nulla, blanditiis voluptates assumenda doloremque mollitia incidunt eaque, labore quisquam excepturi odit autem?</p>
        <Link href='events'><a>Go to events</a></Link>
      </div>
    </>
  )
}
