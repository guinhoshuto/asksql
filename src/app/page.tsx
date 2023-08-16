import logo from '../assets/logo.svg'
import Image from 'next/image'
import {Trash2} from 'lucide-react'

export default function Home() {
  return (
    <div className='w-screen'>
      <header className='flex justify-between w-full p-8'>
        <Image src={logo} alt="logo" />
        <Trash2 className="h-8 w-8 text-white/80" />
      </header>
      <form action=""></form>
      <div></div>
    </div> 
  )
}
