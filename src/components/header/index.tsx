import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HeaderMenu } from "../HeaderMenu";
import { useState } from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	const [isOpen, setOpen] = useState(false)
	console.log(isOpen)

	return (
		<>
			<Flex align={"center"} justify={"space-between"} padding={"1rem"}>
				<Flex align={"center"}>
					<Image alt="Logo" src="/logo/logo_white.svg" width="16" height="16" />
					<Text
						color={"white"}
						fontSize={"md"}
						fontWeight={"bold"}
						fontFamily={"base"}
						ml={"0.5rem"}
					>
						Pablo
					</Text>
				</Flex>
				<HeaderMenu setOpen={setOpen}/>
			</Flex>
		</>
	);
};
