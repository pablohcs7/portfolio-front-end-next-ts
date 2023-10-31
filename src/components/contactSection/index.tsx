import { Flex } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
	return (
		<>
			<Flex flexDirection={"column"} mt={'5rem'}>
				<MenuHeaderItem
					optionLink="/contact"
					optionName="Entre em contato"
					customColor="white"
				/>
			</Flex>
		</>
	);
};
