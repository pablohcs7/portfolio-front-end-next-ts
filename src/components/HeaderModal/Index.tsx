import { Flex, IconButton, Text, Image as ChakraImage } from "@chakra-ui/react";

interface HeaderModalProps {
	closeMenu: () => void;
}

export const HeaderModal: React.FC<HeaderModalProps> = ({ closeMenu }) => {
	return (
		<>
			<Flex align={"center"} justify={"space-between"} padding={"1rem"}>
				<Flex align={"center"}>
					<ChakraImage alt="Logo" src="/logo/logo_white.svg" width={{ base: "16px", md: "24px" }} height="16" />
					<Text
						color={"white"}
						fontSize={{ base: "md", md: "x-large" }}
						fontWeight={"bold"}
						fontFamily={"base"}
						ml={"0.5rem"}
					>
						Pablo
					</Text>
				</Flex>
				<IconButton
					aria-label="Close menu"
					border={"none"}
					colorScheme={"customBackground"}
					onClick={closeMenu}
					icon={<ChakraImage src={"/icons/CloseIcon.svg"} boxSize={"24px"} />}
				/>
			</Flex>
		</>
	);
};
