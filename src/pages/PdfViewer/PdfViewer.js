import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Cafe from "../ProofReading/ebooks/Cafe-da-manha-Receitas-fitness.pdf"
import ComoAprender from "../ProofReading/ebooks/Como-Aprender-Ingles-Com-Musicas.pdf"
import ComoSuperar from "../ProofReading/ebooks/Como-superar-a-ansiedade.pdf"
import Detox from "../ProofReading/ebooks/Detox-Natural.pdf"
import DicasSaude from "../ProofReading/ebooks/Dicas-de-Saude-Comprovadas-PT.pdf"
import Meditacao from "../ProofReading/ebooks/Meditacao-para-uma-vida-cotidiana.pdf"
import Mindset from "../ProofReading/ebooks/Como-Aprender-Ingles-Com-Musicas.pdf"

export default function PdfViewer() {
  const { pdfName } = useParams();

  const pdfFiles = {
    Cafe: Cafe,
    ComoAprender: ComoAprender,
    ComoSuperar: ComoSuperar ,
    Detox: Detox,
    DicasSaude: DicasSaude ,
    Meditacao: Meditacao,
    Mindset: Mindset,
  };

  const pdfUrl = pdfFiles[pdfName];

  if (!pdfUrl) {
    return <div>PDF não encontrado</div>;
  }

  return (
    <div>
      <Header />
      <div style={{ height: "100vh" }}>
        <iframe
          src={pdfUrl}
          title={""}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
      <Footer />
    </div>
  );
}
