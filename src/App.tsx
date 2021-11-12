import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import {NewTransactionModal} from './components/NewTransactionModal/index';
import {TransactionsProvider } from "./TransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}