import styled from "styled-components";

export const Container = styled.div`
    color: #606060;  
    
`;


export const Modal = styled.div`
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    margin-top: 0px;
    display: flex;
    justify-content: center;
    padding: 0px;
    flex-direction: column;
    text-align: center;
    color: #fff;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;  
    }

    h1{
        @media (max-width: 768px){
            font-size: 26px;
            
        }
        
    }


    .swiper{
        max-width: 90%;
        padding: 20px 5px;    
             
        
        
    }   

    img {
        border-radius: 15px;
        width: 40%;
        display: block;
        margin: 0 auto;
        vertical-align: middle;

        @media (max-width: 768px) {
            width: 80%;
        }
    }
    button {
        a {
            text-decoration: none;
            color: #FFF;
            font-size: 16px;
            font-weight: 600;            
            
        }                 
        

        margin: 10px 0px;
        background-color: #26CC4C;
        color: #FFF;
        border: none;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        width: 300px;
        cursor:pointer;
        transition: background-color 0.3s;
    }

    button:hover{
        background-color: #16752C;
    }
    
    .text {
        width: 100%;
        text-align: center;  

        @media (max-width: 768px) {
            width: 80%;
            text-align: center;  
        }

        p {
            color: #FFF;
            font-size: 14px;
            
        }
        
        h1 {
            color: #FFF;
            font-size: 36px;

            @media (max-width: 768px) {
                font-size: 25px;
             
            }
        }

        
    }

    
`;

export const Proposal = styled.div`
    padding: 20px;
    text-align: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;    

    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }
        

    .icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0px;
    background-color: #ffffff;

    @media (max-width: 768px) {
        flex-direction: column; 
        justify-content: center;
        width: 100%;     
       
    }
       
    }
        .card-text {
            text-align: center;
            background-color: #9300A0;
            border-radius: 10px;
            width: 100%;
            padding: 0px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 4px 4px 4px rgba(0,0,0,0.25); 


            @media (max-width: 768px){
                padding: 20px;
                margin: 0 auto;  
                width: 70%;             

            }
        }

        img {
            width: 40%;
            margin: 5px;        
        
        }

        h3{
            color: #fff;
        }

        
        .experiencia {
            display: flex;
            justify-content: center;
          }
          
          .icon {
            display: block;
            @media (max-width: 768px) {
              
            }
          }
          
          .icon2 {
            display: none;
          
            @media (max-width: 768px) {
              display: block;
            }
          }
          experiencia {
            width: 80%;

            @media (max-width: 768px) {
                width: 70%;
            }
        }
        .mockup{
            width: 100%;
            padding: 0px;
            margin: 0 auto;
        } 
          
          
    }
`;

export const How = styled.div`
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    width: 60%;      
    border-radius: 15px;
    margin: 0 auto;
    padding: 10px 50px;
    color: #FFF;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25); 

    @media (max-width: 768px){
        width: 77%;
        padding: 40px;

    
    }  
       

    h1 {
        text-align: center;        
    }

    .texts {
        display: flex;
        justify-content: space-around;
        text-align: left;
        padding: 15px;

        @media (max-width: 768px) {
            width: 100%;
            flex-direction: column;
            justify-content: space-around;
            padding: 0px;
            text-align: left;           
            
            
        }
    }

    .text { 
        
        width: 35%;
        padding: 20px;
        
        @media (max-width: 768px) {
           padding: 0px;
           width: 100%;
           margin-bottom: 15px;  
        }
        
    }
`;
export const Text = styled.div`

.swiper{
    background-color: #9300A0;
    width: 100%; /* Largura da imagem */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin 0 auto;
    padding: 10px 10px;
    color: #fff;   


    
  @media (max-width: 768px) {
    width: 100%;
    padding: 5px 0px;
    margin 0 auto;
    
  }
  .slide{
    width: 40%;
    @media (max-width: 768px){
    width: 100%; 
    }

  }
  .custom-slide.hover{
    background-color: #26CC4C;
    
    @media (max-width: 767px) {
        .custom-slide.touch-hover {
          background-color: #26CC4C;
        }
      }
  }
  .custom-slide{
    transition: background-color 0.3s ease;
  }
    

    .item{
        width: 70%;
        height: auto;
        object-fit: cover;
        border-radius: 20px; 
        
  @media (max-width: 768px) {
    
  }  
    }
}

/*Sessão do motion*/
.carrosel{
display:flex;
border-radius: 5%;
width: 100%;
max-width: 1000px;
margin: 10px auto;
margin-bottom: 0px;
min-height: 40vh;
align-items: center;
justify-content: center;

}

.inner{
    display:flex;    
    
}

.item{
    min-height: 200px;
    min-width: 200px;
    padding: 10px;
    
}
.item img{
    width: 100%;
    height: 90%;
    border-radius: 5%;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    pointer-events: none;
    
    
}
.carousel{
    cursor: grab;
    overflow: hidden;
    
}
/*Sessão do voucher*/

.voucher{
    
    border: 4px solid #9300A0;
    box-shadow: 4px 4px 4px rgba(0,0,0,.25);
    border-radius: 20px;
    width: 60%;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;   
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 97%;
        font-size: 20px;
        flex-direction: column;
        text-align: center;  
        margin: 0 auto;
        margin-bottom: 20px;
       
    }
h1{
    margin: 0 auto;
    &::after {
        content: "";
        width: 50px;
        height: 3px;
        background-color: #CA60C6;
        display: block;
        margin: 1px auto;
    }
}
    .tablet{
        align-items: center;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        padding-botoom: 10px;


        @media (max-width: 768px){
        flex-direction: column;
        padding-botoom: 10px;
        
        }

    }
    .parceiros{
        background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
        display: flex;
        margin: 0 auto;
        background-color: #9300A0;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0px;

        @media (max-width: 768px){


            }
        
        
    }
}

img{
    width: 25%;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    
}
.imgtablet{
     width: 40%;
     
    
}
    
`;

