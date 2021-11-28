import React, { useState, useRef, useEffect } from 'react'


 

export const useScrollToNav = (options:any) => {
  const scrollRef = useRef<any>(null) as React.MutableRefObject<HTMLInputElement>
  const [ isVisible, setIsVisible ] = useState(true)

  const callBackFunction = (entries:any) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
    console.log(entry.isIntersecting)
  }

  useEffect(() => {
    console.log(scrollRef.current)
    const observer = new IntersectionObserver(callBackFunction, options)
    if(scrollRef.current) observer.observe(scrollRef.current)

    return () => {
      if(scrollRef.current) observer.unobserve(scrollRef.current)
    }
  }, [scrollRef, options])

  return [scrollRef, isVisible]
}
