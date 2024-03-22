import Navbar from '@/components/Navbar'
import { TableFooter, TableHeader } from '@/styles'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
  
      <main>{children}</main>
 
      <TableFooter>
        Capstone Project for Hung Nguyen - neuefische 2024
      </TableFooter>
   
    </>
  )
}