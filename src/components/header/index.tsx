import {
	Flex,
	Text,
	Image,
	Container,
	useMediaQuery,
	Box,
	List,
	ListItem
} from "@chakra-ui/react";
import { MenuHeader } from "../MenuHeader";
import { MenuHeaderItem } from "../MenuHeaderItem";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	const [isDesktop] = useMediaQuery("(min-width: 1280px)");

	return (
		<>
			<Container maxW={{ lg: "2xl", xl: "4xl", xxl: "6xl" }}>
				<Flex
					align={"center"}
					justify={"space-between"}
					padding={{ base: "1rem", md: "1.5rem", lg: "1.5rem 0" }}
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
					{isDesktop ? (
						<Flex>
							<List>
								<Flex flexDir={"row"} gap={"2rem"}>
									<ListItem>
										<MenuHeaderItem optionLink="#home" optionName="home" />
									</ListItem>
									<ListItem>
										<MenuHeaderItem
											optionLink="#projects"
											optionName="projetos"
										/>
									</ListItem>
									<ListItem>
										<MenuHeaderItem
											optionLink="#about"
											optionName="sobre mim"
										/>
									</ListItem>
									<ListItem>
										<MenuHeaderItem
											optionLink="#contacts"
											optionName="contatos"
										/>
									</ListItem>
								</Flex>
							</List>
						</Flex>
					) : (
						<MenuHeader />
					)}
				</Flex>
			</Container>
		</>
	);
};
