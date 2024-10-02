import styled from "styled-components";

export const PdfContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; /* Permite rolagem vertical */
  background-color: white; /* Pode mudar conforme seu design */
  padding: 10px; /* Espaço em volta do PDF */
  
  canvas {
    max-width: 100%;
    height: auto; /* Isso manterá a proporção do canvas */
    margin-bottom: 20px; /* Espaço entre as páginas */
  }
`;
