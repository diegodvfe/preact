import React from 'react'
import styled from 'styled-components'
import {auth, provider} from './firebase'

function Login() {

const signIn =()=>{
  auth.signInWithPopup(provider)
  .then((auth)=>{
    console.log('User is ', auth.user);
  })
}


  return (
    <Contaniner>
      <div className="login">

        <div className="messeger">
          <img src="data:image/jpeg;base64,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" alt="" />

        </div>
        <button onClick={signIn}>
          <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="" />
          <p>Sign In With Google</p>
        </button>

      </div>
      </Contaniner>
  )
}

const Contaniner = styled.div`
 height: 100vh;
 width: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

 .login{
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

   img{
     width: 100px;
     object-fit: contain;
   }
   button{
     display: flex;
     background-color: white;
     border-radius: 10px;
     width: 400px;
     padding: 10px;
     border: 3px solid gray;
     p{
     margin-left: 10px;
     font-size: 1.4rem;
     text-align: center;
     width: 100%;
   }
    &:hover {
                cursor : pointer;
                background-color : #ebebeb
            }
    img{
            width : 20px;
            object-fit : contain;
        }
   }

 }
`;

export default Login

