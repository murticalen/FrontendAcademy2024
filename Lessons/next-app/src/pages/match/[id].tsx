import { MatchDetailsResponse } from '@/api/responses/matchResponses'
import { matchDetails } from '@/api/routes/matchRoutes'
import { GetServerSideProps } from 'next'
import MatchLayout from '../../modules/Match/Match'

export default function Match({ details }: { details: MatchDetailsResponse }) {
  return <MatchLayout details={details} />
}

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context

  try {
    //@ts-ignore
    const { id } = params
    const details = await (await fetch(matchDetails(id))).json()

    return {
      props: { details },
    }
  } catch (error) {
    res.statusCode = 404
    return { props: { error } }
  }
}
