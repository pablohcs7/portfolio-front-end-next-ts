import { Box, Flex, Text } from "@chakra-ui/react";

interface CurrentlyWorkingProps {}

export const CurrentlyWorking: React.FC<CurrentlyWorkingProps> = () => {
	return (
		<>
			<Flex
				width={{ base: "20rem", md: "22rem", lg: "26.25rem", xl: "23.75rem" }}
				border={"1px solid"}
				borderColor={"secondary"}
				padding={{ base: "8px", md: "12px" }}
				alignItems={"center"}
				gap={{ base: "0", md: "1rem" }}
			>
				<Box
					width={"1rem"}
					height={"1rem"}
					backgroundColor={"primary"}
					mr={"0.625rem"}
				/>
				<Flex flexDir={"column"}>
					<Text fontFamily={"base"} color={"secondary"} fontWeight={"medium"}>
						Trabalhando Atualmente em:
					</Text>
					<Text fontFamily={"base"} color={"white"} fontWeight={"semibold"}>
						RS Solutions
					</Text>
				</Flex>
			</Flex>
		</>
	);
};
