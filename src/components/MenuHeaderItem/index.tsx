import { Flex, Link as ChakraLink, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

interface MenuHeaderItemProps {
	optionName: string;
	optionLink: string;
	customColor?: string;
}

export const MenuHeaderItem: React.FC<MenuHeaderItemProps> = ({
	optionName,
	optionLink,
	customColor
}) => {
	return (
		<>
				<Flex>
					<Text color={"primary"} fontSize={"2rem"}>
						#
					</Text>
					<ChakraLink
						as={Link}
						href={optionLink}
						_hover={{ textDecor: "none" }}
					>
						<Text
							fontSize={"2rem"}
							color={customColor ? customColor : 'secondary'}
							_hover={{ color: 'white', transition: "0.5s" }}
						>
							{optionName}
						</Text>
					</ChakraLink>
				</Flex>
		</>
	);
};
