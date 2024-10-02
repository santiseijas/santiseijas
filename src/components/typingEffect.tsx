import React, { useEffect, useState } from 'react'

interface TypingEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 1000
}) => {
  const [text, setText] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [speed, setSpeed] = useState<number>(typingSpeed)
  const [showCursor, setShowCursor] = useState<boolean>(true)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord: string = words[index]
      if (isDeleting) {
        setText(prev => prev.slice(0, -1))
        setSpeed(deletingSpeed)
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1))
        setSpeed(typingSpeed)
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setIndex(prev => (prev + 1) % words.length)
      }
    }

    const typingInterval = setTimeout(handleTyping, speed)
    return () => clearTimeout(typingInterval)
  }, [text, isDeleting, index, speed, words, typingSpeed, deletingSpeed, pauseTime])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className='my-8'>
      <h1 className='tracking-tight dark:text-white'>
        hello
        <span className='animate-wave ml-2 inline-block' role='img' aria-label='hand-wave'>
          👋
        </span>
        ,<br></br>
        I’m <span>{text}</span>
        <span className={`ml-1 inline-block h-10 w-1 translate-y-3 ${showCursor ? 'bg-black' : 'bg-transparent'}`} />
      </h1>
    </div>
  )
}

export default TypingEffect
