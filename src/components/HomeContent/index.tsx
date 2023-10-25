import { Container, Flex } from "@chakra-ui/react";
import { IntroductionSection } from "../IntroductionSection";
import { ProjectsSection } from "../ProjectsSection";
import { AboutSection } from "../AboutSection";

interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	return (
		<>
			<Container>
				<Flex flexDir={"column"}>
					<IntroductionSection />
					<ProjectsSection />
					<AboutSection />
				</Flex>
			</Container>
		</>
	);
};
