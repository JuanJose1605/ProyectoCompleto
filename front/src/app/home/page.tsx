"use client";

import LayoutPage from '@/module/layout/layoutPage'
import { useUserStore } from '@/store/user.store';
import Link from 'next/link'
import React, { useEffect } from 'react'


export default function page() {
  const getUser = useUserStore(state => state.getUser);
      const user = useUserStore(state => state.user);
     useEffect(()=>{
       getUser()
       
     })
  return (
    <LayoutPage>            
        <div className="flex flex-row bg-amber-50 my-2 gap-4 p-4 items-center">
        <div className="flex-1  ">
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p>Este proyecto está realizado para mostrar algunos libros que tenemos en nuestro catálogo.</p>
          <Link href="/books">
      <button
      className=" m-5 w-90 bg-blue-700 text-white p-3 rounded-md ">Ver Libros</button>
    </Link>
        </div>
        <img
          src="https://corhuila.edu.co/wp-content/uploads/2021/08/IMG_6900-1-750x500.jpg" 
          alt="Libros"
          className="w-150 h-auto rounded shadow"
        />
      </div>
    </LayoutPage>
  )
}
