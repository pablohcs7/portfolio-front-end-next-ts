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
				icon={<Image src={"/icons/MenuIcon.svg"} boxSize={"24px"} />}
			/>

			<Modal isOpen={isOpen} onClose={onClose} size={"full"}>
				<ModalOverlay />
				<ModalContent backgroundColor={"customBackground"}>
					<HeaderModal closeMenu={onClose} />
					<ModalBody mt={"3rem"}>
						<List>
							<Flex flexDir={"column"} gap={"2rem"}>
								<ListItem>
									<MenuHeaderItem optionLink="/" optionName="home" />
								</ListItem>
								<ListItem>
									<MenuHeaderItem optionLink="/projects" optionName="projetos" />
								</ListItem>
								<ListItem>
									<MenuHeaderItem optionLink="/about" optionName="sobre mim" />
								</ListItem>
								<ListItem>
									<MenuHeaderItem
										optionLink="/contacts"
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
