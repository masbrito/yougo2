
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Texts, Cards, Forms, Images } from "./styles";
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import Adress_Rafiki from "./assets/Address_Rafiki.png";
import Address from "./assets/Address.png";
import CellPhone from "./assets/CellPhone.png";
import Mail from "./assets/Mail.png";

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [message, setMessage]= useState('')

    const handleSignupForm = (e)=>{
        e.preventDefault();
        if(name === '' || email === '' || message=== ''){
            alert("Preencha todos os campos!");
            return;
        }
        const templateParams = {
            from_name: name,
            email: email,
            message: message
            
        }
        emailjs.send("service_hh5kbqp", "template_at0iidg", templateParams,"jUife1aLvluFfZ4Gz")
    .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')

    }, (erro) => {
        console.log("ERRO: ", erro)
    })
    }
  
    return(
        <Container>
            <Header />

                <Texts>
                    <h1>Entre em Contato</h1>
                    <p>Tire suas dúvidas com nossa equipe especializada em tornar o seu atendimento rápido e prático.</p>
                </Texts>

                <Cards>
                    <div className="card">
                        {/* <ShareLocation className="icon"/> */}
                        <img src={Adress_Rafiki} alt="Adress" className="icon"/>
                        <p>Edifício Cirilo Rio, 3º andar<br/>
                        Campina - Rua Senador Manoel<br/>
                        Barata, 925 - Belém/PA.</p>
                    </div>
                    <div className="card">
                        {/* <Phone className="icon"/> */}
                        <img src={CellPhone} alt="Cell Phone" className="icon"/>
                        <p>(11) 91555-5376</p>
                    </div>
                    <div className="card">
                        {/* <Email className="icon"/> */}
                        <img src={Mail} alt="Mail" className="icon" />
                        <p>atendimentoaocliente@yougoapp.com.br</p>
                    </div>
                </Cards>

                <Forms onSubmit={handleSignupForm}>
                    <div className="card">
                        <h2>Formulário de Contato</h2>
                        <div className="info">

                            <input 
                            type="text" 
                            placeholder="Seu Nome ..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />

                            <input 
                            type="email" 
                            placeholder="Seu Email ..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            
                            
                        </div>
                        <div className="textarea">
                            <textarea id="w3review" name="w3review" rows="4" cols="90"                            
                            placeholder="Deixe um comentário ..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            /> <br/>
                            </div>
                        
                        
                        <button onClick={handleSignupForm} type="submit"> ENVIAR </button>
                    </div>
                </Forms>

                <Images>
                    <div className="text">
                        <div className="major">
                            <h1>Aeroporto Santos Dumont Rio de Janeiro</h1>
                            <p>Stand 1 - térreo do aeroporto, ao lado do check in da azul linhas aéreas.</p>
                            <p>Stand 2 - corredor do aeroporto no segundo andar próximo a entrada do embarque doméstico.</p>
                        </div>
                        <div className="major">
                            <h1>Aeroporto de Belém</h1>
                            <p>Stand 1 - área externa na frente do check in das companhias aéreas.</p>
                            <p>Stand 2 - área restrita do aeroporto, ao lado do portão de embarque 4.</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="major-second">
                            <h1>Aeroporto Congonhas de São Paulo</h1>
                            <p>Stand 1 - Saguão principal - Embaixo da escada rolante.</p>
                        </div>
                        <div>
                            <img src={Address} alt="Address" className="image" />
                        </div>
                    </div>
                </Images>

            <Footer />
        </Container>
    );
};