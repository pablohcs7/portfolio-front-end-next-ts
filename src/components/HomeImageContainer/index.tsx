import { Flex, Image } from "@chakra-ui/react";

interface HomeImageContainerProps {}

export const HomeImageContainer: React.FC<HomeImageContainerProps> = () => {
	return (
		<>
			<Flex justifyContent={"center"}>
				<Flex
					alignItems={"center"}
					mt={{ base: "1.5rem", md: "2rem" }}
					width={{ base: "19.75rem", md: "23.75rem", lg: "26.25rem" }}
				>
					<Image
						boxSize={{ base: "3.75rem", md: "5rem", lg: "6.25rem" }}
						src="/images/dots.png"
						zIndex={2}
						position={"absolute"}
						ml={{ base: "248px", md: "300px" }}
						mt={{ base: "130px", md: "150px" }}
					/>
					<Image src="/images/hacker.png" zIndex={1} width={"100%"} />
					<Image
						boxSize={{ base: "6.25rem", lg: "9.375rem" }}
						src="/logo/logo_dark.svg"
						position={"absolute"}
					/>
				</Flex>
			</Flex>
		</>
	);
};
