

export async function getServerSideProps() {
  const res = await fetch('https://pdftesting-a0l489qs5-sujokum.vercel.app/api/hello')
  const repo = await res.json()
  return { props: { repo } }
}

export default function Home({repo}) {




  return (
    <>

   <h1>
    {repo.message}
   </h1>
    </>
  )
}
