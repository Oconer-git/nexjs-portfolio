import '@/app/globals.css';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import { roboto } from '../fonts';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
