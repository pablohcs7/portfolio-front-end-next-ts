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
			<Flex mt={{ sm: "5rem", md: "7rem" }}>
				<Text color={"primary"} fontSize={{ base: "2rem", md: "2.5rem" }}>
					#
				</Text>
				<Text
					fontSize={{ base: "2rem", md: "2.5rem" }}
					color={"white"}
					_hover={{ color: "white", transition: "0.5s" }}
				>
					tecnologias
				</Text>
			</Flex>
			<Wrap
				spacing={{ base: "3.5rem", md: "7rem" }}
				justify={"center"}
				mt={{ base: "2rem", md: "3rem" }}
			>
				<WrapItem>
					<HtmlIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<CssIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<JavascriptIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<TypescriptIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<ReactIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<NextIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<NodeIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
				<WrapItem>
					<NestIcon boxSize={{ base: "3rem", md: "3.5rem" }} />
				</WrapItem>
			</Wrap>
		</>
	);
};
