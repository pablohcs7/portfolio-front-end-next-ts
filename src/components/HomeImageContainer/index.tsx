import { Flex, Image } from "@chakra-ui/react";

interface HomeImageContainerProps {}

export const HomeImageContainer: React.FC<HomeImageContainerProps> = () => {
	return (
		<>
			<Flex justifyContent={"center"}>
				<Flex
					alignItems={"center"}
					mt={{ base: "1.5rem", md: "2rem" }}
					width={{ base: "316px", md: "380px" }}
				>
					<Image
						boxSize={{base:"60px", md: "80px"}}
						src="/images/dots.png"
						zIndex={2}
						position={"absolute"}
						ml={{base: "248px", md: "300px"}}
						mt={{base: "130px", md: "150px"}}
					/>
					<Image src="/images/hacker.png" zIndex={1} width={"100%"} />
					<Image
						boxSize={"100px"}
						src="/logo/logo_dark.svg"
						position={"absolute"}
					/>
				</Flex>
			</Flex>
		</>
	);
};
