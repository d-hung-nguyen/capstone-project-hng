/** @format */

import {Navbar} from "@/components/Navbar";
import {
  Background,
  PageTitle,
  TableFooter,
} from "@/components/StyledComponents";
import Image from "next/image";
import {Wrapper} from "../boxes";

export default function Layout({children}) {
  return (
    <>
      <Wrapper>
        <Navbar />
        <main>{children}</main>
        <TableFooter>
          Capstone Project for Hung Nguyen - neuefische 2024
        </TableFooter>
      </Wrapper>
    </>
  );
}
