"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./page.module.css";
import HomeSlider from "@/components/HomeSlider";
import HomeCounter from "@/components/HomeCounter";
import Slogan from "@/components/Slogan";
import Link from "next/link";

export default function Home() {
	return (
		<div className="">
			<div className="px-3 text-center w-full h-screen flex justify-center items-center font-bold text-2xl flex-col gap-2">
				<h1>
					Scroll Down to View <span className="dorahacksSpan">DoraHacks</span> Animation Effect
				</h1>
				<Link
					href="/#scroll-here"
					scroll={false}
				>
					<i className="fa-solid fa-chevron-down scroll-down"></i>
				</Link>
			</div>
			<div
				className="px-2 xl:px-16"
				id="scroll-here"
			>
				<HomeSlider />
				<HomeCounter />
				<Slogan />
			</div>
			<div className="w-full h-[400px]"></div>
		</div>
	);
}
