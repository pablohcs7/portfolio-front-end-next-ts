import { Flex, Link, Text, Tooltip } from "@chakra-ui/react";
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
			<Flex id={"contacts"} flexDirection={"column"} mt={"5rem"}>
				<Flex>
					<Text color={"primary"} fontSize={{ base: "2rem", md: "2.5rem" }}>
						#
					</Text>
					<Text
						fontSize={{ base: "2rem", md: "2.5rem" }}
						color={"white"}
						_hover={{ color: "white", transition: "0.5s" }}
					>
						entre em contato
					</Text>
				</Flex>
				<Text mt={"2rem"} fontSize={{ base: "1rem", md: "1.2rem" }}>
					Aberto a conversas sobre tecnologia, projetos interessantes e
					oportunidades futuras. Seja para discutir uma ideia, iniciar uma
					colaboração ou simplesmente trocar experiências, o contato está sempre
					disponível.
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
							<Link
								href="https://www.linkedin.com/in/pablohcs7"
								target="_blank"
							>
								<LinkedinIcon
									color={"secondary"}
									boxSize={{ base: "2.5rem", md: "3.5rem" }}
									_hover={{
										color: "primary",
										transition: "0.5s",
										cursor: "pointer"
									}}
								/>
							</Link>
						</Tooltip>
						<Text fontSize={{ base: "1rem", md: "1.2rem" }} color={"secondary"}>
							{socialUsers.linkedin}
						</Text>
					</Flex>
					<Flex alignItems={"center"}>
						<Tooltip label={"Copiar"} fontSize={"sm"} shouldWrapChildren>
							<DiscordIcon
								onClick={() =>
									navigator.clipboard.writeText(socialUsers.discord)
								}
								color={"secondary"}
								boxSize={{ base: "2.5rem", md: "3.5rem" }}
								_hover={{
									color: "primary",
									transition: "0.5s",
									cursor: "pointer"
								}}
							/>
						</Tooltip>
						<Text fontSize={{ base: "1rem", md: "1.2rem" }} color={"secondary"}>
							{socialUsers.discord}
						</Text>
					</Flex>
					<Flex alignItems={"center"}>
						<Tooltip
							label={"Copiar"}
							fontSize={"sm"}
							shouldWrapChildren
							hasArrow
						>
							<EmailIcon
								onClick={() => {
									navigator.clipboard.writeText(socialUsers.email);
								}}
								color={"secondary"}
								boxSize={{ base: "2.5rem", md: "3.5rem" }}
								_hover={{
									color: "primary",
									transition: "0.5s",
									cursor: "pointer"
								}}
							/>
						</Tooltip>
						<Text fontSize={{ base: "1rem", md: "1.2rem" }} color={"secondary"}>
							{socialUsers.email}
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
