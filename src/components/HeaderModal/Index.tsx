import { Flex, IconButton, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";

interface HeaderModalProps {
	closeMenu: () => void;
}

export const HeaderModal: React.FC<HeaderModalProps> = ({ closeMenu }) => {
	return (
		<>
			<Flex align={"center"} justify={"space-between"} padding={"1rem"}>
				<Flex align={"center"}>
					<Image alt="Logo" src="/logo/logo_white.svg" width="16" height="16" />
					<Text
						color={"white"}
						fontSize={"md"}
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
