import React from 'react'
import Navbar from '../../components/Navbar'
import {ModeIcon,} from "../../components/Icons"
import { SaveImgIcon, StatsIcon, GiftIcon} from "../../components/Icons"
import Avatar from "../../assets/images/avatar.png"


function Home() {
  return (
    <div className='w-[80%]'>
      <div className='w-[70%] border-r-[1px] border-slate-400 h-[100vh] overflow-auto'>
        <div className=' bg-white sticky top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Home</h2>
          <button><ModeIcon/></button>
        </div>
        <form className='pb-[46px] relative pl-[22px] items-start flex space-x-[15px] '>
          <img src={Avatar} alt="Avatar icon" width={60} height={60} />
          <div className='flex flex-col w-full mt-[11px] space-y-[51px]'>
            <input className='font-semibold mb-[53px] text-[22px] placeholder:text-[#828282] outline-none' type="text" placeholder='What’s happening'  name='postValue' />
            <div className='flex space-x-[22px]'>
              <label typeof='file' className='hidden'/>
              <SaveImgIcon/>
              <label/>
              <label typeof='file' className='hidden'>
              <GiftIcon/>
              </label>
              <label typeof='file' className='hidden'>
              <StatsIcon/>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className='w-[30%]'>

      </div>
    </div>
  )
}

export default Home
