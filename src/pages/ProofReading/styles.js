import styled from "styled-components";

export const Container = styled.div`
    /* color: #606060; */
`;

export const Destribution = styled.div`
    background-image: linear-gradient(to bottom, #9300A0, #CB20DA);

    .audio-container {
        position: relative;
        display: inline-block; /* Isso garante que o áudio não quebrará para a próxima linha */
    }
    
    .play-pause-button {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        color: #fff;
        border: none;
        border-radius: 50%;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
    }
    .audio-element {
        display: none; /* Esconda o elemento de áudio */
    }
    
    

    .text-sup {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 20px;     

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }

        img {         
            width: 20%;
            border-radius: 15px;     

            @media (max-width: 768px) {
                width: 50%;
                padding: 10px;
            }
        }

        h2 {
            color: #FFF;
        }
    }

    .card-container {
        padding: 5px 0px;

        .card-player {
            margin: 5px auto;
            background-color: #FFF;
            padding: 10px;
            width: 30%;
            text-align: center;
            border-radius: 20px;

            @media (max-width: 768px) {
                width: 70%;
            }
        }
    }

    .container {
        width: 90%;
        margin: 0 auto;
        text-align: center;

        img {
            margin: 10px 5px;
            border-radius: 15px;
        }
    }
`;