import '@/app/globals.css';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import { roboto } from '../fonts';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
