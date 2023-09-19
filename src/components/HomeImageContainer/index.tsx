import { Flex, Image } from "@chakra-ui/react";

interface HomeImageContainerProps {}

export const HomeImageContainer: React.FC<HomeImageContainerProps> = () => {
	return (
		<>
			<Flex justifyContent={'center'}>
				<Flex
					alignItems={"center"}
					mt={"1.5rem"}
					width={"316px"}
					height={"260px"}
				>
					<Image
						boxSize={"60px"}
						src="/images/dots.png"
						zIndex={2}
						position={"absolute"}
						ml={"248px"}
						mt={"130px"}
					/>
					<Image src="/images/hacker.png" zIndex={1} />
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
