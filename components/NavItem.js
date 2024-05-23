import { Button, Typography, Collapse, Navbar, IconButton } from "@material-tailwind/react";
import {
 RectangleStackIcon,
 UserCircleIcon,
 CommandLineIcon,
 Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";

function NavItem({ children }) {
 return (
  <li>
   <Typography
    as="a"
    href="#"
    variant="paragraph"
    color="gray"
    className="flex items-center gap-2 font-medium text-gray-900">
    {children}
   </Typography>
  </li>
 );
}

export default function Navbar1() {
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen((cur) => !cur);

 useEffect(() => {
  window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
 }, []);

 return (
  <div className="relative mx-10">
   <div className="container mx-auto">
    <Navbar blurred color="white" className="relative z-50 mt-6 border-0">
     <div className="container mx-auto flex items-center justify-between">
      <Image src={"/1.svg"} alt="logo" width={150} height={150} />
      <ul className="ml-10 hidden items-center gap-8 lg:flex">
       <NavItem>
        <RectangleStackIcon className="h-5 w-5" />
        Cats
       </NavItem>
       <NavItem>
        <UserCircleIcon className="h-5 w-5" />
        List
       </NavItem>
       <NavItem>
        <Squares2X2Icon className="h-5 w-5" />
        Create Profile
       </NavItem>
       <NavItem>
        <CommandLineIcon className="h-5 w-5" />
        Dasboard
       </NavItem>
      </ul>
      <div className="hidden items-center gap-4 lg:flex">
       <Button variant="text">Log in</Button>
       <Button color="gray">sign in</Button>
      </div>
      <IconButton
       variant="text"
       color="gray"
       onClick={handleOpen}
       className="ml-auto inline-block lg:hidden">
       {open ? (
        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
       ) : (
        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
       )}
      </IconButton>
     </div>
     <Collapse open={open}>
      <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
       <ul className="flex flex-col gap-4">
        <NavItem>
         <RectangleStackIcon className="h-5 w-5" />
         Cats
        </NavItem>
        <NavItem>
         <UserCircleIcon className="h-5 w-5" />
         List
        </NavItem>
        <NavItem>
         <Squares2X2Icon className="h-5 w-5" />
         Create Profile
        </NavItem>
        <NavItem>
         <CommandLineIcon className="h-5 w-5" />
         Dashboard
        </NavItem>
       </ul>
       <div className="mt-6 mb-4 flex items-center gap-4">
        <Button variant="text">Log in</Button>
        <Button color="gray">sign in</Button>
       </div>
      </div>
     </Collapse>
    </Navbar>
   </div>
  </div>
 );
}
