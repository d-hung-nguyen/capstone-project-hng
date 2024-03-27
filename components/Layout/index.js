/** @format */

import Navbar from "@/components/Navbar";
import {
  GradientBackground,
  Spacer,
  TableFooter,
  TableHeader,
} from "@/components/StyledComponents";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <GradientBackground>
        <Navbar />

        <main>{children}</main>

        <TableFooter>
          <Image
            src="/1.png"
            alt="logo"
            width={60}
            height={15}
            />
          Capstone Project for Hung Nguyen - neuefische 2024
            </TableFooter>
      </GradientBackground>
    </>
  );
}
