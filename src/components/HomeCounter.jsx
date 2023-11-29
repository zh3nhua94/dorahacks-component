"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const HomeCounter = () => {
	return (
		<div className="flex flex-wrap xl:flex-nowrap gap-2 rounded-lg bg-counter-bg shadow-[0_4px_30rem_#0e0e110d] relative justify-between items-center sm:mx-2 xl:mx-24 2xl:mx-[116px] mt-12 2xl:mt-14 p-[18px_27px_13px] sm:p-[20px_31px_13px] z-[1] font-bold">
			<div className="home-stats-item break-normal py-[10px]">
				<p className="name 2xl:text-[20px]">Funded</p>
				<motion.b
					variants={{
						hidden: { height: 0, opacity: 0 },
						visible: { height: "auto", opacity: 1 },
					}}
					initial="hidden"
					whileInView="visible"
					className="flex items-center text-[30px] lg:text-[34px] 2xl:text-[43px]"
				>
					<motion.span
						className="text-[#2bad0a]"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 1.7, duration: 0.3 }}
					>
						$&nbsp;
					</motion.span>
					<motion.span
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ duration: 0.2 }}
						className="text-transparent relative pr-1 overflow-hidden"
					>
						29.85
						<CountUp
							end={29.85}
							decimals={2}
							decimal="."
							enableScrollSpy={true}
							scrollSpyOnce={true}
							scrollSpyDelay={200}
							className="absolute top-0 left-0 text-[#2bad0a]"
						/>
					</motion.span>{" "}
					<motion.span
						className="text-[#2bad0a]"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 1.7, duration: 0.3 }}
					>
						M
					</motion.span>
				</motion.b>
			</div>
			<hr className="bg-[#e5e5e9] h-7 w-[2px] hidden xl:block" />
			<div className="home-stats-item break-normal py-[10px]">
				<p className="name 2xl:text-[20px]">Community Contributions</p>
				<motion.b
					variants={{
						hidden: { height: 0, opacity: 0 },
						visible: { height: "auto", opacity: 1 },
					}}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.2, duration: 0.2 }}
					className="flex items-center text-[30px] lg:text-[34px] 2xl:text-[43px]"
				>
					<motion.span
						className="text-[#2bad0a]"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 1.9, duration: 0.3 }}
					>
						$&nbsp;
					</motion.span>
					<motion.span
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.2, duration: 0.2 }}
						className="text-transparent relative pr-1 overflow-hidden"
					>
						8.88
						<CountUp
							end={8.88}
							decimals={2}
							// delay={0.2}
							decimal="."
							enableScrollSpy={true}
							scrollSpyOnce={true}
							scrollSpyDelay={400}
							className="absolute top-0 left-0 text-[#2bad0a]"
						/>
					</motion.span>{" "}
					<motion.span
						className="text-[#2bad0a]"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 1.9, duration: 0.3 }}
					>
						M
					</motion.span>
				</motion.b>
			</div>
			<hr className="bg-[#e5e5e9] h-7 w-[2px] hidden xl:block" />
			<div className="home-stats-item break-normal py-[10px]">
				<p className="name 2xl:text-[20px]">BUIDLS</p>
				<motion.b
					variants={{
						hidden: { height: 0, opacity: 0 },
						visible: { height: "auto", opacity: 1 },
					}}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.4, duration: 0.2 }}
					className="flex items-center text-[30px] lg:text-[34px] 2xl:text-[43px]"
				>
					<motion.span
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.4, duration: 0.2 }}
						className="text-transparent relative pr-1 overflow-hidden"
					>
						8,036
						<CountUp
							end={8036}
							separator=","
							// delay={0.4}
							enableScrollSpy={true}
							scrollSpyOnce={true}
							scrollSpyDelay={600}
							className="absolute top-0 left-0 text-[#FF761C]"
						/>
					</motion.span>
				</motion.b>
			</div>
			<hr className="bg-[#e5e5e9] h-7 w-[2px] hidden xl:block" />
			<div className="home-stats-item">
				<p className="name 2xl:text-[20px]">Active Builders</p>
				<motion.b
					variants={{
						hidden: { height: 0, opacity: 0 },
						visible: { height: "auto", opacity: 1 },
					}}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.6, duration: 0.2 }}
					className="flex items-center text-[30px] lg:text-[34px] 2xl:text-[43px]"
				>
					<motion.span
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.6, duration: 0.2 }}
						className="text-transparent relative pr-1 overflow-hidden"
					>
						103,733
						<CountUp
							end={103733}
							separator=","
							// delay={0.6}
							enableScrollSpy={true}
							scrollSpyOnce={true}
							scrollSpyDelay={800}
							className="absolute top-0 left-0 text-[#FF761C]"
						/>
					</motion.span>
				</motion.b>
			</div>
		</div>
	);
};

export default HomeCounter;
