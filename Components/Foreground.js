"use client"
import React, { useRef } from 'react'
import Cards from './Cards';

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            id: 0,
            desc: "Hello there!!! How is everything going on.",
            fileSize : "0.4mb",
            close : true,
            tag : {
                isOpen : true,
                tagTitle : "Download Now",
                tagColor : "green"
            },
        },
        {
            id : 1,
            desc: "Hii Guys, How are you ?",
            fileSize : "0.5mb",
            close : false,
            tag : {
                isOpen : true,
                tagTitle : "Download Here",
                tagColor : "blue"
            }
        },
        {
            id : 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize : "0.4mb",
            close : true,
            tag : {
                isOpen : false,
                tagTitle : "",
                tagColor : ""
            }
        },
        
    ];
  return (
    <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-10 flex-wrap'>
        {data.map((item, i) => (
            <Cards data = {item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Foreground;