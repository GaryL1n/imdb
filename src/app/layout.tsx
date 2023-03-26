import Header from '@/components/Header';
import './globals.css';
import Providers from './Providers';

export const metadata = {
    title: 'IMDb Clone',
    description: 'This i s the IMDb Clone website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
