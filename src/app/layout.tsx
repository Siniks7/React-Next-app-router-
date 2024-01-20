import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const NotoSans = Noto_Sans({ 
	subsets: ['latin'],
	weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
	title: 'MyTop - наш лучший топ',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={NotoSans.className}>{children}</body>
		</html>
	);
}
