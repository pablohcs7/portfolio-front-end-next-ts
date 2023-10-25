import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import ChakraNextImage from "../ChakraNextImage";

interface CardButtonProps {
	buttonText: string;
	iconSrc: string;
	url?: string;
}

export const CardButton: React.FC<CardButtonProps> = ({
	buttonText,
	iconSrc,
	url
}) => {
	return (
		<>
			<Link href={url} target="_blank" >
				<Button
					height={"2rem"}
					background={"customBackground"}
					border={"1px solid"}
					borderColor={"secondary"}
					borderRadius={"0"}
					rightIcon={
						<ChakraNextImage
							alt=""
							src={iconSrc}
							width={"16"}
							height={"16"}
							boxSize={"16px"}
						/>
					}
					_hover={{
						backgroundColor: "customBackground",
						borderColor: "primary",
						transition: "0.5s"
					}}
				>
					<Text color={"white"} fontSize={"12px"} fontWeight={"medium"}>
						{buttonText}
					</Text>
				</Button>
			</Link>
		</>
	);
};
