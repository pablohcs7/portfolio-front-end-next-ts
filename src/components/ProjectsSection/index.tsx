import { Box, Flex, Text, Link as ChakraLink, Center } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";
import Link from "next/link";
import { Carousel } from "../Carousel";

interface ProjectsSectionProps {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
	return (
		<>
			<Flex flexDir={"column"} alignItems={"center"}>
				<Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
					<Flex mt={{ base: "5rem", md: "7rem" }}>
						<Text color={"primary"} fontSize={{ base: "2rem", md: "2.5rem" }}>
							#
						</Text>
						<Text
							fontSize={{ base: "2rem", md: "2.5rem" }}
							color={"white"}
							_hover={{ color: "white", transition: "0.5s" }}
						>
							projetos
						</Text>
					</Flex>
				</Flex>
				<Flex mt={"2rem"}>
					<Carousel />
				</Flex>
			</Flex>
		</>
	);
};
