import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { PdfContainer } from '../PdfViewer/styles.js';
// PDFs
import Cafe from '../ProofReading/ebooks/Cafe-da-manha-Receitas-fitness.pdf';
import ComoAprender from '../ProofReading/ebooks/Como-Aprender-Ingles-Com-Musicas.pdf';
import ComoSuperar from '../ProofReading/ebooks/Como-superar-a-ansiedade.pdf';
import Detox from '../ProofReading/ebooks/Detox-Natural.pdf';
import DicasSaude from '../ProofReading/ebooks/Dicas-de-Saude-Comprovadas-PT.pdf';
import Meditacao from '../ProofReading/ebooks/Meditacao-para-uma-vida-cotidiana.pdf';
import Mindset from '../ProofReading/ebooks/Mindset.pdf';

// Set up the workerSrc for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const { pdfName } = useParams();
  const pdfFiles = {
    Cafe,
    ComoAprender,
    ComoSuperar,
    Detox,
    DicasSaude,
    Meditacao,
    Mindset,
  };
  
  const pdfUrl = pdfFiles[pdfName];
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const canvasRefs = useRef([]); // Para armazenar referências a múltiplos canvases

  useEffect(() => {
    const loadPdf = async () => {
      if (pdfUrl) {
        try {
          const loadingTask = pdfjsLib.getDocument(pdfUrl);
          const pdf = await loadingTask.promise;
          setPdfDoc(pdf);
          setNumPages(pdf.numPages);
        } catch (err) {
          setError('Falha ao carregar o arquivo PDF.');
          console.error(err);
        }
      }
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    const renderPdfPages = async () => {
      if (pdfDoc) {
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdfDoc.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.5 });
          
          // Cria um novo canvas para cada página
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise; // Aguarda a renderização ser concluída
          canvasRefs.current[pageNum - 1] = canvas; // Armazena o canvas

          // Adiciona o canvas ao contêiner
          document.getElementById('pdfContainer').appendChild(canvas);
        }
      }
    };

    renderPdfPages();
  }, [pdfDoc, numPages]);

  if (!pdfUrl) {
    return <div>PDF não encontrado</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <PdfContainer id="pdfContainer">
        {/* Os canvases serão renderizados aqui */}
      </PdfContainer>
      <Footer />
    </div>
  );
}
