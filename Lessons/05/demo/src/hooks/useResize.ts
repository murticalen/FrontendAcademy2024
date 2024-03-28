import { DependencyList, useEffect } from 'react'

export const useResize = (onResize: () => void, deps: DependencyList) => {

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, deps)

}
