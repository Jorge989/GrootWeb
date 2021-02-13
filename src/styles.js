import styled from 'styled-components'



export const Header = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;

margin-top:40px;
z-index:3;
position:fixed;
.header{
 
    display:flex;
align-items:center;
justify-content:space-between;
z-index:3;
flex-direction:row;  

width:100%;
.fabars{
    display:none;
}
.buttons{
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
cursor: pointer;
    position:absolute;
   height:10%;
    width:300px;
    gap:100px;
    margin-left:780px;
}
.Login{
    background-color:#FF504C;
    border-radius:30px;
    border:none;
    width:100px;
    margin-top:-10px;
    margin-left:-45px;
    font-family:'Raleway';
    font-weight:600;
    color: #fff;
    height:35px;
    cursor: pointer;

    
    
}
.Shoplogo{
    margin-top:-10px;
    height:5%;
    margin-left:480px;
    position:fixed;
}
.mainlogo{
    width:3%;
    height:4%;
    margin-left:89px;
    margin-top:-2px;
    cursor: pointer;
    
}
.ul-linhas{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
margin-top:-6px;
    margin-right:650px;
    margin-left:-20px;

}
.lista{
    display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:row; 
list-style:none;
gap:35px;

cursor: pointer;
width:599px;
margin-right:50px;
.lired{
    color:#FF4E46;

}
li{
    font-weight: 600;
color: #fff;
font-size:13px;

font-family: 'Raleway'
}
}
.hrbox{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
  margin-left:-10px;
    width:600px;
    margin-top: -12px;

    .linhavermelha{
        width:185px;
        height:10%;
        border: 2px solid #FF1D6A;
        margin-right:0px;
    }
    .linhabranca{
        width:1000px;
        height:10%;
        margin-right:50px;

    }
}

}
@media screen and (max-width: 900px) {
    display:flex;
align-items:center;
justify-content:center;
flex-direction:row;

margin-top:50px;
z-index:3;
position:fixed;
.header{
    display:flex;
align-items:center;
justify-content:space-between;
z-index:3;
flex-direction:row;  

width:100%;
.fadiv{
    display:flex;
;
    width:100px;
    height:100px;
    margin-left:320px;

   z-index:4;
}
.fabars{
 display:flex;
 width:200px;
 height:50px;
 margin-right:40px;
 margin-top:20px;

 z-index:4;
}
.buttons{
    display:flex;
    display:none;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    margin-left:-20px;
cursor: pointer;
    position:absolute;
   height:10%;
    width:300px;
    gap:100px;
    margin-left:780px;
}
.Login{

    background-color:#FF504C;
    border-radius:30px;
    border:none;
    width:100px;
    margin-top:-10px;
    font-family:'Raleway';
    font-weight:600;
    color: #fff;
    height:40px;
    cursor: pointer;

    margin-left:-200px;
    
}
.Shoplogo{
    margin-top:-10px;
    height:5%;
    margin-left:10px;
    position:fixed;
}
.mainlogo{
    width:5%;
    height:4%;
    margin-left:60px;
    cursor: pointer;
    
}
.ul-linhas{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
margin-top:-6px;
    margin-right:60px;

}
.lista{
    display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:row; 
list-style:none;
gap:35px;
cursor: pointer;
width:599px;
margin-right:40px;
.lired{
    color:#FF4E46;

}
li{
    font-weight: 600;
color: #fff;
font-size:12px;

font-family: 'Raleway'
}
}
.hrbox{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
  margin-right: 36px;
    width:565px;
    margin-top: -12px;
    
    .linhavermelha{
        width:185px;
        height:10%;
        border: 2px solid #FF1D6A;
        margin-right:0px;
    }
    .linhabranca{
        width:1000px;
        height:10%;
        margin-right:50px;

    }
}

}

}
`
export const Continer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
z-index:0;
position:relative;

.containergrot{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
   margin-top:270px; 
  margin-left:350px;  

}
.h1groot{
margin-top:130px;
    font-size:530px;
    font-weight: 700;
    letter-spacing: 50px;
    position:fixed;
     margin-left:100px; 
   color:#fff; 
   font-family:'Raleway';
   opacity:0.1;
   
transform: scaleX(1);
}
.h1groot2{
    margin-top:755px;
    font-size:400px;
    position:fixed;
 
    letter-spacing: 50px;
     margin-left:190px; 
   color:#fff; 
   font-family:'Raleway';
   opacity:0.1;

}
.h1groot3{
    margin-top:345px;
    font-size:310px;
    
    position:fixed;
    font-weight:bold;
    letter-spacing: -50px;

 margin-left:-215px;
    color:#fff; 
opacity:0.3;
   z-index:999;
 position:absolute;
   font-family:'Raleway';
   z-index:4;
 

   
}
.circles {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:380px;

    margin-left:918px;
    width:300px;
    z-index:4;

    margin-top: -130px;
    .groot{
        margin-top:85px;
        position:fixed;
        z-index:999;
        margin-left:80px;
    }
   .grootimg{
       height:620px;
   }
    .yellow{
background-color:yellow;
filter: blur(1.5rem);
opacity: 0.6;
width:300px;
border-radius:100px;
height:200px;
    }
    .green{
        background-color:green;
width:300px;
height:200px; 
filter: blur(1.5rem);
opacity: 0.6;
box-shadow: 5px 10px 10px green;
border-radius:100px;  
    }
}
.marvel{
    width:260px;

    height:100px;
    margin-top:-360px;
    margin-right: 810px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    flex-direction:row;


.marvel-btn{
    display:flex;
    background-color:#E81127;
    border:none;
    cursor: pointer;
    z-index:4;
    align-items:center;
    width:130px;
    height:30px;
   margin-left:10px;
   font-size:28px;
   letter-spacing:-2px;
   transform: scale(.9,2);
   padding: 0px 5px ;
   color: #fff;
   font-weight:800;
 


}
.studios-btn{
    display:flex;
    background-color:transparent;
    border:none;
    cursor: pointer;
    z-index:4;
    align-items:center;
    width:130px;
    border-top:2px solid #E81127;
    border-bottom: 2px solid #E81127;
    height:30px;
   margin-left:-5px;
   font-size:28px;
   letter-spacing:-2px;
   transform: scale(.9,2);
   padding: 0px 5px ;
   color: #E81127;
   font-weight:800;
 
}
}
.textos{
    display:flex;
    align-items:flex-start;
    flex-direction:column;

    line-height:20px;
    margin-right:496px;
    margin-top:-30px;
.dancing-groot{
font-weight:900;
    color:#fff;
    font-size:63px;
}
.marvel-text{
    color:#fff;
    font-size:30px;
}
.text{
    color:#fff;
    margin-top:-50px;
    font-size:14px;
}
}
.button-above{
    display:flex;
    justify-content:space-between;
    flex-direction:row;
   
    margin-right:525px;
    width:515px;
    height:70px;
    margin-top:10px;
    
    gap:18px;
    .addcard{
        background-color:#FF5252;
        border:none;
        z-index:4;
        height:44px;
        width:190px;
        border-radius:30px;
        cursor: pointer;
        color: #fff;
        font-weight:600;
        box-shadow: 0px 2px 5px 2px #616161;

    }
    .watch{
        display:flex;
        align-items:center;
        justify-content:center;
        padding: 1px 6px;
        background-color:transparent;
        border:none;
        border: 2px solid #fff;
        z-index:4;
        height:44px;
        width:190px;
        border-radius:30px;
        cursor: pointer;
        color: #fff;
        font-weight:600;
        margin-right:140px;
        font-size:11px;
      

        svg{
            width:20%;
            height:65%;
            margin-left:2px;
            
        }
    }
}
footer{
  
        height:100%;
        width:100%;
        z-index:4;

    .footer{
        
        height:50px;
        width:100px;
        z-index:4;
        .share{
         
            width:115px;
            margin-top:60px;
            margin-left:100px;
        }
    }
}
.round{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    width:160px;
 
    height:20px;
    margin-top:15px;
    margin-left:190px;
    z-index:4;
    
    .circle1{
background-color:#B7D878;
height:13px;
width:13px;
z-index:4;
border-radius: 50%;
    }
    .circle2{
        border: solid 2px #B7D878;
        height:11px;
width:11px;
        z-index:4;
        border-radius: 50%;
    }
    .circle3{
        background-color:#B7D878;
        height:13px;
width:13px;
        z-index:4;
        border-radius: 50%;
    }
    .circle4{
        background-color:#B7D878;
        height:13px;
width:13px;
        z-index:4;
        border-radius: 50%;
    }
    .circle5{
        background-color:#B7D878;
        height:13px;
width:13px;
        z-index:4;
        border-radius: 50%;
    }
   
}
@media screen and (max-width: 900px) {
    display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
z-index:0;
position:relative;
margin-left:-170px;
.containergrot{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
   margin-top:400px; 
  margin-left:0px;  

}
.h1groot{
margin-top:70px;
    font-size:480px;
    font-weight: 700;
    letter-spacing: 40px;
    position:fixed;
     margin-left:200px; 
   color:#fff; 
   font-family:'Raleway';
   opacity:0.1;
   
transform: scale(.9,1.1);
}
.h1groot2{
    margin-top:700px;
    font-size:370px;
    position:fixed;
 
    letter-spacing: 1px;
     margin-left:230px; 
   color:#fff; 
   font-family:'Raleway';
   opacity:0.1;

}
.h1groot3{
    margin-top:300px;
    font-size:290px;
    
    position:fixed;
    font-weight:bold;
    letter-spacing: -40px;

 margin-left:45px;
    color:#fff; 
opacity:0.3;
   z-index:999;
 position:absolute;
   font-family:'Raleway';
   z-index:4;


   
}
.circles {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:380px;

    margin-left:635px;
    width:300px;
    z-index:4;

    margin-top: -130px;
    .groot{
        margin-top:20px;
        position:fixed;
        z-index:999;
        margin-left:120px;
    }
   .grootimg{
       height:700px;
   }
    .yellow{
background-color:yellow;
filter: blur(1.5rem);
opacity: 0.6;
width:300px;
border-radius:140px;
margin-left:100px;
height:200px;
    }
    .green{
        background-color:green;
width:300px;
height:200px; 
filter: blur(1.5rem);
opacity: 0.6;
margin-left:100px;
box-shadow: 5px 10px 10px green;
border-radius:100px;  
    }
}
.marvel{
    width:260px;

    height:100px;
    margin-top:-360px;
    margin-right: 1200px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    flex-direction:row;


.marvel-btn{
    display:flex;
    background-color:#E81127;
    border:none;
    cursor: pointer;
    z-index:4;
    align-items:center;
    width:130px;
    height:30px;
   margin-left:250px;
   font-size:28px;
   letter-spacing:-2px;
   transform: scale(.9,2);
   padding: 0px 5px ;
   color: #fff;
   font-weight:800;
 


}
.studios-btn{
    display:flex;
    background-color:transparent;
    border:none;
    cursor: pointer;
    z-index:4;
    align-items:center;
    width:130px;
    border-top:2px solid #E81127;
    border-bottom: 2px solid #E81127;
    height:30px;
   margin-left:-5px;
   font-size:28px;
   letter-spacing:-2px;
   transform: scale(.9,2);
   padding: 0px 5px ;
   color: #E81127;
   font-weight:800;
 
}
}
.textos{
    display:flex;
    align-items:flex-start;
    flex-direction:column;

    line-height:20px;
    margin-right:440px;
    margin-top:-30px;
.dancing-groot{
font-weight:900;
    color:#fff;
    font-size:48px;
    margin-right:100px;
}
.marvel-text{
    color:#fff;
    font-size:26px;
}
.text{
    color:#fff;
    margin-top:-50px;
    font-size:12px;
}
}
.button-above{
    display:flex;
    justify-content:space-between;
    flex-direction:row;
   
    margin-right:455px;
    width:515px;
    height:70px;
    
    gap:18px;
    .addcard{
        background-color:#FF5252;
        border:none;
        z-index:4;
        height:44px;
        width:190px;
        border-radius:30px;
        cursor: pointer;
        color: #fff;
        font-weight:600;
        box-shadow: 0px 2px 5px 2px #616161;

    }
    .watch{
        display:flex;
        align-items:center;
        justify-content:center;
        padding: 1px 6px;
        background-color:transparent;
        border:none;
        border: 2px solid #fff;
        z-index:4;
        height:44px;
        width:190px;
        border-radius:30px;
        cursor: pointer;
        color: #fff;
        font-weight:600;
        margin-right:140px;
        font-size:11px;
      

        svg{
            width:20%;
            height:65%;
            margin-left:2px;
            
        }
    }
}
footer{
  
        height:100%;
        width:100%;
        z-index:4;

    .footer{
        
        height:50px;
        width:100px;
        z-index:4;
        .share{
         
            width:115px;
            margin-top:50px;
            margin-left:270px;
        }
    }
}
.round{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    width:160px;
    height:20px;
    margin-top:5px;

    z-index:4;
    
    .circle1{
background-color:#B7D878;
height:13px;
width:13px;
z-index:4;
border-radius: 50%;
    }
    .circle2{
        border: solid 2px #B7D878;
        height:11px;
width:11px;
        z-index:4;
        border-radius: 50%;
    }
    .circle3{
        background-color:#B7D878;
        height:13px;
width:13px;
        z-index:4;
        border-radius: 50%;
    }
    .circle4{
        background-color:#B7D878;
        height:13px;
width:13px;
        z-index:4;
        border-radius: 50%;
    }
    .circle5{
        background-color:#B7D878;
        height:13px;
width:13px;
        z-index:4;
        border-radius: 50%;
    }
   
}
}
`
