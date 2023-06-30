import logo from './logo.svg';
import './App.css';
import {ThemeProvider,createGlobalStyle} from 'styled-components'
import { StyledButton,FancyButton,SubmitButton,AnimatedLogo,DarkButton } from './components/Button/Button';


const theme={
  dark:{
    primary:'#000',
    text:'#fff'
  },
  light:{
    primary:'#fff',
    text:'#000'
  },
  fontFamily:'Segoe UI'

}

const GlobalStyle=createGlobalStyle`
button{
  /* font-family: "Roboto"; */
  font-family:${props=>props.theme.fontFamily};

}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
      {/* <button>Button</button> */}
      <AnimatedLogo src={logo}/>
      <StyledButton type='submit'>StyledButton</StyledButton>
      <div>
        <br/>
      </div>

      <StyledButton variant='outline'>StyledButton</StyledButton><br/>
      <FancyButton variant='outline' as='a'>FancyButton</FancyButton><br/>
      <SubmitButton variant='outline'>Submit</SubmitButton><br/>

      <DarkButton>Dark Theme</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
