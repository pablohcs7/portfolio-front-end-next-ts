import { Flex, Text } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";

interface AboutSectionProps {}

export const AboutSection: React.FC<AboutSectionProps> = () => {
	return (
		<>
			<Flex mt={"5rem"} flexDir={"column"}>
				<MenuHeaderItem
					optionLink="/about"
					optionName="sobre mim"
					customColor="white"
				/>
				<Text mt={"2rem"}>
					Olá! 🖖 Sou o Pablo, tenho 24 anos e sou apaixonado por tecnologia
					desde criança. Estou trilhando minha trajetória como desenvolvedor e
					no momento atuo como Desenvolvedor Full Stack na RS Solutions usando
					diariamente tecnologias como React.js, Next.js, Node.js, Nest.js,
					MongoDB, Git, entre outras.
				</Text>
				<br />
				<Text>
					Estou sempre aberto a novas oportunidades e desafios no mundo da
					tecnologia, se você tiver alguma pergunta sobre meu perfil não hesite
					entrar em contato! 😉
				</Text>
			</Flex>
		</>
	);
};
