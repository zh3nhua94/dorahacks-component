"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Slogan = () => {
	let boxVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: { opacity: 1, y: 0 },
	};

	const handleResize = () => {
		const isMobile = window.innerWidth < 768;
		if (!isMobile) {
			boxVariants = {
				hidden: { opacity: 0, y: 30 },
				visible: { opacity: 1, y: 0 },
			};
		} else {
			boxVariants = {
				hidden: { opacity: 0, y: 15 },
				visible: { opacity: 1, y: 0 },
			};
		}
	};
	React.useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	}, []);

	return (
		<div className="relative rounded-lg bg-cover bg-bottom bg-no-repeat bg-[url('/sloganbg.jpeg')] mt-0 md:-mt-20 p-[22px_24px_75px] md:p-[114px_106px_38px] 2xl:p-[129px_120px_43px]">
			<p className="text-[22px] xl:text-[29px] 2xl:text-[32px] md:max-w-[40%] lg:max-w-[460px] 2xl:max-w-[516px] font-bold">
				Build with the best ecosystems on <span className="dorahacksSpan">DoraHacks</span>
			</p>
			<div className="logos h-[84px] md:h-[137px] 2xl:h-[172px] w-full md:w-[50%]">
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.25, duration: 0.5 }}
					className="iconLogo icon1"
					src="/icon1.svg"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.35, duration: 0.5 }}
					className="iconLogo icon2"
					src="/icon2.png"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.25, duration: 0.5 }}
					className="iconLogo icon3"
					src="/icon3.svg"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.45, duration: 0.5 }}
					className="iconLogo icon4"
					src="/icon4.svg"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.65, duration: 0.5 }}
					className="iconLogo icon5"
					src="/icon5.svg"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.55, duration: 0.5 }}
					className="iconLogo icon6"
					src="/icon6.png"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.75, duration: 0.5 }}
					className="iconLogo icon7"
					src="/icon7.svg"
				/>
				<motion.img
					variants={boxVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.85, duration: 0.5 }}
					className="iconLogo icon8"
					src="/icon8.svg"
				/>
			</div>
			<div className="home-line1"></div>
		</div>
	);
};

export default Slogan;
