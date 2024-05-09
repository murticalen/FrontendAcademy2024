import { Context, createContext } from 'react'

export interface MessageContextType {
  message: string
}

const MessageContext = createContext<MessageContextType | undefined>(undefined)

export default MessageContext as Context<MessageContextType>
