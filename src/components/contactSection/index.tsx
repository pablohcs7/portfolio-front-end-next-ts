import { Box, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";
import { DiscordIcon } from "../IconsComponents/DiscordIcon";
import { LinkedinIcon } from "../IconsComponents/LinkedinIcon";
import { EmailIcon } from "../IconsComponents/EmailIcon";

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
	const socialUsers = {
		discord: "pablohcs7",
		linkedin: "pablohcs7",
		email: "pablohenriquec7@gmail.com"
	};

	return (
		<>
			<Flex flexDirection={"column"} mt={"5rem"}>
				<MenuHeaderItem
					optionLink="/contact"
					optionName="Entre em contato"
					customColor="white"
				/>
				<Text mt={"2rem"}>
					Estou em busca de oportunidades full time. Mas, se tiver alguma
					proposta ou dúvida, sinta-se à vontade para entrar em contato comigo.
				</Text>
				<Flex
					mt={"2rem"}
					flexDirection={"column"}
					justifyContent={"center"}
					gap={"0.5rem"}
				>
					<Flex alignItems={"center"}>
						<Tooltip
							label={"Visitar"}
							fontSize={"sm"}
							shouldWrapChildren
							hasArrow
						>
							<Link href="https://www.linkedin.com/in/pablohcs7" target="_blank">
								<LinkedinIcon
									color={"secondary"}
									boxSize={"2.5rem"}
									_hover={{
										color: "primary",
										transition: "0.5s",
										cursor: "pointer"
									}}
								/>
							</Link>
						</Tooltip>
						<Text color={"secondary"}>{socialUsers.linkedin}</Text>
					</Flex>
					<Flex alignItems={"center"}>
						<Tooltip label={"Copiar"} fontSize={"sm"} shouldWrapChildren>
							<DiscordIcon
								onClick={()=> navigator.clipboard.writeText(socialUsers.discord)}
								color={"secondary"}
								boxSize={"2.5rem"}
								_hover={{
									color: "primary",
									transition: "0.5s",
									cursor: "pointer"
								}}
							/>
						</Tooltip>
						<Text color={"secondary"}>{socialUsers.discord}</Text>
					</Flex>
					<Flex alignItems={"center"}>
						<Tooltip
							label={"Copiar"}
							fontSize={"sm"}
							shouldWrapChildren
							hasArrow
						>
							<EmailIcon
								onClick={()=> {navigator.clipboard.writeText(socialUsers.email), console.warn('teste')}}
								color={"secondary"}
								boxSize={"2.5rem"}
								_hover={{
									color: "primary",
									transition: "0.5s",
									cursor: "pointer"
								}}
							/>
						</Tooltip>
						<Text color={"secondary"}>{socialUsers.email}</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
