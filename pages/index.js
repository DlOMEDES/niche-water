import Head from "next/head";
import LayoutGrid from "../components/LayoutGrid";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import NewTrends from "../components/NewTrends";
import PopularArticles from "../components/PopularArticles";
import LatestArticles from "../components/LatestArticles";
import VideoSection from "../components/VideoSection";
import FeaturedArticles from "../components/FeaturedArticles";
import MostRead from "../components/MostRead";
import AdSection from "../components/AdSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <LayoutGrid>
      <NavBar />
      <Banner />
      <NewTrends />
      <PopularArticles />
      <LatestArticles />
      <VideoSection />
      <FeaturedArticles />
      <MostRead />
      <AdSection />
      <Footer />
    </LayoutGrid>
  );
}
