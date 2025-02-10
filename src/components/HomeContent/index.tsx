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
			<Container maxW={{ base: "60ch", md: "xl", lg: "2xl", xl: "4xl", xxl: "6xl" }}>
				<Flex flexDir={"column"}>
					<IntroductionSection />
					<Flex display={{ base: "block", xl: "flex" }} gap={"4rem"}>
						<AboutSection />
						<StacksSection />
					</Flex>
					<ProjectsSection />
					<ContactSection />
				</Flex>
			</Container>
		</>
	);
};
