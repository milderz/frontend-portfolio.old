import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MainButton from "./Components/MainButton";
import ProjectsGrid from "./Components/ProjectsGrid";
import Section from "./Components/Section";
import SectionHeader from "./Components/SectionHeader";
import SkillsGrid from "./Components/SkillsGrid";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { GlobalStyles } from "./Components/Styles/GlobalStyles";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Section>
        <SectionHeader title="Projects" subtitle="Some projects I have built" />
        <ProjectsGrid />
      </Section>
      <Section version="primary">
        <SectionHeader
          title="More about me"
          subtitle="Get to know more about me"
        />
        <div className="about-me-text" id="about">
          <p>
            I'm a frontend developer creating modern websites and apps that help
            businesses to grow and stand out over their competitors.
          </p>
          <p>
            I have an excellent knowledge of technologies like HTML, CSS,
            Javascript, SASS, Styled Components and React JS.
          </p>
          <p>I'm also learning UX/UI basics to complement my coding skills.</p>
          <MainButton btnText="Download CV" icon={faDownload} />
        </div>
      </Section>
      <Section>
        <SectionHeader title="Skills" subtitle="My skill set" />
        <SkillsGrid />
      </Section>
      <Section version="primary">
        <SectionHeader title="Contact" subtitle="Tell me about your project" />
        <ContactSection />
      </Section>
      <Footer />
    </>
  );
}

export default App;
