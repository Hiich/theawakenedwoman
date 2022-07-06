import Head from "next/head";

// Components
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StackedCard from "../components/StackedCard";
import Team from "../components/Team";
import RoadMap from "../components/RoadMap";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Navigation using nextjs and tailwindcss</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			
			<Navbar />
			<HeroSection />
			<StackedCard />
			<RoadMap />
			<Team />
			<Footer />
		</div>
	);
}
