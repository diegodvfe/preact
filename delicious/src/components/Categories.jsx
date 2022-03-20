import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import  {GiNoodles, GiChopsticks} from "react-icons/gi"
import styled from "styled-components";
import { NavLink } from "react-router-dom"


 function Categories() {
  return (
    <List>
      <SLink  to={'/cousin/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink  to={'/cousin/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink  to={'/cousin/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </SLink>
      <SLink  to={'/cousin/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
    </List>

  )
}
const List = styled.div`
  display:flex;
  justify-content: space-around;
  margin:1.5rem 0rem;
border-radius: 10px;
border: 3px solid black;
padding: 0.2rem;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(40deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.9);

h4{
  color: white;
  font-size: 0.8rem;
}
svg{
  color: white;
  font-size: 1.5rem;
}
&.active{
  background: linear-gradient(to right, #f27639, #e95057);
}

`

export default Categories