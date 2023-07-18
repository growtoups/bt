import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";

import error from "@assets/error.svg";

const ErrorPage: NextPage = () => {
	return (
		<Layout title="404 Error">
			<div className="bg-gray-900 py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
					<div className="w-full flex justify-center items-center rounded-lg overflow-hidden relative mx-auto">
						<div className="flex flex-col justify-center items-center relative p-3 md:p-5">
							<CustomImage src={error} alt="Error-Page-Image" />
							<p className="text-gray-200 md:text-lg text-center mb-8">
								Sorry, but the page you're looking for seems to have gone on vacation. It's probably sipping margaritas on a sunny beach somewhere. We apologize for the inconvenience and hope you find what you're looking for soon. In the meantime, why not enjoy some virtual sunshine here?
							</p>
							<Link
								href="/"
								className="inline-block bg-purple-500 hover:bg-purple-600 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-3"
							>
								Go back.
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ErrorPage;
