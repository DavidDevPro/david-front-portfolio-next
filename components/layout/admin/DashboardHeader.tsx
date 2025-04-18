"use client";

import { UserNav } from "@/components/layout/admin";
import { APP_NAME } from '@/config/config';
import Image from 'next/image';

export const DashboardHeader = () => {

  return (
    <header className="shadow-sm hidden sm:block px-4">
      <div className="flex flex-row items-center w-full h-full overflow-auto rounded-lg border bg-card text-card-foreground shadow-sm px-4">
        <Image
          src="/images/icons/analytique.png"
          alt={`${APP_NAME} - Image de la page de connexion`}
          width={64}
          height={64}
          className="w-18 h-18 object-cover"
        />
        <h1 className='w-full text-3xl text-center font-bold tracking-tight text-accent'>
          Admin Porfolio
        </h1>
        <UserNav />
      </div>
    </header>
  );
};
