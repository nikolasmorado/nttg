import './globals.css';
import { Inter } from 'next/font/google';
import SmootherWrapper from './lib/components/SmootherWrapper/SmootherWrapper.component';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Title',
	description: 'Description',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SmootherWrapper>{children}</SmootherWrapper>
			</body>
		</html>
	);
}
