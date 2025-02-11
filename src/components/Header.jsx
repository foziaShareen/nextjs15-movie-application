import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import { AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link'




export default function Header() {
    return (
        <div className='flex justify-between items-center   max-w-6xl mx-auto:'>
            <div className='flex  gap-4'><MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="about" address="/" Icon={AiFillInfoCircle} />
            </div>
            <div className='flex items-center gap-2'>
                <Link href={'/'}className='font-bold  text-2xl bg-amber-500  px-1 rounded'>IMDb</Link>
                <span>Clone</span>
            </div>
            
        </div>
    )
}
