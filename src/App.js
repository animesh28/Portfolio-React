import { ThemeProvider } from "styled-components"
import GlobalStyles from "./globalStyles"
import {lightTheme, darkTheme} from './components/Themes'
import { Switch, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import SoundBar from "./subcomponents/SoundBar"
import { lazy, Suspense } from "react"
import Loading from "./subcomponents/Loading"

function App() {
  const location = useLocation()
  const MainPage = lazy(() => import("./components/Main"))
  const WorkPage = lazy(() => import("./components/Work"))
  const BlogPage = lazy(() => import("./components/Blog"))
  const SkillsPage = lazy(() => import("./components/MySkills"))

  return <>
    <GlobalStyles/>
    <ThemeProvider theme={lightTheme}>
    <Suspense fallback={<Loading />}>
      <SoundBar theme={lightTheme}/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/skills" component={SkillsPage} />
        </Switch>
        </AnimatePresence>
      </Suspense>
    </ThemeProvider>
    </>
    
}

export default App

