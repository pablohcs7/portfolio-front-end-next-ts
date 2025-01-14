import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { ProjectCard, ProjectCardProps } from "../ProjectCard";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

interface CarouselProps {}

const projectsInfos: ProjectCardProps[] = [
	{
		image: "/images/pokedex_logo.png",
		techs: ["REACT", "MUI", "TS"],
		title: "Pokédex",
		description: "Pokédex clássica",
		urlProduction: "https://pokedex-react-ts-d3j6.vercel.app",
		urlRepo: "https://github.com/pablohcs7/pokedex-react-ts"
	},
	{
		image: "/images/savemylink_logo.png",
		techs: ["REACT", "MUI", "EXPRESS", "PRISMA", "TS"],
		title: "SaveMyLink",
		description: "Primeiro projeto fullstack",
		urlProduction: "https://save-my-link-web.vercel.app",
		urlRepo: "https://github.com/pablohcs7/SaveMyLink"
	},
	{
		image: "/images/cinexile_logo.png",
		techs: ["HTML", "CSS", "JS"],
		title: "Cinexile",
		description: "Primeiro site",
		urlProduction: "https://pablohcs7.github.io/cinexile",
		urlRepo: "https://github.com/pablohcs7/cinexile"
	},
];

export const Carousel: React.FC<CarouselProps> = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [_scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true,  }, [
		Autoplay({ stopOnInteraction: false }),
	]);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<>
			<Box width={{ base: "16.25rem", md: "35rem", lg: "40rem", xl: "52rem" }}>
				<Box className="embla" ref={emblaRef} overflow={"hidden"}>
					<Box className="embla__container" display={"flex"}>
						{projectsInfos.map((projectInfo, index) => (
							<Box
								key={index}
								className="embla__slide"
								justifyContent={"center"}
								display={{ base: "block", md: "flex" }}
								alignItems={"center"}
								flex={{ base: "0 0 100%", md: "0 0 60%", lg: '0 0 50%', xl: "0 0 40%" }}
								minWidth={"0"}
								ml={{ base: "1rem", md: "unset" }}
								mr={{ base: "1rem", md: "unset" }}
							>
								<ProjectCard {...projectInfo} />
							</Box>
						))}
					</Box>
					<Flex
						gap={"0.5rem"}
						justifyContent={"center"}
						alignItems={"center"}
						mt={"0.5rem"}
					>
						<Box as={"button"} onClick={scrollPrev}>
							<Text
								color={"secondary"}
								cursor={"pointer"}
								transition={"0.3s"}
								_active={{ color: "gray.200" }}
							>
								{"<~"}
							</Text>
						</Box>
						<Flex gap={"0.5rem"} justifyContent={"center"}>
							{projectsInfos.map((_projectInfo, index) => (
								<Button
									key={index}
									minWidth={"10px"}
									height={"10px"}
									padding={"0"}
									_hover={{}}
									backgroundColor={
										index == selectedIndex ? "primary" : "secondary"
									}
									onClick={() => scrollTo(index)}
								/>
							))}
						</Flex>
						<Box as={"button"} onClick={scrollNext}>
							<Text
								color={"secondary"}
								cursor={"pointer"}
								transition={"0.3s"}
								_active={{ color: "gray.200" }}
							>
								{"~>"}
							</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
