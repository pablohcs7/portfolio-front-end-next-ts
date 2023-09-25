import {
	IconButton,
	Image,
	List,
	ListItem,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	useDisclosure,
	Text,
	Flex
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Header } from "../Header";
import { HeaderMenuItem } from "../HeaderMenuItem";

interface HeaderMenuProps {
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ setOpen }) => {
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
					<Header />
					<ModalBody mt={"3rem"}>
						<List>
							<Flex flexDir={"column"} gap={'2rem'}>
								<HeaderMenuItem optionLink="/teste" optionName="home" />
								<HeaderMenuItem optionLink="/teste" optionName="trabalhos" />
								<HeaderMenuItem optionLink="/teste" optionName="sobre mim" />
								<HeaderMenuItem optionLink="/teste" optionName="contatos" />
							</Flex>
						</List>
					</ModalBody>

					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
