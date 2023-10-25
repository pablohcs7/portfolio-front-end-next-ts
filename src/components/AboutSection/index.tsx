import { Flex, Text } from "@chakra-ui/react";
import { MenuHeaderItem } from "../MenuHeaderItem";

interface AboutSectionProps {}

export const AboutSection: React.FC<AboutSectionProps> = () => {
	return (
		<>
			<Flex mt={"2rem"} flexDir={"column"}>
				<MenuHeaderItem
					optionLink="/about"
					optionName="sobre mim"
					customColor="white"
				/>
				<Text mt={"2rem"}>
					Olá! 🖖 Sou o Pablo, tenho 24 anos e sou apaixonado por tecnologia
					desde criança. Estou trilhando minha trajetória como desenvolvedor e
					estou constantemente buscando aprimorar minhas habilidades nessa área.
					Atuei como Desenvolvedor Full Stack onde tive a oportunidade
					de utilizar tecnologias como React.js, Next.js, Node.js, Nest.js, Git,
					entre outras.
				</Text>
				<br />
				<Text>
					Atualmente, estou aberto a novas oportunidades e desafios no mundo da
					tecnologia. Se você tiver alguma pergunta sobre meu perfil ou como
					posso contribuir com seu projeto, não hesite em entrar em contato.
					Estou entusiasmado para conhecer novas pessoas e explorar novos
					horizontes em minha jornada como desenvolvedor! 😉
				</Text>
			</Flex>
		</>
	);
};
