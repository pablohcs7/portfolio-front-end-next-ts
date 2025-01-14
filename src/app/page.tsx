"use client";

import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { HomeContent } from "@/components/HomeContent";
import { Footer } from "@/components/Footer";

import '../components/Scrollbar/style.css';

export default function Home() {
	return (
		<>
			<Box bgColor={"customBackground"} minH={"100vh"}>
				<header>
					<Header />
				</header>
				<main>
					<Box mt={{ base: "1.3rem", lg: "3rem" }}>
						<HomeContent />
					</Box>
				</main>
				<footer>
					<Footer />
				</footer>
			</Box>
		</>
	);
}
