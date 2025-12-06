import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Search from '../components/Search'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <div className="flex gap-2">
                {/* <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link> */}

                <div className="navbar shadow-sm bg-blue-800">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link to="/" className="[&.active]:font-bold">
                                    Home
                                </Link></li>
                                <li><Link to="/topAnime" className="[&.active]:font-bold">
                                    Top Anime
                                </Link></li>
                                <li><Link to="/about" className="[&.active]:font-bold">
                                    About
                                </Link></li>

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl font-game text-yellow-500">Animaxine</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/" className="[&.active]:font-bold  text-yellow-500">
                                Home
                            </Link></li>
                            <li><Link to="/topAnime" className="[&.active]:font-bold  text-yellow-500">
                                Top Anime
                            </Link></li>
                            <li><Link to="/about" className="[&.active]:font-bold  text-yellow-500">
                                About
                            </Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Search />
                    </div>
                </div>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </React.Fragment>
    )
}
