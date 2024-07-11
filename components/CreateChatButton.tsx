import React from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'

type Props = {}

const CreateChatButton = (props: Props) => {
  return (
   <Button variant={'ghost'}>
    <MessageSquarePlusIcon />
   </Button>
  )
}

export default CreateChatButton