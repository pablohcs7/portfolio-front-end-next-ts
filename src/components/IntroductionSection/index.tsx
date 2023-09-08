import { Box, Text } from "@chakra-ui/react";
import { StackTypewriter } from "./StackTypewriter";

interface IntroductionSectionProps {}

export const IntroductionSection: React.FC<IntroductionSectionProps> = () => {
	return (
		<>
			<Box>
				<Text
					as={"h2"}
					fontFamily={"base"}
					color={"white"}
					fontSize={"2rem"}
					fontWeight={"semibold"}
				>
					Pablo é um desenvolvedor web
				</Text>
				<StackTypewriter />
			</Box>
		</>
	);
};
