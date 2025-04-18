import { Contact } from "@/components/contact";
import { HeadPages } from "@/components/shared";
import { IoIosMail } from "react-icons/io";

export default function Page() {
  return (
    <>
      <HeadPages className=" mt-[100px] bg-transparent"
        headText="Contactez-moi"
        icon={<IoIosMail className="w-10 h-10" />} />
      <Contact />
    </>
  );
}