import { Box, Text } from "@chakra-ui/react";
import { StackTypewriter } from "./StackTypewriter";

interface IntroductionSectionProps {}

export const IntroductionSection: React.FC<IntroductionSectionProps> = () => {
	return (
		<>
			<Box>
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
				<Text mt={'1.625rem'} fontFamily={'base'} fontSize={'md'} color={'customGray'}>
					Ele constrói sites e aplicações tanto web quanto mobile prezando pelo design, intuitividade e performance.
				</Text>
			</Box>
		</>
	);
};
