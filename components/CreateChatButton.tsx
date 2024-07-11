"use client"
import React from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'


function CreateChatButton(){

  const router = useRouter();
  const chatId='abc';

  const createNewChat = async ()  =>{

    // logic for creating a new chat

    router.push(`/chat/${chatId}`);

  }

  return (
   <Button variant={'ghost'}  onClick={createNewChat}>

    <MessageSquarePlusIcon />
   </Button>
  )
}

export default CreateChatButton