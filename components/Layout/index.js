import Navbar from '@/components/Navbar'
import { TableFooter, TableHeader } from '@/styles'
 
export default function Layout({ children }) {
  return (
    <>
      <TableHeader>
      <Navbar />
      </TableHeader>
      <main>{children}</main>
 
      <footer>
        Capstone Project for Hung Nguyen - neuefische 2024
      </footer>
   
    </>
  )
}