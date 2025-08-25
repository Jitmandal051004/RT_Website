import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='h-[728px] bg-[#E5E4DF] flex justify-center items-center '>
            <div className='w-[86%] flex justify-center items-center gap-20'>
                <div className="w-[792px] h-[520px] bg-abtBg bg-cover bg-[100%_40%] overflow-hidden bg-no-repeat rounded-2xl"></div>
                <div className="w-[567px] h-[440px] flex flex-col gap-5 justify-center">
                    <span className='text-3xl font-bold'>ABOUT US</span>
                    <span>Designed by college students from <span className="text-orange-500 font-bold">BITS Pilani Goa Campus</span>, the aim of our project is to design and build a <span className="text-orange-500 font-bold">5-m aperture radio telescope</span> with minimal cost and apply new automation as well as computational techniques.</span>
                    <span>Apart from learning and applying the concepts of <span className="text-orange-500">mechanical engineering</span>, <span className="text-orange-500">data acquisition</span> and <span className="text-orange-500">electronic design</span>, we aim to observe and analyze <span className="text-orange-500 font-bold">novel radio data</span> like solar observation and tracking of celestial objects to develop galaxy rotation curves. Our future projects include <span className="text-orange-500">pulsar timing array</span> and binary pulsar observations.</span>
                    <span>The radio telescope will foster an active interest in <span className="text-orange-500">radio astronomy</span> and astrophysics at <span className="text-orange-500 font-bold">BITS Goa</span>. This would also serve as the <span className="text-orange-500 font-bold">first Radio Telescope</span> of Goa. </span>
                    {/* <span className='mt-10'><Link className='hover:text-gray-500 text-2xl border-b-2 border-b-black hover:border-b-gray-500' href={"/"}>Know More</Link></span> */}
                </div>
            </div>
        </div>
    )
}

export default About