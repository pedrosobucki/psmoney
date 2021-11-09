import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useState } from "react";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [type, setType] = useState('deposit')

    Modal.setAppElement('#root')

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close">
                <img src={closeImg} alt="Close modal"/>
            </button>

            <Container>
                <h2>Create new transaction</h2>

                <input
                placeholder="Title"
                type="text" />

                <input
                placeholder="Value"
                type="number" />

                <TransactionTypeContainer>
                <RadioBox
                type="button"
                onClick={() => setType('deposit')}
                isActive={type==='deposit'}
                activeColor="green">

                    <img src={incomeImg} alt="Deposit" />
                    <span>Deposit</span>

                </RadioBox>

                <RadioBox
                type="button"
                onClick={() => setType('withdraw')}
                isActive={type==='withdraw'}
                activeColor="red">

                    <img src={outcomeImg} alt="Withdraw" />
                    <span>Withdraw</span>

                </RadioBox>
                </TransactionTypeContainer>

                <input
                placeholder="Category"
                type="text" />

                <button type="submit">Create</button>
            </Container>

      </Modal>
    )
}