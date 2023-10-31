import { Box, Flex, Text, Link as ChakraLink, Center } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";
import Link from "next/link";
import { Carousel } from "../Carousel";

interface ProjectsSectionProps {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
	return (
		<>
			<Flex mt={"5rem"} flexDir={"column"} alignItems={"center"}>
				<Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
					<MenuHeaderItem
						optionLink="/projects"
						optionName="projetos"
						customColor="white"
					/>
					<ChakraLink
						as={Link}
						href={"/projects"}
						_hover={{ textDecor: "none" }}
					>
						<Text
							color={"white"}
							fontSize={"0.7rem"}
							_hover={{ color: "primary", transition: "0.5s" }}
						>
							Ver todos
						</Text>
					</ChakraLink>
				</Flex>
				<Flex mt={"2rem"}>
					<Carousel />
				</Flex>
			</Flex>
		</>
	);
};
