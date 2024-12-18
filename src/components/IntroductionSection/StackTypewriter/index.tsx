import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Text } from "@chakra-ui/react";

interface StackTypewriterProps {}

export const StackTypewriter: React.FC<StackTypewriterProps> = () => {
	const [typeEffect] = useTypewriter({
		words: ["Front-end", "Back-end", "Full Stack"],
		loop: true,
		typeSpeed: 120,
		deleteSpeed: 60,
		delaySpeed: 2000
	});

	return (
		<>
			<Text
				fontFamily={"base"}
				as={"span"}
				color={"primary"}
				fontSize={{ base: "2rem", md: "2.5rem" }}
				fontWeight={"semibold"}
			>
				{typeEffect}
				<Cursor cursorColor={"white"} />
			</Text>
		</>
	);
};
