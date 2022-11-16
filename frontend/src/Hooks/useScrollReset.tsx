import { useEffect } from 'react'

export default function useScrollReset() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
