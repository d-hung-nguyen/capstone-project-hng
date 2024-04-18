import { BookOpenIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen((cur) => !cur);

 useEffect(() => {
  window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
 }, []);
 return (
  <section className="relative flex item-start  lg:mt-10 justify-between">
   <div className="!flex h-[90vh] w-fit items-center justify-between">
    <div className="container mx-auto lg:mt-0 z-10 absolute inset-x-0 ">
     <div className="grid grid-cols-12"></div>

     <Typography variant="h1" color="blue-gray" className="text-3xl !leading-snug lg:text-5xl">
      Manage Your <br />
      Cats with Ease
     </Typography>
     <Typography variant="lead" className="mb-10 mt-2 !text-gray-900">
      With Lizzy-Logt, you can effortlessly update and manage your cat's dashboard. <br /> Add new
      documents, schedule visits, and log daily activities all in one place.
     </Typography>

     <div className="flex flex-wrap items-center justify-between gap-4 gap-y-0 lg:justify-start"></div>
    </div>

    <div className="absolute inset-5 ml-auto w-25 z-0 rounded-bl-[100px]">
     <Image src="/2.png" fill={true} objectFit="cover" alt="cats" />
    </div>
   </div>
  </section>
 );
}
