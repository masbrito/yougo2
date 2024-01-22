import styled from "styled-components";

export const FooterD = styled.footer`
    width: 100%;

    .superior {
        background-color: #5E0066;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 25px;
        color: #fff;

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }

        .direitaSuperior {
            button {
                background-color: #26CC4C;
                border: none;
                border-radius: 20px;
                padding: 10px 15px;
                margin-top: 10px;
                cursor: pointer;
                transition: bacground-color 0.3s;
            }
            a {
                text-decoration: none;
                color: #FFF;
                font-weight: 600;
            }
        }
        button:hover{
            background-color: #16752C;
        }

        .centroSuperior {
            text-align: center;

            h3 {
                margin-bottom: 10px;
                color: #fff;
            }
            a {
                text-decoration: none;
                color: #fff;
            }

            @media (max-width: 768px) {
                margin-top: 15px;
                margin-bottom: 15px;
            }
        }

        .esquerdaSuperior {
            text-align: center;
            

            h3 {
                margin-bottom: 10px;
                color: #fff;
            }
            p {
                margin-bottom: 5px;
                color: #fff;
            }

            img {
                width: calc(100% / 3);
            }
        }
    }

    .inferior {
        background-color: #D0D0D0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;
        

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }
        p {                    
            color: #5E0066;
        }
        
          
          
    }
`;