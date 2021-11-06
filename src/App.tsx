import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
    console.log('open')

  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
    console.log('close')

  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>

        <h2>Create new transaction</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}