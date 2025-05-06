import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Proposal, How, Plans, Doubts, Avaliation, Text } from "./styles";

import Audiobook from "./assets/Audiobook-amico.png";
import Course from "./assets/Course.png";
import Ebook from "./assets/Ebook.png";
import Imagination from "./assets/Imagination.png";
import Livros from "./assets/livros.png";
import Voucher from "../../assets/voucher.PNG";
import Mockupbanner from "../../assets/mockupbanner.png";
import Mockupcelular from "../../assets/mockupcllr.png";

import star_icon from "../../assets/star_icon.png";
import client from "../../assets/novacliente.png";
import clientSecond from "../../assets/novacliente1.png";

import CardDropdownComp from "../../components/CardDropdown/CardDropdown";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { motion, useAnimation } from 'framer-motion';
import capa1 from '../../assets/capa1.png';
import capa2 from '../../assets/capa2.png';
import capa3 from '../../assets/capa3.png';
import capa4 from '../../assets/capa4.png';
import capa5 from '../../assets/capa5.png';
import capa6 from '../../assets/capa6.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade  } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useRef } from 'react';
import { ListCircle } from "styled-icons/ionicons-sharp";
import { Type } from "styled-icons/bootstrap";

const capas = [capa1, capa2, capa3, capa4, capa5, capa6]

export default function Home() {

    const carousel = useRef();
    const controls = useAnimation();
    const [width, setWidth] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container>
            <Header />
            <Text>
                <div className="swiper">
                    <h1>Desfrute conhecimento ilimitado</h1>
                    <p>Tenha acesso a um acervo digital com +10.000 conteúdos!</p>
                    <Swiper 
                        className='slide'
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        modules={[Autoplay, Pagination, EffectFade]}
                        speed={2000}
                        

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
                                <img src={Voucher} alt="Livros" className='item' />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Mockupbanner} alt="Livros" className='item' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Text>

            <Proposal>
                <p><i>Bem vindo a YouGo!</i></p>
                <h1>Tenha uma <span style={{ color: "#9300A0" }}>experiência única de aprendizado</span> com o nosso APP!</h1>
                <img src={Mockupcelular} alt="Audiobook" className="mockup" />

                <div className="icons">
                    <div className="card-text">
                        <img src={Ebook} alt="Ebook" className="icon" />
                        <h3>+12.000<br></br> E-BOOKS</h3>
                    </div>
                    <div className="card-text">
                        <img src={Audiobook} alt="Audiobook" className="icon" />
                        <h3>+ 1.600<br></br>AUDIOLIVROS</h3>
                    </div>
                    <div className="card-text">
                        <img src={Course} alt="Cursos" className="icon" />
                        <h3>+1.000<br></br>CURSOS</h3>
                    </div>
                    <div className="card-text">
                        <img src={Imagination} alt="Imaginação" className="icon" />
                        <h3>+2.000<br></br>RESENHAS</h3>
                    </div>
                </div>
            </Proposal>

            <How>
                <h1>Como funciona ?</h1>
                <div className="texts">
                    <div className="text">
                        <h2>1. Contrate nosso plano</h2>
                        <p>Visite um dos nossos pontos de venda. Após a contratação do plano escolhido, durante o período contratado, você terá acesso a todos os conteúdos do aplicativo no seu celular, 
                        bastando para isso estar conectado à internet.</p>
                    </div>
                    <div className="text">
                        <h2>2. Baixe nosso aplicativo</h2>
                        <p>Acesse a loja de aplicativos do seu celular e baixe o aplicativo da YouGo.</p>
                    </div>
                </div>
                <div className="texts">
                    <div className="text">
                        <h2>3. Faça o login</h2>
                        <p>Entre com seu usuário e senha.</p>
                    </div>
                    <div className="text">
                        <h2>4. Acesse o conteúdo</h2>
                        <p>Explore diversas categorias, descubra novos títulos e aproveite sua biblioteca onde e quando quiser.</p>
                    </div>
                </div>
            </How>

            <Text>
                <div className='carrosel'>
                    <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                        <motion.div className='inner'
                            drag='x'
                            dragConstraints={{ right: 0, left: - width }}
                            initial={{ x: "100%" }}
                            animate={{ x: "-100%" }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear"
                                }
                            }}
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
                    <div className="card">
                    <h3></h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>79,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 1 ano.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                    </div>

                    <div className="card">
                        <h3></h3>
                        <div className="promocao">
                            <p style={{ fontSize: "20px" }}><s>de R$:239,90</s></p>
                        </div>
                        <div className='left'>
                            <span className='currency'>por R$:</span>
                            <h1 className='center'>89,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 1 ano e 3 meses.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                    </div>

                    <div className="card">
                        <h3></h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>99,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 18 meses.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                    </div>
                    <div className="card">
                        <h3></h3>
                        <div className='left'>
                            <span className='currency'>R$:</span>
                            <h1 className='center'>119,90</h1>
                            <span className='right'>/Mês</span>
                        </div>

                        <p><Check width="30px" style={{ color: "#fff" }} />Acesso por 2 anos.</p>
                        <p><Check width="30px" style={{ color: "#fff" }} />Suporte especializado.</p>
                    </div>
                </div>
            </Plans>

            <Text>
                <div className="precoprodutos">

                    <ul className="lista">
                        <li>Garrafa térmica R$:79,90</li>
                        <li>Fone de ouvido R$:239,90</li>
                        <li>Copo térmico R$:79,90</li>
                        <li>Caixa de som R$:149,90</li>
                        <li>Mochila R$:299,90</li>
                    </ul>
                </div>
            </Text>

            <Doubts>
                <h1>Dúvidas</h1>
                <CardDropdownComp title={"O que é a You Go?"} description={"Somos um super aplicativo para te impulsionar a ir mais longe. Nosso objetivo é ver você aprimorando as suas habilidades. Para isso reunimos vários cursos na nossa plataforma, resenhas dos livros mais aclamados do mundo, para você ler e ouvir de onde estiver, e um compilado de e-books incríveis ao alcance da sua mão."} />
                <CardDropdownComp title={"Como tenho acesso a You Go?"} description={"Assine o plano visitando uma de nossas lojas. Acesse a loja de aplicativos do seu celular e baixe o App My Book. Leia livros, ouça os audiobooks, leia as resenhas e aproveite."} />
                <CardDropdownComp title={"Por que eu devo assinar a You Go?"} description={"Porque nós vamos te ajudar a chegar no seu objetivo: Ser produtivo e ser independente para aprender novas habilidades de qualquer lugar do mundo. Tempo é vida! E é isso que queremos que você tenha."} />
                {/*<CardDropdownComp title={"Como funciona?"} description={"Após a contratação do plano escolhido, você terá acesso a todos os conteúdos do aplicativo no seu celular, com conexão à internet, sem custo adicional durante o período contratado. Explore diversas categorias, descubra novos títulos e aproveite sua biblioteca onde e quando quiser."} /> */}
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