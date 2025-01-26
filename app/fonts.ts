import { Merienda, Poppins, Raleway, Roboto } from 'next/font/google';

export const poppins = Poppins({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
});

export const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

export const raleway = Raleway({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
});

export const merienda = Merienda({
    weight: ['400', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});
