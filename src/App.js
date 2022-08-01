import React, { Component } from 'react';
import Menu from './img/menu.png'
import Bag from './img/bag.png'
import Moisturizer from './img/moisturizer.png'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const UniversalStyle = createGlobalStyle`
*{
box-sizing: border-box;
padding:0;
margin:0;
background:goldenrod;
}`;
export const Store= styled.div`
figure{
  text-align:center;
}
img{
  width:70%
}
section{
  font-family:arial;
  display:flex;
  justify-content: space-around;
}
h1{
  font-size:2rem;
}
div{
  width:90%;
  margin:5% auto;
}
p{
  margin: 2% 0 2% 0;
}
h3{
  font-size:1.5rem;
}
form{
  width:80%;
  margin:3% 0 3% 0;
  display:flex;
  justify-content: space-evenly;
}

footer{
  display:flex;
  flex-direction: column;
  align-items: center;
}

`
export const Top= styled.div`
background-color:antiquewhite;
overflow: hidden;
width:90%;
border-radius:15px;
height:6vh;
margin:5% auto;
display:flex;
justify-content: space-around;
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&display=swap');
img{
  width:10%;
  background-color:antiquewhite;
  cursor:pointer;
}
input{
  border:none;
  outline: none;
  width:70%;
  background-color:antiquewhite;
  font-family: 'Caveat', cursive;
  text-align:center;
  font-size:2rem;
}
`
export const Btn= styled.button`
background:black;
color:white;
border:none;
border-radius: 15px;
width:80%;
height:35px;
margin-bottom: 3%;
`
export const Box= styled.section`
border:solid 2px black;
width:80%;
border-radius: 15px;
height:35px;
button{
  cursor:poiter;
  border:none;
  font-size:1.5rem;

}
`
export default class App extends Component{
  state = {
    num:0
  }
  acrescentar = () => {
    if(this.state.num <= 4){
     this.setState({
       num:this.state.num+1
      })
       }
 
  }
   descontar = () => {
     if(this.state.num >= 1){
      this.setState({
         num:this.state.num-1
        })
        }
   }
  render(){
    return(
      <Store>
        <UniversalStyle />
        <Top>
          <img src={Menu} alt="menu" />
          <input type="text" />
          <img src={Bag} alt="bag" />
        </Top>
        <main>
          <figure>
            <img src={Moisturizer} alt="Moisturizer" />
          </figure>
          <section>
           <h1>PASSION</h1>
           <h2>$15</h2>
          </section>
          <div>
            <h3>WHAT'S INSIDE</h3>
            <p>Chili, oregano, safran,paprika</p>
            <h3>WHY WE LOVE IT</h3>
            <p>This one will add a little 
              savoury flavour to any food and 
              turn any meal to a culinary masterpiece</p>
          </div>
          <form>
              <input type="radio" id="bag" name="size"/>
              <label  for="bag">BAG(75g)</label>
              <input type="radio" id="jar" name="size"/>
              <label for="jar">JAR(150g)</label>
          </form>
        </main>
        <footer>
          <Box>
           <button onClick={this.descontar}>-</button>
           <p>{this.state.num}</p>
           <button onClick={this.acrescentar} >+</button>
          </Box>
          <p>*Maximum of 5 units per customer</p>
          <Btn>ADD TO CART</Btn>
        </footer>
      </Store>
    )
  }
};
