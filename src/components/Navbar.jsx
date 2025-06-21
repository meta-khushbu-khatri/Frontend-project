import React from 'react'
import Myproject from '../Pages/Myproject'

function Navbar() {
    return (

        <div className='px-20 py-3 m-9 items-center bg-[#544583] h-36 '>

            <div className=" flex items-center justify-between">

                <div className="basis-1/3 text-amber-50 italic font-semibold pb-2" >Composely</div>

                <div className="flex items-center space-x-3">
                    <span className="text-white text-sm" >Hi Khushbu Khatri</span>
                    <img src="" alt="avatar" className='w-8 h-8 rounded-full border-2 border-white' />
                </div>

            </div>
            
            <div className='py-3'> <span className='text-xl text-[#CDBEE9]  font-serif '> My Projects</span></div>

            {/* //this is home div */}
            <div className='flex items-center gap-x-2 text-white '>
                <button className='p-3 bg-[#352a5a] border-[#352a5a] rounded-sm'>My Project</button>
                <button className='p-3 bg-[#352a5a] border-[#352a5a] rounded-sm'>My Account</button>
            </div>
        </div>


    )
}

export default Navbar

