import { Box, Flex, Text } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";
import ChakraNextImage from "../ChakraNextImage";
import { DiscordIcon } from "../IconsComponents/DiscordIcon";

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
	return (
		<>
			<Flex flexDirection={"column"} mt={"5rem"}>
				<MenuHeaderItem
					optionLink="/contact"
					optionName="Entre em contato"
					customColor="white"
				/>
				<Text mt={"2rem"}>
					Estou em busca de oportunidades full time. Mas, se tiver alguma
					proposta ou dúvida, sinta-se à vontade para entrar em contato comigo.
				</Text>
				<Box>
					<Flex alignItems={"center"} mt={"1rem"}>
						<DiscordIcon
							color={"secondary"}
							boxSize={"2.5rem"}
							_hover={{ color: "primary", transition: "0.5s", cursor: 'pointer' }}
						/>
						<Text color={"secondary"}>pablohcs7</Text>
					</Flex>
					<Box></Box>
				</Box>
			</Flex>
		</>
	);
};
