import { Container, Flex } from "@chakra-ui/react";
import { IntroductionSection } from "../IntroductionSection";
import { ProjectsSection } from "../ProjectsSection";

interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	return (
		<>
			<Container>
				<Flex flexDir={"column"}>
					<IntroductionSection />
					<ProjectsSection />
				</Flex>
			</Container>
		</>
	);
};