export const Plans = styled.div`
text-align: center;

    .title {
        margin-bottom: 30px;        

        &::after {
            content: "";
            width: 50px;
            height: 3px;
            background-color: #CA60C6;
            display: block;
            margin: 1px auto;
        }
    }

    .container {
        
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 10px 0px;


        @media (max-width: 768px) {
            
            margin: 0 auto;   
            flex-direction: column;       
            
           
        }
        
        .card {         
            
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #9300A0;           
            box-shadow: 4px 4px 4px rgba(0,0,0,.18);
            padding: 5px;
            border-radius: 15px;
            margin: 5px;
            width: 90%;

            @media (max-width: 768px) {
                width: 100%;
                padding: 0px;
                margin: 10px;
                
                
                
            }
            
            

            .left {
                display:flex;
                align-items: center;
                color: #fff;
                justify-content: center;
            }
            .currency{
                font-size: 24px;
                margin-right: 4px;
                color: #fff;
            }

            h1 {
                font-size: 40px;
                margin-bottom: 10px;
                color: #fff;
            }
            h3{
                color: #fff;
            }

            .right{
                font-size: 24px;
                color: #fff;

            }
            

            p {
                margin-bottom: 10px;
                text-align: left;
                color: #fff;
                font-size: 16px;

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }

            button {
                a {
                    text-decoration: none;
                    color: #FFF;
                    font-size: 16px;
                    font-weight: 600;            
                    
                }  

                margin-top: 25px;
                border: none;
                background-color: #26CC4C;
                color: #fff;
                width: 100%;
                border-radius: 10px;
                padding: 10px;
                outline: none;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.3s;
                
            }
            button:hover{
                background-color:#16752C;
            }
        }

        .second-card {
            margin-left: 40px;

            @media (max-width: 768px) {
                margin-left: 0px;
                margin-top: 15px;
            }
        }
    }
`;

export const Doubts = styled.div`
    /* background-color: #CA60C6; */
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);
    padding: 10px 50px;
    margin: 0 auto;
    width: 53%;
    border-radius: 20px;

    @media (max-width: 768px){
    width: 73%;
    
    }

    h1 {
        text-align: center;
        color: #FFF;
    }
`;

export const Avaliation = styled.div`
    padding: 30px;
    text-align: center;
    

    h1 {
        text-align: center;
        padding-bottom: 30px;
    }
    
    

    .container-card {
        display: flex;
        justify-content: space-evenly;
        

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
        }

        .card {
            border-radius: 20px;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            width: 30%;
            padding: 20px;
            p{
                text-align: left;
            }


            

            @media (max-width: 768px) {
                margin: 5px auto;
                width: 80%;

                .stars {
                    width: 45%;
                }
            }
        }

        /* .card {
            width: 40%;
            box-shadow: 4px 4px 4px rgba(0,0,0,.25);
            border-radius: 20px;
            padding: 10px 20px;

            @media (max-width: 768px) {
                margin-top: 5px;

                .stars {
                    width: 45%;
                }
            }
        } */
    }
`;