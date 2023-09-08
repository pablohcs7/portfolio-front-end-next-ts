import { Container } from "@chakra-ui/react";
import { IntroductionSection } from "../IntroductionSection";

interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	return (
		<>
			<Container>
				<IntroductionSection />
			</Container>
		</>
	);
};
