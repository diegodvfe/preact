import Pages from "./pages/Pages"
import Categories from "./components/Categories"
import {BrowserRouter, Link} from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { GiFoodTruck } from 'react-icons/gi'


function App() {
  return (
    <div className="App">
      <h1>App Recipe</h1>
      <BrowserRouter>
      <Nav>
      <GiFoodTruck/>
       <Logo to={"/"} >AppDelicious</Logo>
      </Nav>
      <Search/>
          <Categories/>
          <Pages />
      </BrowserRouter >
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 3rem;
font-weight: 400;
font-family: 'Poppins', cursive;
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 3rem;
}
`

export default App;
