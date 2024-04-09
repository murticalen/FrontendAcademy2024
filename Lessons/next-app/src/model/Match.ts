import { Team } from "./Team"

export interface Match {
    id: number
    customId: string
    slug: string
    homeTeam: Team
    awayTeam: Team
}