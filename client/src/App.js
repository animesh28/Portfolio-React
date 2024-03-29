import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import SoundBar from "./subcomponents/SoundBar";
import { lazy, Suspense } from "react";
import Loading from "./subcomponents/Loading";

const MainPage = lazy(() => import("./components/Main"));
const WorkPage = lazy(() => import("./components/WorkRespPage"));
const ContactPage = lazy(() => import("./components/Contact"));
const SkillsPage = lazy(() => import("./components/MySkills"));
const About = lazy(() => import("./components/About"));
function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar theme={lightTheme} />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/skills" component={SkillsPage} />
              <Route exact path="/about" component={About} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
