import { roboto_slab } from '@/app/fonts'
import { brands } from '@/constant'

const Partners = () => {
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-[86%] h-full flex flex-col items-center justify-evenly gap-12'>
                <div className={`${roboto_slab} w-[55%] flex flex-col gap-5 justify-center items-center text-center`}>
                    <span className='text-4xl'>OUR SUPPORTERS</span>
                    <span className='text-xl'>
                        The project has technical guidance and support from the <br />following organizations and individuals. 
                    </span>
                </div>
                <div className="flex flex-wrap justify-center gap-8 w-full">
                    <div className="bg-white flex items-center justify-center text-white h-[130px] w-[280px] sm:w-[300px] bg-br1 bg-center bg-contain bg-no-repeat rounded-lg"></div>
                    <div className="bg-white flex items-center justify-center text-white h-[130px] w-[280px] sm:w-[300px] bg-br2 bg-center bg-contain bg-no-repeat rounded-lg "></div>
                    {/* <div className="bg-white flex items-center justify-center text-white h-[130px] w-[280px] sm:w-[300px] bg-br3 bg-center bg-contain bg-no-repeat rounded-lg shadow-md"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Partners