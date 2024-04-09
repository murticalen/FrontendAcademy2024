Example: `Refs.tsx`

Show how refs can be used for storing value which don't trigger re-renders. Set initial refs value to window.innerWidth. Repeat the point from last lesson about how it can't be set on server, but it needs to be set in `useEffect`.

Show the value from the ref on the screen.

Try playing around with your window width and show that ref change doesn't re-render the component even though it is now smaller/bigger. Then refresh the page using `F5` and see a different number.
