import { Box, Flex, Text } from "@chakra-ui/react";
import { HtmlIcon } from "../IconsComponents/HtmlIcon";

interface StacksSectionProps {}

export const StacksSection: React.FC<StacksSectionProps> = () => {
	return (
		<>
			<Flex mt={"5rem"}>
				<Text color={"primary"} fontSize={"2rem"}>
					#
				</Text>
				<Text
					fontSize={"2rem"}
					color={"white"}
					_hover={{ color: "white", transition: "0.5s" }}
				>
					tecnologias
				</Text>
			</Flex>
			<HtmlIcon boxSize={'2.5rem'} />
		</>
	);
};
