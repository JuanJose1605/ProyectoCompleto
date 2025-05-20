export function useLayout(pathname: string ) {
    const routes= [{
        path: '/home',
        name: 'Home'
    }, 
    {
        path: '/authors',
        name: 'Autores'
    },
    {
        path: '/books',
        name: 'Libros'
    },
    ];

    const title = pathname === "/"
    ? "Login"
    : pathname === "/user"
    ? "User"
    : "blog";
    return{
       title, routes
    }
}