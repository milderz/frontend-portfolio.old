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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./Components/ProjectDetail";
import ScrollToTop from "./Components/ScrollToTop";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Section>
                  <SectionHeader
                    title="Projects"
                    subtitle="Some projects I have built"
                    id="projects"
                  />
                  <ProjectsGrid />
                </Section>
                <Section version="primary">
                  <SectionHeader
                    title="More about me"
                    subtitle="Get to know more about me"
                    id="about"
                  />

                  <div className="about-me-text">
                    <Fade cascade>
                      <p>
                        As a frontend developer, I specialize in creating modern
                        websites and apps that assist businesses in gaining an
                        advantage over their competitors.
                      </p>
                      <p>
                        My expertise includes working with technologies such as
                        HTML, CSS, Javascript, SASS, Styled Components, and
                        React JS.
                      </p>
                      <p>
                        Additionally, I am currently in the process of learning
                        the basics of UX/UI design to enhance my coding
                        abilities.
                      </p>
                      <MainButton btnText="Download CV" icon={faDownload} />
                    </Fade>
                  </div>
                </Section>
                <Section>
                  <SectionHeader
                    title="Skills"
                    subtitle="Technologies that I like"
                  />
                  <SkillsGrid />
                </Section>
                <Section version="primary">
                  <SectionHeader
                    title="Contact"
                    subtitle="Tell me about your project"
                    id="contact"
                  />
                  <ContactSection />
                </Section>
                <Footer />
              </>
            }
          />
          <Route
            path=":name"
            element={
              <>
                <ProjectDetail />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
