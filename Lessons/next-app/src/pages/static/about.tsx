export default function About() {

  const v = Math.random()
  const isServer = typeof window === 'undefined'
  if (!isServer) {
    console.log(v)
  }

  return (
    <main>
      This in an about page for Sofascore academy. It is static without data.
    </main>
  )
}

// NOTE: THIS MAKES THE PAGE SERVER-SIDE RENDERED DESPITE BEING STATIC IN CONTENT
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {},
//     };
// };
