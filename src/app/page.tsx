"use client";

import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { HomeContent } from "@/components/HomeContent";

export default function Home() {
	return (
		<>
			<Box bgColor={"customBackground"} minW={"100vw"} minH={"100vh"}>
				<header>
					<Header />
				</header>
				<main>
					<Box mt={"2rem"}>
						<HomeContent />
					</Box>
				</main>
				<footer><Box w={'100%'} h={'200px'}></Box></footer>
			</Box>
		</>
	);
}
