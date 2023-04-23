import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Users from '@/components/Users'
import Content from '@/components/Content'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" bg-white text-slate-900">
      <Navbar />
      <Header/>
      {/* <Users/> */}
      <Content/>
    </div>
  )
}
