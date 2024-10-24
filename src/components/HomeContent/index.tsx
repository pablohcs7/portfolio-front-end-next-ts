import { Container, Flex } from "@chakra-ui/react";
import { IntroductionSection } from "../IntroductionSection";
import { ProjectsSection } from "../ProjectsSection";
import { AboutSection } from "../AboutSection";
import { StacksSection } from "../StacksSection";
import { ContactSection } from "../contactSection";

interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	return (
		<>
			<Container maxW={{base: "60ch", md: "63ch"}}>
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
