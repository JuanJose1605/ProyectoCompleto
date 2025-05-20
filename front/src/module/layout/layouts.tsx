"use client";
import React from 'react'
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}
export default function layouts({children}: Props) {
  return (   
    <main className="bg px-20 h-screen flex justify-center gap-5 items-center">
    <div className="bg-amber-50 rounded-lg my-20 flex flex-col items-center px-50 ">
    <img src="https://apps.corhuila.edu.co/SintomasCovid/src/LogoCorhuila%20HD.png"
        alt="logo" width={80} height={80}  />
      <header className=" mb-3">
        <h1 className="text-neutral-950  font-bold">Bienvenido A Tu Biblioteca</h1>
      </header>
  
      {children}
    </div>
  </main>
  
  )
}
