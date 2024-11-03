import { Flex, Text } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";

interface AboutSectionProps {}

export const AboutSection: React.FC<AboutSectionProps> = () => {
	return (
		<>
			<Flex mt={{ base: "5rem", md: "7rem" }} flexDir={"column"}>
				<Flex>
					<Text color={"primary"} fontSize={{ base: "2rem", md: "2.5rem" }}>
						#
					</Text>
					<Text
						fontSize={{ base: "2rem", md: "2.5rem" }}
						color={"white"}
						_hover={{ color: "white", transition: "0.5s" }}
					>
						sobre mim
					</Text>
				</Flex>
				<Text mt={"2rem"} fontSize={{ base: "1rem", md: "1.2rem" }}>
					Olá! 🖖 Sou o Pablo, tenho 25 anos e sou apaixonado por tecnologia
					desde criança. Estou trilhando minha trajetória como desenvolvedor e
					no momento atuo como Desenvolvedor Full Stack na RS Solutions usando
					diariamente tecnologias como React.js, Next.js, Node.js, Nest.js,
					MongoDB, Git, entre outras.
				</Text>
				<br />
				<Text fontSize={{ base: "1rem", md: "1.2rem" }}>
					Estou sempre aberto a novas oportunidades e desafios no mundo da
					tecnologia, se você tiver alguma pergunta sobre meu perfil não hesite
					entrar em contato! 😉
				</Text>
			</Flex>
		</>
	);
};
