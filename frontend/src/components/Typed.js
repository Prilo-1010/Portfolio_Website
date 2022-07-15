import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Typed() {

  const { text } = useTypewriter({
    words: ['Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Freelancer'],
    loop: 0,
  })

  return (
    <span className='home-span'>{text}</span>
  )
}
