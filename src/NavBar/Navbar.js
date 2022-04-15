import React from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<header className="flex justify-between mx-4 md:mx-12 lg:mx-32">
			<nav>
				<Link className="text-6xl font-sans font-semibold" to="/">Logo</Link>
			</nav>
			<nav className="hidden md:block">
				<NavLink className="font-bold py-4 px-6" to="/">
					Home
				</NavLink>
				<NavLink className="font-bold py-4 px-6" to="/blogs">
					Blogs
				</NavLink>
				<NavLink className="font-bold py-4 px-6" to="/about">
					About
				</NavLink>
				<NavLink className="font-bold py-4 px-6" to="/sign-up">
					Sign up
				</NavLink>
				<NavLink className="font-bold py-4 px-6" to="/login">
					Log in
				</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
