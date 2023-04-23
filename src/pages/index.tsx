import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" bg-white">
      <Navbar />
      <Header/>
    </div>
  )
}
