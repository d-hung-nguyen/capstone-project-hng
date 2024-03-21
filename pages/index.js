import { FlexCenter, HomeBackground } from "@/styles";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
    <FlexCenter>
     <Image src="/1.png" alt="hero" width={1000} height={500} priority={true} />
     </FlexCenter>
     </>
  );
}
