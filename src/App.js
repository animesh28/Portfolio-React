import { ThemeProvider } from "styled-components"
import GlobalStyles from "./globalStyles"
import {lightTheme, darkTheme} from './components/Themes'
import { Switch, Route } from "react-router-dom"
import Main from "./components/Main"

function App() {
  return <>
    <GlobalStyles/>
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

