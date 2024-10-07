import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
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
			<Wrap spacing={"3.5rem"} justify={"center"} mt={"2rem"}>
				<WrapItem>
					<HtmlIcon boxSize={"3rem"} />
				</WrapItem>
				<WrapItem>
					<CssIcon boxSize={"3rem"} />
				</WrapItem>
				<WrapItem>
					<JavascriptIcon boxSize={"3rem"} />
				</WrapItem>
				<WrapItem>
					<TypescriptIcon boxSize={"3rem"} />
				</WrapItem>
				<WrapItem>
					<ReactIcon boxSize={"3em"} />
				</WrapItem>
				<WrapItem>
					<NextIcon boxSize={"3rem"} />
				</WrapItem>
				<WrapItem>
					<NodeIcon boxSize={"3rem"} />
				</WrapItem>
				<WrapItem>
					<NestIcon boxSize={"3rem"} />
				</WrapItem>
			</Wrap>
		</>
	);
};
