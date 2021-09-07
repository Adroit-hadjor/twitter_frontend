import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.scss';
import { Row, Col ,Container,Button} from 'reactstrap';

import LeftColumn from '../components/leftColumn';
import RightColumn from '../components/rightColumn';
import MiddleColumn from '../components/middleColumn';
import {withCookies,useCookies} from "react-cookie";
import {useHistory} from "react-router-dom"

function Main() {
	const [ icon_color, seticon_color ] = useState('grey');
   const [ focus, setFocus ] = useState(false);
   const [cookies,setCookie] = useCookies(["token"])
   const history = useHistory()
   
   
      useEffect(()=>{
         //alert(JSON.stringify(cookies))
         if(cookies.token === "undefined" ){
               
               history.push("/login")
               
         }
      
        
      },[])

  return (
   
      <Container className="whole" style={{backgroundColor:"#15202B",color:"white"}} fluid>
     <div  className="columnContainer">
        <LeftColumn/>
        <div  className="big_middle">
        <MiddleColumn/>
        <RightColumn/>
        </div>
       
     </div>
     </Container>
 
  );
}

export default withCookies(Main);
