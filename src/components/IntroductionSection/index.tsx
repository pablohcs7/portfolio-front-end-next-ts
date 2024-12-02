import { Box, Flex, Text } from "@chakra-ui/react";
import { StackTypewriter } from "./StackTypewriter";
import { HomeImageContainer } from "../HomeImageContainer";
import { CurrentlyWorking } from "../CurrentlyWorking";

interface IntroductionSectionProps {}

export const IntroductionSection: React.FC<IntroductionSectionProps> = () => {
	return (
		<>
			<Flex display={{ base: "block", xl: "flex" }}>
				<Box>
					<Box>
						<Text
							as={"h2"}
							fontFamily={"base"}
							color={"white"}
							fontSize={{ base: "2rem", md: "2.5rem" }}
							fontWeight={"semibold"}
							width={{ lg: "34rem" }}
						>
							Pablo é um desenvolvedor web
						</Text>
						<StackTypewriter />
					</Box>
					<Text
						mt={"1.625rem"}
						fontFamily={"base"}
						fontSize={{ base: "md", md: "lg" }}
						color={"secondary"}
						width={{ lg: "34rem" }}
					>
						Ele constrói sites e aplicações tanto web quanto mobile prezando
						pelo design, intuitividade e performance.
					</Text>
				</Box>
				<Flex flexDir={"column"} alignItems={"center"}>
					<HomeImageContainer />
					<CurrentlyWorking />
				</Flex>
			</Flex>
		</>
	);
};
