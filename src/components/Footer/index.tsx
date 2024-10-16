import { Box, Flex, Text } from "@chakra-ui/react";
import { HeartIcon } from "../IconsComponents/HeartIcon";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<>
			<Flex justifyContent={"center"} alignItems={"center"} padding={"1rem"} gap={"1rem"} mt={"8rem"}>
				<Text>Feito com</Text>
				<Box width={"16px"}>
					<HeartIcon />
				</Box>
				<Text>por Pablo</Text>
			</Flex>
		</>
	);
};
