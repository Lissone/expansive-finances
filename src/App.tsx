import { useState } from 'react'

import Modal from 'react-modal'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}