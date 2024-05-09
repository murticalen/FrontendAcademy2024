import MessageContext from '@/context/MessageContext'
import { Box } from '@kuma-ui/core'
import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal = () => {

  const message = useContext(MessageContext)
  const [showToast, setShowToast] = useState(false)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>()

  useEffect(() => {
    setPortalRoot(document.getElementById('portal-root'))
  }, [])

  return (
    <>
      <Box m='spacings.sm'
           onClick={() => {
             setShowToast(true)
             setTimeout(() => setShowToast(false), 3000)
           }}
      >
        Click this for a toast
      </Box>
      {showToast && portalRoot && createPortal(<Box bg='lightblue' p='spacings.sm'>{message.message}</Box>, portalRoot)}
    </>
  )
}
