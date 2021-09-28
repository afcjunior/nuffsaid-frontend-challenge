import { useContext } from 'react'
import { SocketContext } from '../Context/Socket'

export function useSocket() {
  return useContext(SocketContext)
}
