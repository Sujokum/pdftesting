

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello')
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
