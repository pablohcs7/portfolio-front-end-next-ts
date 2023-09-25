import {
	IconButton,
	Image,
	List,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	useDisclosure,
	Flex
} from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";
import { HeaderModal } from "../HeaderModal/Index";

interface HeaderMenuProps {}

export const MenuHeader: React.FC<HeaderMenuProps> = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<IconButton
				aria-label="Menu"
				border={"none"}
				colorScheme={"customBackground"}
				onClick={onOpen}
				icon={<Image src={"/icons/MenuIcon.svg"} boxSize={"24px"} />}
			/>

			<Modal isOpen={isOpen} onClose={onClose} size={"full"}>
				<ModalOverlay />
				<ModalContent backgroundColor={"customBackground"}>
					<HeaderModal closeMenu={onClose} />
					<ModalBody mt={"3rem"}>
						<List>
							<Flex flexDir={"column"} gap={"2rem"}>
								<MenuHeaderItem optionLink="/" optionName="home" />
								<MenuHeaderItem
									optionLink="/trabalhos"
									optionName="trabalhos"
								/>
								<MenuHeaderItem optionLink="/sobre" optionName="sobre mim" />
								<MenuHeaderItem optionLink="/contatos" optionName="contatos" />
							</Flex>
						</List>
					</ModalBody>

					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
