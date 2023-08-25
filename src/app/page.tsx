'use client'

import Image from "next/image";
import { Box, Text } from '@chakra-ui/react'
import { Header } from "@/components/header";

export default function Home() {
	return (
		<main>
			<Box bgColor={'customBackground'} minW={'100vw'} minH={'100vh'}>
				<Header />
			</Box>
		</main>
	);
}