'use client'

import { theme } from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";

import { ChakraProvider } from "@chakra-ui/react";

import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider resetCSS theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	);
}
