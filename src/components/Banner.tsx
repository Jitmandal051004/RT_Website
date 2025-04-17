import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='w-full flex justify-center border-b border-b-black'>
            <div className='w-[94.5%] h-[35rem] lg:h-[50rem] rounded-xl overflow-hidden flex justify-around items-center'>
                <div className='w-1/2 flex flex-col justify-center items-center gap-2'>
                    <p className={`${roboto_slab.className} flex flex-col text-right w-[80%] lg:w-[60%] text-pretty font-semibold text-zinc-900 font-mono text-xl lg:text-[3rem] leading-[1.35]`}>
                        Welcome to The RT Project
                    </p>
                    <p className={`${roboto_slab.className} flex flex-col text-right w-[80%] lg:w-[60%] text-pretty font-normal text-zinc-900 font-mono text-sm lg:text-base leading-[1.35]`}>
                        India's First Student<br />Led Radio Telescope Initiative
                    </p>
                </div>
                <div className='w-1/2 h-3/4 bg-cover bg-hero-banner rounded-xl'>
                </div>
            </div>
        </div>
    )
}

export default Banner