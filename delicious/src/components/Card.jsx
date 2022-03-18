import styled from "styled-components";

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;


  img {
    border-radius: 1.2rem;
    position:absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align:center;
    font-weight: 600;
    font-size:1.5rem;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default Card