"use client"
import React from 'react'
import { FaFile } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='p-2 w-52 h-64 rounded-[35px] bg-zinc-700 relative overflow-hidden shadow-[0_0_6px_3px_rgba(0,0,0,0.3)] shadow-zinc-800 border-[1px] border-zinc-600'>
        <div className='py-5 px-3 flex flex-col gap-4'>
            <FaFile />
            <p className='font-semibold text-zinc-100 text-sm'>{data.desc}</p>
        </div>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex justify-between items-center px-5 py-3 mb-1'>
                <h4> {data.fileSize} </h4>
                <h4 className='p-2 bg-zinc-500 rounded-full'>
                    {data.close ? <IoCloseSharp/> : <FaDownload/>}
                </h4>
            </div>
            {data.tag.isOpen ? (
                <div className= {`px-3 py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-500"} text-center flex justify-center items-center tag w-full`}>
                    <h3 className='font-semibold'> {data.tag.tagTitle} </h3>
                </div>
            ) : null}
        </div>
    </motion.div>
  );
}

export default Cards;