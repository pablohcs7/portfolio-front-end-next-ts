"use client";

import { Box, Text } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { HomeContent } from "@/components/HomeContent";

export default function Home() {
	return (
		<main>
			<Box bgColor={"customBackground"} minW={"100vw"} minH={"100vh"}>
				<header>
					<Header />
				</header>
				<main>
					<Box mt={"2rem"}>
						<HomeContent />
					</Box>
				</main>
			</Box>
		</main>
	);
}
