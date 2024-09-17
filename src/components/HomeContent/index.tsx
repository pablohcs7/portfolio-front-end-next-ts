import { Container, Flex } from "@chakra-ui/react";
import { IntroductionSection } from "../IntroductionSection";
import { ProjectsSection } from "../ProjectsSection";
import { AboutSection } from "../AboutSection";
import { ContactSection } from "../ContactSection";
import { StacksSection } from "../StacksSection";

interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	return (
		<>
			<Container>
				<Flex flexDir={"column"}>
					<IntroductionSection />
					<AboutSection />
					<StacksSection />
					<ProjectsSection />
					<ContactSection />
				</Flex>
			</Container>
		</>
	);
};
