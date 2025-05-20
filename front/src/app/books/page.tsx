import LayoutPage from '@/module/layout/layoutPage'
import React from 'react'


export default function page() {
  return (
    <LayoutPage>
             <div className="flex justify-center gap-6 p-4 bg-amber-50 " >
        
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-tx0-1MgYrJnsBVpjNlKRRWos2ZevXaGug&s"
            alt="Libro 1"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">One Hundred Years Of Solitude</h2>
          <a
            href="https://www.secst.cl/upfiles/documentos/19072016_1207am_578dc39115fe9.pdf"
            className="mt-2 text-blue-500 hover:underline"
          >
            Ver PDF
          </a>
        </div>

       
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://media.vogue.mx/photos/675880481e7ac6dc01da342d/master/w_1600%2Cc_limit/cronica-de-una-muerte-anunciada-libro.jpg"
            alt="Libro 2"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">Chronicle of a Death Foretold</h2>
          <a
            href="https://unisinucartagena.edu.co/wp-content/uploads/2020/07/Cronica_de_una_Muerte_Anunciada-Gabriel_Garcia_Marquez.pdf"
            className="mt-2 text-blue-500 hover:underline"
          >
            Ver PDF
          </a>
        </div>

        
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE0Ge9V74WHun9FGyEbg0a7XqLa_zOfWw8g&s"
            alt="Libro 3"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">In August We See Each Other</h2>
          <a
            href="https://www.lapluma.net/wp-content/uploads/2024/03/Gabriel-Garcia-Marquez.-En-agosto-nos-vemos.pdf"
            className="mt-2 text-blue-500 hover:underline"
          >
            Ver PDF
          </a>
        </div>
      </div>
      <div className="flex justify-center gap-6 p-4 bg-amber-50 " >
        
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrckP5QO40_Rciz-hcLiIHnl3NcpEqdANYvg&s"
            alt="Libro 4"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">The Ingenious Gentleman Don Quixote of La Mancha</h2>
          <a
            href="https://cvc.cervantes.es/literatura/lee/coleccion/pdf/quijote.pdf"
            className="mt-2 text-blue-500 hover:underline"
          >
            Ver PDF
          </a>
        </div>

       
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuOAqBMLjIH_rJ4Ry5FmpBh37wFrLAqb-zw&s"
            alt="Libro 2"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">La galatea</h2>
          <a
            href="https://ia601306.us.archive.org/9/items/lagalatea01cervuoft/lagalatea01cervuoft.pdf"
            className="mt-2 text-blue-500 hover:underline"
          >
            Ver PDF
          </a>
        </div>

        
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE0Ge9V74WHun9FGyEbg0a7XqLa_zOfWw8g&s"
            alt="Libro 3"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">In August We See Each Other</h2>
          <a
            href="https://www.lapluma.net/wp-content/uploads/2024/03/Gabriel-Garcia-Marquez.-En-agosto-nos-vemos.pdf"
            className="mt-2 text-blue-500 hover:underline"
          >
            Ver PDF
          </a>
        </div>
      </div>
        
    </LayoutPage>
  )
}
