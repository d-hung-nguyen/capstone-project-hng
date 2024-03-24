import Navbar from '@/components/Navbar'
import { TableFooter, TableHeader } from "@/components/StyledComponents"
import Image from 'next/image'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
  
      <main>{children}</main>
 
      <TableFooter>
       <Image src="/1.png" alt="logo" width={90} height={28} />
        Capstone Project for Hung Nguyen - neuefische 2024
      </TableFooter>
   
    </>
  )
}