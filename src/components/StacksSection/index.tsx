import { Box, Flex, Text } from "@chakra-ui/react";
import { HtmlIcon } from "../IconsComponents/HtmlIcon";
import { CssIcon } from "../IconsComponents/CssIcon";
import { JavascriptIcon } from "../IconsComponents/JavascriptIcon";
import { TypescriptIcon } from "../IconsComponents/TypescriptIcon";
import { ReactIcon } from "../IconsComponents/ReactIcon";
import { NextIcon } from "../IconsComponents/NextIcon";
import { NodeIcon } from "../IconsComponents/NodeIcon";
import { NestIcon } from "../IconsComponents/NestIcon";

interface StacksSectionProps {}

export const StacksSection: React.FC<StacksSectionProps> = () => {
	return (
		<>
			<Flex mt={"5rem"}>
				<Text color={"primary"} fontSize={"2rem"}>
					#
				</Text>
				<Text
					fontSize={"2rem"}
					color={"white"}
					_hover={{ color: "white", transition: "0.5s" }}
				>
					tecnologias
				</Text>
			</Flex>
			<Flex>
				<HtmlIcon boxSize={"2.5rem"} />
				<CssIcon boxSize={"2.5rem"} />
				<JavascriptIcon boxSize={"2.5rem"} />
				<TypescriptIcon boxSize={"2.5rem"} />
				<ReactIcon boxSize={"2.5rem"} />
				<NextIcon boxSize={"2.5rem"} />
				<NodeIcon boxSize={"2.5rem"} />
				<NestIcon boxSize={"2.5rem"} />
			</Flex>
		</>
	);
};
