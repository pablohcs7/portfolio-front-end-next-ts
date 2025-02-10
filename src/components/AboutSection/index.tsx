import { Flex, Text } from "@chakra-ui/react";

interface AboutSectionProps {}

export const AboutSection: React.FC<AboutSectionProps> = () => {
	return (
		<>
			<Flex
				id={"about"}
				mt={{ base: "5rem", md: "7rem" }}
				flexDir={"column"}
				width={{ base: "100%" }}
			>
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
					Olá! 🖖 Sou o Pablo tenho 25 anos e atuo como
					desenvolvedor full stack na RS Solutions. Trabalho com React.js,
					Next.js, Node.js, Nest.js, MongoDB, React Native e estou sempre
					buscando entregar soluções práticas e escaláveis.
				</Text>
				<br />
				<Text fontSize={{ base: "1rem", md: "1.2rem" }}>
					Estou sempre aberto a novas oportunidades e desafios no mundo da
					tecnologia, então, se quiser trocar uma ideia ou discutir sobre
					projetos, é só entrar em contato!😉
				</Text>
			</Flex>
		</>
	);
};
