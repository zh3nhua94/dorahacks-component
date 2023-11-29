"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { easeIn, motion, useInView } from "framer-motion";

const sliderData = [
	{
		index: "1",
		img: "https://cdn.dorahacks.io/static/files/18b22dc99f4476fbc6990ec40409f542.jpg",
		url: "https://dorahacks.io/hackathon/klaymakers23/detail",
	},
	{
		index: "2",
		img: "https://cdn.dorahacks.io/static/files/18a8efabac827d53a288c3f4338bd169.jpg",
		url: "https://dorahacks.io/hackathon/klaymakers23/detail",
	},
	{
		index: "3",
		img: "https://cdn.dorahacks.io/static/files/18b84a981fc22bd0ec73e7a45d18a0ca.jpg",
		url: "https://dorahacks.io/hackathon/klaymakers23/detail",
	},
	{
		index: "4",
		img: "https://cdn.dorahacks.io/static/files/18b84a819e646450a1f418f4a79a1cba.jpg",
		url: "https://dorahacks.io/hackathon/klaymakers23/detail",
	},
	{
		index: "5",
		img: "https://cdn.dorahacks.io/static/files/18abbb04d02f60d24f74d36479b94fb2.jpg",
		url: "https://dorahacks.io/hackathon/klaymakers23/detail",
	},
	{
		index: "6",
		img: "https://cdn.dorahacks.io/static/files/18abbb0acf580f0ebfe0ac54b499299a.jpg",
		url: "https://dorahacks.io/hackathon/klaymakers23/detail",
	},
];

const HomeSlider = () => {
	// SLICK SLIDER SETTINGS
	const settings = {
		// arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		// centerMode: true,
		cssEase: "ease-in-out",
		autoplay: true,
		autoplaySpeed: 4000,
		className: "slide_wrapper",
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					autoplaySpeed: 4000,
				},
			},
		],
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<div className="pt-12">
				<motion.div
					className="home-slider relative overflow-hidden"
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					initial="hidden"
					transition={{ delay: 0.25, duration: 0.5 }}
					animate="visible"
					ref={ref}
				>
					<Slider {...settings}>
						{sliderData.map((slide) => (
							<div
								key={slide.index}
								className="aspect-[20/10] 2xl:aspect-[25.1/10]"
							>
								<Link
									href={slide.url}
									target="_blank"
									className="relative block w-full h-full"
								>
									<Image
										src={slide.img}
										alt=""
										fill
										className="object-cover rounded-lg"
										priority
									/>
								</Link>
							</div>
						))}
					</Slider>
					<motion.div
						variants={{
							hidden: { left: 0 },
							visible: { left: "100%" },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.25, duration: 0.5, ease: "easeIn" }}
						className="absolute inset-0 bg-[#ff761c] z-20"
					/>
				</motion.div>
			</div>
		</>
	);
};

export default HomeSlider;
