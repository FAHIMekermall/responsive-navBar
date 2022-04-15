import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiMenu, HiOutlineMenuAlt1 } from "react-icons/hi"

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className="flex justify-between mx-4 md:mx-12 lg:mx-32">
			<nav>
				<Link className="text-6xl font-sans font-semibold" to="/">
					Logo
				</Link>
			</nav>
			<div className="z-50">
				{menuOpen ? (
					<HiOutlineMenuAlt1
						size={"2em"}
						onClick={() => setMenuOpen(false)}
					/>
				) : (
					<HiMenu
						size={"2em"}
						onClick={() => setMenuOpen(true)}
					></HiMenu>
				)}
			</div>
			<nav
				style={!menuOpen ? { right: "-220px" } : { right: "20px" }}
				className="flex flex-col md:flex-row bg-white absolute top-8 "
			>
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
