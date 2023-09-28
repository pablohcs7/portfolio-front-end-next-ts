import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	Heading,
	Text
} from "@chakra-ui/react";
import ChakraNextImage from "../ChakraNextImage";

interface ProjectCardProps {}

export const ProjectCard: React.FC<ProjectCardProps> = () => {
	return (
		<>
			<Card
				w={"275px"}
				h={"334px"}
				border={"1px solid"}
				borderColor={"secondary"}
				bgColor={"customBackground"}
				borderRadius={"0"}
			>
				<CardHeader p={"0"} border={'none'}>
					<Box>
						<ChakraNextImage
							src={
								"https://plus.unsplash.com/premium_photo-1676068244015-6d08a8759079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80"
							}
							alt={"Card Image"}
							width={"250"}
							height={"250"}
							w={"100%"}
							h={"132px"}
						/>
					</Box>
					<Divider color={"secondary"} />
				</CardHeader>
				<CardBody p={"0"} border={'none'}>
					<Flex padding={"6px"} gap={"6px"}>
						<Text color={"secondary"}>HTML</Text>
						<Text color={"secondary"}>CSS</Text>
						<Text color={"secondary"}>JS</Text>
						<Text color={"secondary"}>TS</Text>
					</Flex>
					<Divider color={"secondary"} />
					<Flex flexDirection={"column"} padding={'0.875rem'}>
						<Text fontSize={"1.25rem"} color={"white"}>
							Cinexile
						</Text>
            <Text mt={'0.875rem'} fontSize={"1rem"} color={"secondary"}>
							Meu primeiro site
						</Text>
					</Flex>
				</CardBody>
				<CardFooter p={"0"} border={'none'}>
					<Button>B</Button>
					<Button>B</Button>
				</CardFooter>
			</Card>
		</>
	);
};
