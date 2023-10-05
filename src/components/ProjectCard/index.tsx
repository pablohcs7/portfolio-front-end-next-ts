import {
	Box,
	Card,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	Text
} from "@chakra-ui/react";
import ChakraNextImage from "../ChakraNextImage";
import { CardButton } from "../CardButton";

interface ProjectCardProps {
	title: string;
	description: string;
	techs: string[];
	urlProduction: string;
	urlRepo: string;
	image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	techs,
	urlProduction,
	urlRepo,
	image
}) => {
	return (
		<>
				<Card
					w={"17.25rem"}
					height={"19.625rem"}
					border={"1px solid"}
					borderColor={"secondary"}
					bgColor={"customBackground"}
					borderRadius={"0"}
				>
					<CardHeader p={"0"} border={"none"}>
						<Box>
							<ChakraNextImage
								src={image}
								alt={"An image about the project"}
								width={"250"}
								height={"250"}
								w={"100%"}
								h={"132px"}
								objectFit={"cover"}
							/>
						</Box>
						<Divider color={"secondary"} />
					</CardHeader>
					<Flex flexDir={"column"} p={"0"} border={"none"}>
						<Flex padding={"6px"} gap={"6px"}>
							{techs.map((tech, index) => (
								<Text key={index} color={"secondary"}>
									{tech}
								</Text>
							))}
						</Flex>
						<Divider color={"secondary"} />
						<Flex flexDirection={"column"} padding={"0.875rem"}>
							<Text fontSize={"1.25rem"} color={"white"}>
								{title}
							</Text>
							<Text mt={"0.875rem"} fontSize={"1rem"} color={"secondary"}>
								{description}
							</Text>
						</Flex>
					</Flex>
					<CardFooter p={"0.875rem"} paddingTop={"0"} border={"none"}>
						<Flex gap={"0.875rem"} width={"100%"}>
							<CardButton
								buttonText="Ver site"
								iconSrc="/icons/play.svg"
								url={urlProduction}
							/>
							<CardButton
								buttonText="Repo"
								iconSrc="/icons/github.svg"
								url={urlRepo}
							/>
						</Flex>
					</CardFooter>
				</Card>
		</>
	);
};
