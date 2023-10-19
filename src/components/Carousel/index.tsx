import useEmblaCarousel from "embla-carousel-react";
import { ProjectCard, ProjectCardProps } from "../ProjectCard";
import { Box } from "@chakra-ui/react";
import Autoplay from "embla-carousel-autoplay";

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
		techs: ["REACT", "MUI", "EXPRESS", 'PRISMA', "TS"],
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
	}
];

export const Carousel: React.FC<CarouselProps> = () => {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [
		// Autoplay({ stopOnInteraction: false })
	]);

	return (
		<>
			<Box width={"16.25rem"}>
				<Box className="embla" ref={emblaRef} overflow={"hidden"}>
					<Box className="embla__container" display={"flex"} gap={"2rem"}>
						{projectsInfos.map((projectInfo, index) => (
							<Box
								key={index}
								className="embla__slide"
								flex={"0 0 100%"}
								minWidth={"0"}
							>
								<ProjectCard {...projectInfo} />
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</>
	);
};
