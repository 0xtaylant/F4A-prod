import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

import NavBar from "@/components/NavBar";
import SupabaseProviders from "@/providers/SupabaseProviders";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "F4A",
	description: "F4A Radio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SupabaseProviders>
					<UserProvider>
						<ModalProvider/>
						<NavBar>{children}</NavBar>
					</UserProvider>
				</SupabaseProviders>
			</body>
		</html>
	);
}
