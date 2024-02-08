import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Modal, Proposal, How, Plans, Doubts, Avaliation, Text } from "./styles";

// import { Books } from "@styled-icons/icomoon/Books";
// import { HeadphonesSoundWave } from "@styled-icons/fluentui-system-filled/HeadphonesSoundWave";
// import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
// import { RateReview } from "@styled-icons/material-sharp/RateReview";

import Audiobook from "./assets/Audiobook-amico.png";
import Course from "./assets/Course.png";
import Ebook from "./assets/Ebook.png";
import Imagination from "./assets/Imagination.png";
import Livros from "./assets/livros.png";
import Voucher from "../../assets/voucher.PNG";
import Mockupbanner from "../../assets/mockupbanner.png";
import Mockupcelular from "../../assets/mockupcllr.png";



import Mockup from "../../assets/mockupmao.png";
import star_icon from "../../assets/star_icon.png";
import client from "../../assets/novacliente.png";
import clientSecond from "../../assets/novacliente1.png";
import Experiencia from '../../assets/experiencia.png';
import Experienciatwo from '../../assets/experiencia2.png';

import CardDropdownComp from "../../components/CardDropdown/CardDropdown";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { motion, useAnimation } from 'framer-motion';
import capa1 from '../../assets/capa1.png';
import capa2 from '../../assets/capa2.png';
import capa3 from '../../assets/capa3.png';
import capa4 from '../../assets/capa4.png';
import capa5 from '../../assets/capa5.png';
import capa6 from '../../assets/capa6.png';

//register();
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState, useEffect, useRef} from 'react';

import Tablet from '../../assets/tablet.png';
import Bittrainners from '../../assets/bittrainners.png';
import Supercomics from '../../assets/supercomics.png';
import Logo from '../../assets/logoyougo.png';





const capas = [capa1, capa2, capa3, capa4, capa5, capa6]


