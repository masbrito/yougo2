import React, { useState } from "react";
// import Header from "../../components/Header/Header";
import { Container, Password } from "./styles";
import { useNavigate, Link } from "react-router-dom";

export default function PasswordCard() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleButton = () => {
        if (password === 'yougo') {
            navigate('/proof-reading');
        } else {
            alert('Senha inválida!');
        }
    }

    return(
        <Container>
            {/* <Header/> */}
            <Password>
                <div className="card">
                    <h1>Bem vindo!</h1>
                    <p>Entre com a senha que lhe informaram.</p>
                    <input type="password" placeholder="ENTRAR COM A SUA SENHA" onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleButton}>ACESSAR</button>
                    <Link to="/">Voltar para o Início</Link>
                </div>
            </Password>
        </Container>
    );
}