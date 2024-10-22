import { Flex, Text, Image } from "@chakra-ui/react";
import { MenuHeader } from "../MenuHeader";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<>
			<Flex
				align={"center"}
				justify={"space-between"}
				padding={{ base: "1rem", md: "1.5rem" }}
			>
				<Flex align={"center"}>
					<Image
						alt="Logo"
						src="/logo/logo_white.svg"
						width={{ base: "16px", md: "24px" }}
					/>
					<Text
						color={"white"}
						fontSize={{ base: "md", md: "x-large" }}
						fontWeight={"bold"}
						fontFamily={"base"}
						ml={"0.5rem"}
					>
						Pablo
					</Text>
				</Flex>
				<MenuHeader />
			</Flex>
		</>
	);
};
