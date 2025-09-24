"use client";

import Image from "next/image";
import { SocialIcons } from "@/components/shared";

export const ContactContent: React.FC = () => {
  return (

    <div className="w-full space-y-4 flex flex-col gap-2">
      <div className='w-full mx-auto mb-10'>
        <Image
          src="/images/img/contact.webp"
          alt="image de section contact"
          width={1200}
          height={686}
          quality={80}
          aria-label="image de section contact"
          priority
          loading="eager"
          className="w-full object-cover object-center rounded-xl border shadow-gray-500/50 border-secondary shadow-md"
        />
      </div>
      <div>
        <h3 className="text-secondary text-lg font-semibold mt-4 text-center">
          Retrouvez-moi sur les réseaux sociaux
        </h3>
        <SocialIcons
          iconSize="w-7 h-7"
          spaceBetween="space-x-4"
          containerClassName="mt-4 flex justify-center  "
          align="left"
          aria-label="icones pour les réseaux sociaux"
          iconClassName="text-card hover:text-secondary p-2 sm:p-3 bg-secondary hover:bg-card hover:text-secondary rounded-full border border-accent transition-bg duration-500 ease-in-out hover:opacity-95 "
        />
      </div>
    </div>

  )
}