export default function Home() {

    const carousel = useRef();
    const controls = useAnimation();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Calcula a largura total do carrossel
        const totalWidth = carousel.current?.scrollWidth - carousel.current?.offsetWidth;
    
        // Inicia a animação com autoplay
        const startAutoplay = async () => {
          while (true) {
            await controls.start({ x: -totalWidth });
            await controls.start({ x: 0 });
          }
        };
    
        setWidth(totalWidth);
        startAutoplay();
      }, [controls]);
      
      const [isHovered, setIsHovered] = useState(false);

    return (
        <Container>
            <Header />
            <Modal>                
                    {/*<img src={VectorYouGo} alt="Vetor YouGO"/>*/}
                    {/* <div>
                    <h1>Desfrute conhecimento ilimitado</h1>
                    <p>Tenha acesso a um acervo digital com +6000 conteúdos!</p>
    </div>   */}        
                
               {/*} <button><a href="/contact">EU QUERO!</a></button>*/}

            </Modal>
            <Text>
            
            <div className="swiper">
            <h1>Desfrute conhecimento ilimitado</h1>
            <p>Tenha acesso a um acervo digital com +10.000 conteúdos!</p>
                    <Swiper className='slide'

                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{ delay: 4000 }}
                    >
                        <SwiperSlide>
                            <img src={Livros} alt="Livros" className='item' />
                        </SwiperSlide>                        

                       
                       <SwiperSlide
                       className={isHovered ? 'custom-slide hover' : 'custom-slide'}
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}
                       >
                        <a href='/password'>
                            <img src={Voucher} alt="Livros" className='item'/>
                        </a>
                        </SwiperSlide>
                      

                        <SwiperSlide>
                            <img src={Mockupbanner} alt="Livros" className='item'/>
                        </SwiperSlide>


                        
                    </Swiper>
                </div>
                
            </Text>




            <Proposal>
                <p><i>Bem vindo a YouGo!</i></p>
                <h1>Tenha uma <span style={{ color: "#9300A0" }}>experiência única de aprendizado</span> com o nosso APP!</h1>

                {/*<div className='experiencia'>
                    <img src={Experiencia} alt="Audiobook" className="icon" />
                    <img src={Experienciatwo} alt="Audiobook" className="icon2" />
                </div>*/}
                <img src={Mockupcelular} alt="Audiobook" className="mockup" />

                <div className="icons">
                    <div className="card-text">
                        <img src={Ebook} alt="Ebook" className="icon"/>
                        <h3>+8500<br></br> E-BOOKS</h3>
                    </div>
                    <div className="card-text">
                        <img src={Audiobook} alt="Audiobook" className="icon"/>
                        <h3>+ 1000<br></br>AUDIOLIVROS</h3>
                    </div>
                    <div className="card-text">
                        <img src={Course} alt="Cursos" className="icon" />
                        <h3>+450<br></br>CURSOS</h3>
                    </div>
                    <div className="card-text">
                        <img src={Imagination} alt="Imaginação" className="icon" />
                        <h3>+1200<br></br>RESENHAS</h3>
                    </div>
                </div>
            </Proposal>


            <How>
                <h1>Como funciona ?</h1>
                <div className="texts">
                    <div className="text">
                        <h2>1.</h2>
                        <h3>Assine o nossos plano</h3>
                        <p>Escolha o plano visitando um dos nossos pontos de venda</p>
                    </div>
                    <div className="text">
                        <h2>2.</h2>
                        <h3>Baixe nosso aplicativo</h3>
                        <p>Acesse a loja de aplicativos do seu celular e baixe o nosso APP</p>
                    </div>
                </div>
                <div className="texts">
                    <div className="text">
                        <h2>3.</h2>
                        <h3>Faça o login</h3>
                        <p>Entre com o seu usuário e senha</p>
                    </div>
                    <div className="text">
                        <h2>4.</h2>
                        <h3>Acesse o melhor conteúdo</h3>
                        <p>Ouça e leia resenhas, aprenda uma nova habilidade com os nossos cursos e ebooks</p>
                    </div>
                </div>

                
            </How>
            <Text>
                <div className='carrosel'>

                    <motion.div ref = {carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                        <motion.div className='inner'
                        drag='x'
                        dragConstraints={{right: 0, left: - width }}
                        initial={{x: 100}}
                        animate={controls}
                        transition={{ duration: 30, type: 'tween', ease: 'linear' }}                      
                        >
                            {capas.map(image => (
                                <motion.div className='item' key={image}>
                                    <img src={image} alt='texto alt'></img>

                                </motion.div>
                            ))}

                        </motion.div>

                    </motion.div>
                </div>
            </Text>
            

            <Plans>
                <h1 className="title">Conhecimento digital para o mundo real!</h1>
                <div className="container">
                    {/*<div className="card second-card">
                        <h3>Plano Semestral</h3>
                        <h2>6x</h2>
                        <h1>R$ 129,90</h1>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Acesso ao conteúdo por 6 meses.</p>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Suporte especializado.</p>
                        
    </div>*/}
                    <div className="card">
                        <h3>PLANO SEMESTRAL</h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>69,90</h1>
                            <span className='right'>/Mês</span>
                    </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 6 meses.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                        {/*<button><a href="/contact">EU QUERO!</a></button>*/}
                    </div>

                    <div className="card">
                        <h3>PLANO ANUAL</h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>79,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 1 ano.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                       {/*<button><a href="/contact">EU QUERO!</a></button>*/}
                    </div>

                    <div className="card">
                        <h3>18 MESES</h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>89,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 18 meses.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                       {/*<button><a href="/contact">EU QUERO!</a></button>*/}
                    </div>
                    <div className="card">
                        <h3>PLANO BIANUAL</h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>99,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 2 anos.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                       {/*<button><a href="/contact">EU QUERO!</a></button>*/}
                    </div>

                </div>
            </Plans>
            <Text>
                <div className='voucher'>

                <div className='tablet'>
                <h1>
                Bônus<br></br>+1 app 
                </h1>
                {/*<button><a href="/PasswordForProof">GRÁTIS!</a></button> */}           
                <img src={Tablet} alt="Tablet" className='imgtablet' />
                </div>

                <div className='parceiros'>
                <img src={Supercomics} alt="Supercomics" />
                <img src={Bittrainners} alt="Bittrainners" />
                <img src={Logo} alt="You Go" />

                </div>
               


                </div>
                
            </Text>

            <Doubts>
                <h1>Dúvidas</h1>
                <CardDropdownComp title={"O que é a You Go?"} description={"Somos um super aplicativo para te impulsionar a ir mais longe. Nosso objetivo é ver você aprimorando as suas habilidades. Para isso reunimos vários cursos na nossa plataforma, resenhas dos livros mais aclamados do mundo, para você ler e ouvir de onde estiver, e um compilado de e-books incríveis ao alcance da sua mão."} />
                <CardDropdownComp title={"Como tenho acesso a You Go?"} description={"Assine o plano visitando uma de nossas lojas. Entre com seu usuário utilizando a opção You Go como parceiro. Acesse a loja de aplicativos do seu celular e baixe os APPs. Leia livros, revistas, quadrinhos e pratique os melhores treinos."} />
                <CardDropdownComp title={"Por que eu devo assinar a You Go?"} description={"Porque nós vamos te ajudar a chegar no seu objetivo: Ser produtivo e ser independente para aprender novas habilidades de qualquer lugar do mundo. Tempo é vida! E é isso que queremos que você tenha."} />
                <CardDropdownComp title={"Como funciona nossos planos?"} description={"Por apenas R$: 98,90 mensais você tem acesso a todo o conteúdo por 1 ano e suporte especializado."} />
            </Doubts>

            <Avaliation>
                <h1>Avaliações de Clientes</h1>
                <div className="container-card">
                    <div className="card">
                        <img src={client} alt="Cliente" />
                        <h2>Julia</h2>
                        <h3>Assinante a 6 meses.</h3>
                        <img className="stars" src={star_icon} alt="Estrelas" />
                        <p> Impressionante como a plataforma é dinâmica e fácil de usar. Consigo consumir muito conteúdo em pouquissímo tempo. Já aprendi várias habilidades com os cursos e estou amando! </p>
                    </div>
                    <div className="card">
                        <img src={clientSecond} alt="Cliente" />
                        <h2>Victor</h2>
                        <h3>Assinante a 1 ano.</h3>
                        <img className="stars" src={star_icon} alt="Estrelas" />
                        <p> Eu sou apaixonado pelas resenhas críticas, a facilidade de ouvir de qualquer lugar me encantou! Encontro resenha de vários best sellers que estavam na minha lista de livros, porém não conseguia ler por falta de tempo!</p>
                    </div>
                </div>


            </Avaliation>

            <Footer />
        </Container>
    );
};