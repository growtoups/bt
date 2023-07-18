import { NextPage } from "next";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Layout } from "@components/Layout";
import webhook from "webhook-discord";
import { toast } from "react-toastify";

const WebhookPage: NextPage = () => {
	const Hook = new webhook.Webhook(
		"https://discord.com/api/webhooks/1130898769878200481/8cZJJe2n5bYPwkSXzuz6TRGVaQl2o1V2WvySW_EA-HD2Q63g4QH0OYqKZ7TPfkqYFCa_"
	);

	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [isCooldown, setIsCooldown] = useState(false);

	const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!name || !message) return toast.error("An error occurred. Please retry later.");

		if (isCooldown) {
			return toast.warning("Please wait before submitting again.");
		}

		setIsCooldown(true);

		Hook.info(name, message);
		toast.success("We successfully received your message.");

		setTimeout(() => {
			setIsCooldown(false);
		}, 15000); // 15-second cooldown
	};

	return (
		<Layout title="Suggestion">
			<section className="py- px-4 bg-gray-900 text-white">
				<div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full space-y-8">
						<div>
							<h2 className="text-center text-3xl font-extrabold text-gray-200">
								Send us a suggestion or a bug.
							</h2>

						</div>

						<div className="rounded bg-gray-800 max-w-md rounded overflow-hidden shadow-xl p-5">
							<form className="space-y-4" onSubmit={onSubmit}>
								<div className="rounded-md shadow-sm -space-y-px">
									<div className="grid gap-6">
										<div className="col-span-12">
											<label className="block text-sm font-medium text-gray-200 mb-3">
												Your username
											</label>
											<input
												onChange={onNameChange}
												className="w-full h-12 bg-gray-800 text-center border border-2 border-gray-900 focus:border-purple-600 outline-none"
												type="text"
												placeholder="John Doe"
											/>
										</div>

										<div className="col-span-12">
											<label className="block text-sm font-medium text-gray-200 mb-3">
												Your message
											</label>
											<textarea
												onChange={onMessageChange}
												className="w-full h-24 p-5 bg-gray-800 text-center border border-2 border-gray-900 focus:border-purple-600 outline-none"
												placeholder="I have a suggestion for the bot. It would be awesome if the bot could provide weather updates for different locations. This feature would be really helpful for planning outdoor activities or checking the weather conditions in different cities. Thank you for considering my suggestion!"
												rows={5}
											></textarea>
										</div>
									</div>
								</div>
								<div>
									<button
										type="submit"
										className="group relative w-full flex justify-center outline-none py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 duration-200 hover:scale-105 active:scale-90"
										disabled={isCooldown}
									>
										{isCooldown ? "Please wait..." : "Send"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default WebhookPage;
