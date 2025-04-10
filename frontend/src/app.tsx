import Navbar from "./components/Navbar/Navbar"
import TopStrip from "./components/TopStrip/TopStrip"
import HeroSection from "./components/HeroSection/HeroSection"
import WorksCardSection from "./components/WorksCardSection/WorksCardSection"
export function App() {
  return (
    <>
      <TopStrip />
      <Navbar />
      <HeroSection />
      <WorksCardSection />
    </>
  )
}
