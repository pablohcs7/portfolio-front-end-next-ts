import {
	Box,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from "@chakra-ui/react";
import { Divide as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Header } from "../Header";

interface HeaderMenuProps {
	setOpen: Dispatch<SetStateAction<boolean>>;
	// isOpen: boolean;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ setOpen }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			{/* <Menu>
				{({ isOpen }) => (
					<>
						<MenuButton
							isActive={isOpen}
							as={IconButton}
              border={'none'}
							colorScheme={"customBackground"}
							variant={"outline"}
							icon={
								<Hamburger
									size={24}
									color="#FFF"
									toggled={isOpen}
									toggle={setOpen}
								/>
							}
						/>
						<MenuList width={'100vw'} height={'calc(100vh - 72px)'} zIndex={999}>
							<MenuItem>home</MenuItem>
							<MenuItem>trabalhos</MenuItem>
							<MenuItem>sobre mim</MenuItem>
							<MenuItem>contatos</MenuItem>
						</MenuList>
					</>
				)}
			</Menu> */}

			<IconButton
				aria-label="Menu"
        border={'none'}
        colorScheme={"customBackground"}
        onClick={onOpen}
				icon={
					<Hamburger size={24} color="#FFF" toggled={isOpen} toggle={setOpen} />
				}
			/>

			<Modal isOpen={isOpen} onClose={onClose} size={"full"}>
				<ModalOverlay />
				<ModalContent backgroundColor={'customBackground'}>
					<Header />
					<ModalBody>Teste</ModalBody>

					<ModalFooter>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
