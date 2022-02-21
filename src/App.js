import { ThemeProvider } from "styled-components"
import GlobalStyles from "./globalStyles"
import {lightTheme, darkTheme} from './components/Themes'
import { Switch, Route } from "react-router-dom"
import Main from "./components/Main"
import Work from "./components/Work"

function App() {
  return <>
    <GlobalStyles/>
    <ThemeProvider theme={lightTheme}>
      <Switch>
      <Route path="/work" component={Work} />
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

