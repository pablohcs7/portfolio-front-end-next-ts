import { Flex, Link as ChakraLink, ListItem, Text } from "@chakra-ui/react";
import Link from 'next/link'

interface HeaderMenuItemProps {
	optionName: string;
	optionLink: string;
}

export const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
	optionName,
	optionLink
}) => {
	return (
		<>
			<ListItem>
				<Flex>
					<Text color={"primary"} fontSize={"2rem"}>
						#
					</Text>
					<Link href={optionLink}>
						<Text fontSize={'2rem'} color={'secondary'} _hover={{ color: 'white', transition: '0.5s' }}>{optionName}</Text>
					</Link>
				</Flex>
			</ListItem>
		</>
	);
};
