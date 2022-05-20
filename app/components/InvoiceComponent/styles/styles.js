import styled from 'styled-components';

const InVoiceBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  z-index: 999999999;
  opacity: 0.6;
`;
const InvoiceWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  margin: 35px 15px 35px 15px;
  padding: 20px;
  max-height: 95vh;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 9999999999;
`;
const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const TableChildTitle = styled.div`
  padding: 10px;
  flex: 0.7;
`;
const TableChildAmount = styled.div`
  padding: 10px;
  flex: 0.15;
`;
const SpacerTop = styled.div`
  margin-top: 20px;
`;
const CloseModalButton = styled.button`
  right: 0;
  border-radius: 50px;
  border: 0;
  background-color: grey;
  position: fixed;
  margin-right: 25px;
  margin-top: -10px;
  color: white;
  cursor: pointer;
`;

export {
  InvoiceWrapper,
  TableWrapper,
  TableChildAmount,
  SpacerTop,
  CloseModalButton,
  InVoiceBackground,
  TableChildTitle,
};
