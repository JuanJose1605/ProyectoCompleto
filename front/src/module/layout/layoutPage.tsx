"use client";
import React, { use, useEffect } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from '../hooks/useLayout';
import { useUserStore } from '@/store/user.store';

interface Props {
  children: React.ReactNode;
}
export default function layoutPage({children}: Props) {
  const pathname = usePathname();
    const { title, routes } = useLayout(pathname);

    const getUser = useUserStore(state => state.getUser);
    const user = useUserStore(state => state.user);
   useEffect(()=>{
     getUser()
     
   })
  return (
    <main className="">
    <div className=" flex flex-col items-center bg-amber-50 rounded-b-full   px-50 ">
    <img src="https://apps.corhuila.edu.co/SintomasCovid/src/LogoCorhuila%20HD.png"
        alt="logo" width={80} height={80}  /> 
    </div>
    <div className='bg-amber-50 '>
       <div className="flex flex-col items-center bg-amber-50 rounded-b-full   px-50 ">
        <h1 className="text-gray-950 font-bold text-2xl text-center">{user?.name || ''}</h1>
        <h1 className='text-gray-950 text-lg '>Que deseas realizar</h1>
          <nav >
              <ul className="flex gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-green-400"
                        : "text-gray-950"
                    } font-semibold capitalize`}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav>
       </div>
                 
    </div>
    {children}
  </main>
  
  )
}
