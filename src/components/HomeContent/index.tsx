import { Container, Flex } from "@chakra-ui/react";
import { IntroductionSection } from "../IntroductionSection";
import { ProjectsSection } from "../ProjectsSection";
import { AboutSection } from "../AboutSection";
import { StacksSection } from "../StacksSection";
import { ContactSection } from "../ContactSection";

interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	return (
		<>
			<Container maxW={{ base: "60ch", md: "xl", lg: "2xl", xl: "4xl" }}>
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
