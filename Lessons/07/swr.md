Create an example for SWR:
- in App.tsx you need to wrap everything in SWRConfig component
- create a match page in `pages/match/[id].tsx` file
- in `Match.tsx` file in `modules/Match` directory fetch match details from Sofascore event details route
- write a basic interface for it inside `model` directory

Start by only fetching match details in Match component and then explain how it can work better by fetching them on server and then re-validating on client.
