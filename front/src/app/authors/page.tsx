import LayoutPage from '@/module/layout/layoutPage'
import React from 'react'


export default function page() {
  return (
    <LayoutPage>
            
          <div className="flex justify-center gap-6 p-4 bg-amber-50 " >
        
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://i0.wp.com/www.entreperiodistas.com/wp-content/uploads/2016/04/garcia-marquez-1.jpg?fit=960%2C640&ssl=1"
            alt="autor 1"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">Gabriel Garcia Marquez</h2>
        </div>

       
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://todoconenhe.com/wp-content/uploads/2023/10/cervantes.jpg"
            alt="autor 2"
            className="w-full h-auto object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">Miguel De Cervantes</h2>
          
        </div>

        
      
      </div>
    </LayoutPage>
  )
}
