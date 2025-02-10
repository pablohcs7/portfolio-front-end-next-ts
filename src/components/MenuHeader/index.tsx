import {
	IconButton,
	Image,
	List,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	useDisclosure,
	Flex,
	ListItem
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
				icon={
					<Image
						src={"/icons/MenuIcon.svg"}
						boxSize={{ base: "24px", md: "32px" }}
					/>
				}
			/>

			<Modal isOpen={isOpen} onClose={onClose} size={"full"} returnFocusOnClose={false}>
				<ModalOverlay />
				<ModalContent backgroundColor={"customBackground"}>
					<HeaderModal closeMenu={onClose} />
					<ModalBody mt={"3rem"}>
						<List>
							<Flex flexDir={"column"} gap={"2rem"}>
								<ListItem onClick={() => onClose()}>
									<MenuHeaderItem optionLink="#home" optionName="home" />
								</ListItem>
								<ListItem onClick={() => onClose()}>
									<MenuHeaderItem optionLink="#about" optionName="sobre mim" />
								</ListItem>
								<ListItem onClick={() => onClose()}>
									<MenuHeaderItem
										optionLink="#projects"
										optionName="projetos"
									/>
								</ListItem>
								<ListItem onClick={() => onClose()}>
									<MenuHeaderItem
										optionLink="#contacts"
										optionName="contatos"
									/>
								</ListItem>
							</Flex>
						</List>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
