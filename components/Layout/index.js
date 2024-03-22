import Navbar from '@/components/Navbar'
import { TableFooter, TableHeader } from '@/styles'
import Image from 'next/image'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
  
      <main>{children}</main>
 
      <TableFooter>
       <Image src="/logo.png" alt="logo" width={60} height={60} />
        Capstone Project for Hung Nguyen - neuefische 2024
      </TableFooter>
   
    </>
  )
}