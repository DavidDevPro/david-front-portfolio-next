"use client";

import { CopyrightText } from '@/components/shared';

export const DashboardFooter = () => {
    return (
      <footer id="footer" className="bg-card dark:bg-background py-2 relative z-1">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:w-10/12 2xl:w-full mx-auto text-center text-sm text-secondary lg:flex lg:items-center lg:justify-center">
            <CopyrightText className="text-base sm:text-center" />
          </div>
        </div>
      </footer>
    );
};
