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
			<div className="block my-auto md:hidden z-50">
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
				className="flex flex-col md:flex-row bg-white absolute md:static top-8 "
			>
				<NavLink style={({isActive})=> {
                    return isActive ? {borderBottom:"2px solid red"} : {borderBottom:"1px solid gray"}
                }} className="text-right font-bold p-2 my-4 mx-6 " to="/">
					Home
				</NavLink>
				<NavLink style={({isActive})=> {
                    return isActive ? {borderBottom:"2px solid red"} : {borderBottom:"1px solid gray"}
                }} className="text-right font-bold p-2 my-4 mx-6" to= "/blogs">
					Blogs
				</NavLink>
				<NavLink style={({isActive})=> {
                    return isActive ? {borderBottom:"2px solid red"} : {borderBottom:"1px solid gray"}
                }} className="text-right font-bold p-2 my-4 mx-6" to= "/about">
					About
				</NavLink>
				<NavLink style={({isActive})=> {
                    return isActive ? {borderBottom:"2px solid red"} : {borderBottom:"1px solid gray"}
                }} className="text-right font-bold p-2 my-4 mx-6" to="/sign-up">
					Sign up
				</NavLink>
				<NavLink style={({isActive})=> {
                    return isActive ? {borderBottom:"2px solid red"} : {borderBottom:"1px solid gray"}
                }} className="text-right font-bold p-2 my-4 mx-6" to= "/login">
					Log in
				</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
