"use client";
import React, { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import Box from "./Box";
import NavbarItem from "./NavbarItem";
import Button from "./Button";

interface NavBarProps {
	children: React.ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				label: "Home",
				active: !["/livesets", "/archive", "/events", "/about"].includes(
					pathname
				),
				href: "/",
			},
			{
				label: "Livesets",
				active: pathname === "/livesets",
				href: "/livesets",
			},
			{
				label: "Archive",
				active: pathname === "/archive",
				href: "/archive",
			},
			{
				label: "Events",
				active: pathname === "/events",
				href: "/events",
			},
			{
				label: "About",
				active: pathname === "/about",
				href: "/about",
			},
		],
		[pathname]
	);

	return (
		<div className="flex h-full w-full flex-col">
			<div className="hidden md:flex flex-row gap-x-2 bg-black w-full h-[100px] p-2">
                <Box>
                    asdfasdf
                </Box>
				<Box>
					<div className="flex flex-row gap-x-16 px-4 py-5 ">
						{routes.map((item) => (
							<NavbarItem key={item.label} {...item} />
						))}
					</div>
				</Box>
                <Box className=' items-center flex'>
                    <Button 
					  className='
					  bg-white
					  px-6
					  py-2
					  '>
						Signup
					</Button>
					<Button
					  onClick={() => {}}  
					  className='
					  bg-white
					  px-6
					  py-2
					  '
					>
						Log in
					</Button>
                </Box>
			</div>
            <main className='h-full flex-1 overflow-x-auto py-2'>
                {children}
            </main>
		</div>
	);
};

export default NavBar;
