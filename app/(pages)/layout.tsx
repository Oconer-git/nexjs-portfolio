import "@/app/globals.css";
import { Poppins } from "next/font/google";

import Footer from "./(home)/_components/Footer";
import Navbar from "./(home)/_components/Navbar";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className}>
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
