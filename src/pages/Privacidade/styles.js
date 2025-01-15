import styled from "styled-components";

export const Container = styled.div`
    color: #606060;
`;

export const Image = styled.div`
    img {
        margin: 10px 0px;
        width: 100%;
        height: 100%;
    }
`;

export const Describe = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: justify;

    h1 {
        padding: 10px 0px;
    }

    h1::after {
        content: "";
        width: 50px;
        height: 5px;
        background-color: #CA60C6;
        border-radius: 10px;
        display: block;
    }

    p {
        padding: 10px 0px;
    }
`;