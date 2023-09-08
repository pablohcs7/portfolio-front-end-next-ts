import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<>
			<Flex align={"center"} justify={"space-between"} padding={"16px"}>
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
				<IconButton
					aria-label="Menu"
					icon={
						<Image
							alt="Ícone menu"
							src="/icons/MenuIcon.svg"
							width="24"
							height="24"
						/>
					}
					variant={"link"}
					onClick={() => {
						console.log("menuOpen");
					}}
				/>
			</Flex>
		</>
	);
};
