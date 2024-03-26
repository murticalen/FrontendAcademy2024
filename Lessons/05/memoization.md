Example: `Memoization.tsx`

Demonstrate how using `useCallback` hook in combination with `React.memo` can lead to performance optimization. First create a `Button` component which takes two arguments: `onClick` function, which obviously occurs on user click and **optional** `name` prop. When the Button gets the `name` prop, it logs to console that it, by the `name`, has re-rendered.

Add four Buttons for user to click, all combinations of two options:
- memoized onClick, component wrapped in React.memo
- memoized onClick, component NOT wrapped
- NOT memoized onClick, component wrapped in React.memo
- NOT memoized onClick, component NOT wrapped

The `onClick` method should set a random number to the `Memoization` component, so that it surely triggers re-render each time.

Add a commented-out code which sets the random number every second, so it can be shown that it's not just about click, if one wants to try it out.
