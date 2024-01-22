import styled from "styled-components";

export const HeaderD = styled.header`
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5E0066;
    padding: 0px 0px;
    font-weight: 400; 
       
    @media (max-width: 768px) {
        flex-direction: column; 
        width: 100%;
        margin: 0 auto;
        align-items: center;       
                 
    }

    img {
        width: 15%;
        height: auto;
        padding: 0px 0px;
    
        @media (max-width: 768px) {
            width: 40%;
            height: auto;
            margin: 0 auto;
        }
    }
    

    .links {
        @media (max-width: 768px) {
            width: 100%;
            display: flex;            
            flex-direction: row;
            justify-content: center;
            text-align: center;
            align-items: center;
            background-color: #fff;
            font-size: 14px;
            font-weight: 500;
            padding: 10px 0px;         
            
                        
        }
    }

    .links a {
        color: #FFF;
        text-decoration: none;
        font-size: 14;
        position: relative;
        padding: 0 10px;
        

        @media (max-width: 768px) {
            color: #5E0066 
                 
                
        }
    }
    .links a::after {
        content: "";
        position: absolute;
        background-color: #FFF;
        height: 3px;
        border-radius: 10px;
        width: 0;
        bottom: -10px;
        left: 0;
        transition: 0.3s;
    }
    .links a:hover::after {
        width: 100%;
    }
`;