import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import { Aboutme } from "@components/Home/About/Aboutme";
import { FiShield } from "react-icons/fi";
import { FaSignal, FaMusic } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import {
	AiOutlineDoubleRight,
	AiOutlineUserAdd,
	AiOutlineClockCircle,
} from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";

export const About: FC = () => {
	const about = [
		{
			title: "Music System",
			desc: "Prepare for an immersive musical journey like no other with Dude Perfect exceptional music system. Our carefully curated selection of features brings the power of music to your fingertips, creating an unparalleled audio experience. Enjoy seamless integration with popular music streaming platforms, allowing you to easily discover and play your favorite tracks. With crystal-clear sound quality and customizable playlists, you have the tools to create the perfect ambiance for any occasion. Elevate your Discord server with the rhythmic beats and melodic tunes offered by Dude Perfect stellar music system. Get ready to turn up the volume and let the music take center stage!",
			icon: FaMusic,
		},
		{
			title: "Automoderation",
			desc: "Maintaining a healthy and harmonious Discord community is effortless with Dude Perfect robust auto moderation system. Our advanced technology works tirelessly behind the scenes to ensure a safe and enjoyable environment for all users. From detecting excessive mentions and role mentions to monitoring message length and enforcing anti-scam measures, our auto moderation system keeps unwanted content at bay. With precise detection and prompt action, you can trust Dude Perfect to swiftly handle potential rule violations and maintain order within your server. Experience the peace of mind that comes with effective moderation as Dude Perfect empowers you to focus on what matters most—fostering a vibrant and welcoming community. Join countless satisfied users who have witnessed the seamless and efficient auto moderation capabilities of Dude Perfect.",
			icon: FiShield,
		},
		{
			title: "Uptime",
			desc: "At Dude Perfect, we understand the importance of a reliable Discord bot that is available whenever you need it. That's why we take great pride in offering an exceptional uptime track record. Our robust infrastructure and dedicated team work tirelessly to ensure uninterrupted service, allowing you to enjoy the full potential of Dude Perfect without any interruptions. Count on us to deliver consistent performance, empowering your Discord community with top-notch features and reliability. Join the thousands of users who trust Dude Perfect for a seamless and reliable experience.",
			icon: AiOutlineClockCircle,
		},
		{
			title: "Low ping",
			desc: "At Dude Perfect, we prioritize speed and efficiency to provide you with a seamless Discord bot experience. With our optimized infrastructure and cutting-edge technology, Dude Perfect delivers lightning-fast response times, ensuring minimal latency. Whether you're executing commands or exploring its features, you can expect swift and precise performance. We understand the value of real-time interactions, and our commitment to low latency ensures that your Discord community stays responsive. Join the league of satisfied users who enjoy the snappy and efficient performance of Dude Perfect.",
			icon: FaSignal,
		},
	];

	return (
		<section className="bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
					Who is <br />{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						{CONFIG.OTHER.NAME}
					</span>{" "}
					?
				</h1>

				<p className="mt-4 xl:mt-6 text-xl text-gray-300">
					{"Dude Perfect is the ultimate addition to your Discord server, bringing a world of excitement and functionality right at your fingertips. With a wide range of features, including moderation tools, music, games, and more, this bot takes your server experience to a whole new level."}
				</p>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
					{about.map((info, key) => {
						return (
							<div className="space-y-3" key={key}>
								<span className="inline-block p-3 rounded-full text-white bg-purple-500">
									<info.icon className="w-6 h-6" />
								</span>

								<h1 className="text-2xl font-semibold capitalize text-white">
									{info.title}
								</h1>

								<p className="text-gray-300">{info.desc}</p>

							</div>
						);
					})}
				</div>
			</div>

			<Aboutme />
		</section>
	);
};
