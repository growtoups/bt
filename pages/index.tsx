import { NextPage } from "next";
import { Hero, About } from "@components/Home";
import { Layout } from "@components/Layout";

const HomePage: NextPage = () => {
	return (
		<Layout title="Home">
			<Hero />
			<About />
		</Layout>
	);
};

export default HomePage;
