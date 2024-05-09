import { MatchDetailsResponse } from '@/api/responses/matchResponses'
import { matchDetails } from '@/api/routes/matchRoutes'
import useSWR from 'swr'

export default function Match({ details }: { details: MatchDetailsResponse }) {

  const {
    data,
    error,
    isLoading,
  } = useSWR<MatchDetailsResponse>(matchDetails(details.event.id), { fallbackData: details })

  if (error || isLoading || !data) {
    return null
  }

  return (
    <>
      <div>This is a match page:</div>
      <div>{data.event.homeTeam.name} - {data.event.awayTeam.name}</div>
    </>
  )

}
