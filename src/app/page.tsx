import Image from "next/image";
import LogoArticle from "/public/img/logos.webp";
import Logo from "/public/img/logo.webp";
import LoadingSpinerV2 from "@/components/loading/spiner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex flex-col items-center fadeIn ani-delay-0.1">
        <Image src={LogoArticle} alt="" />
        <Image src={Logo} alt="" />
      </div>
      <h1 className=" fadeIn mt-3 text-xs ani-delay-0.2">PEN MADE PROJECT</h1>

      <Button variant={"outline"} className="text-xs mt-5 fadeIn ani-delay-0.3">
        <LoadingSpinerV2 />
        Building....
      </Button>

      <div className="text-xs fadeIn mt-10  ani-delay-0.4">made by. 방어력</div>
    </div>
  );
}
