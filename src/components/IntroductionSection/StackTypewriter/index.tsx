import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Text } from "@chakra-ui/react";


interface StackTypewriterProps {}

export const StackTypewriter: React.FC<StackTypewriterProps> = () => {
	const [typeEffect] = useTypewriter({
		words: ["Front-end", "Back-end", "Full-stack"],
		loop: false,
		typeSpeed: 100,
		deleteSpeed: 40
	});
	return (
		<>
			<Text fontFamily={'base'} as={'span'} color={'primary'} fontSize={'2rem'} fontWeight={'semibold'}>{typeEffect}</Text>
		</>
	);
};
