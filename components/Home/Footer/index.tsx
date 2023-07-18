import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { CONFIG } from "@libs/config";
import { FaDiscord } from "react-icons/fa";

export const Footer: FC = () => {
	const invite = () => {
		window.open("/invite", "name", "width=400,height=800");
	};


	return (
		<section id="contact" className="bg-gray-900">
			<div className="container px-6 py-16 mx-auto text-center">
				<div className="flex flex-col sm:flex-row items-center justify-between">
					<div className="w-72">
						<h5 className="text-white font-semibold text-5xl">
							İletişim..
						</h5>
					</div>

					<div className="flex-row flex">
						{CONFIG.CONTACT.map((social, idx) => (
							<Link
								underline
								key={idx}
								href={social.href}
								className={`mr-5 w-6 mx-2 my-2 text-4xl ${social.color} hover:scale-110 active:scale-90 duration-200`}
							>
								<social.icon />
							</Link>
						))}
					</div>
				</div>



					<div className="my-5">
						<button
							className="flex text-white font-semibold items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 round rounded-lg h-16 px-8 hover:-translate-y-2.5 hover:scale-105 active:scale-90 active:translate-y-0 duration-200"
							onClick={invite}
						>
							<FaDiscord className="text-2xl" />
							<span className="text-xl ml-3">
								Invite it!
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
