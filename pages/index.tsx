import { NextPage } from "next";
import { Hero, About, Footer } from "@components/Home";
import { Layout } from "@components/Layout";

const HomePage: NextPage = () => {
	return (
		<Layout title="Dude-Perfect">
			<Hero />
			<About />
			<Footer />
		</Layout>
	);
};

export default HomePage;
