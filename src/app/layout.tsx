import { Providers } from "./providers";
import './global.css'
import '../../public/logo/logo_white.svg'

export const metadata = {
  title: "Portfólio Pablo",
  description: "Confira meu portfólio para saber um pouco mais sobre mim e meus projetos!",
  openGraph: {
    title: "Portfólio Pablo",
    description: "Confira meu portfólio para saber um pouco mais sobre mim e meus projetos!",
    url: "https://pablohc.com.br",
    siteName: "Portfólio Pablo",
    images: [
      {
        url: "../../public/logo/logo_white.svg",
        width: 1200,
        height: 630,
        alt: "Logo do meu portfólio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio Pablo",
    description: "Confira meu portfólio para saber um pouco mais sobre mim e meus projetos!",
    images: ["../../public/logo/logo_white.svg"],
  },
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
