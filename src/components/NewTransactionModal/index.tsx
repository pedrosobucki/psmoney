import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState } from "react";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [title, setTile] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        console.log({
            title, value, category, type
        })
    }

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

            <Container
            onSubmit={handleCreateNewTransaction}>
                <h2>Create new transaction</h2>

                <input
                placeholder="Title"
                type="text"
                onChange={event => setTile(event.target.value)}/>

                <input
                placeholder="Value"
                type="number"
                onChange={event => setValue(Number(event.target.value))}/>

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
                type="text"
                onChange={event => setCategory(event.target.value)}/>

                <button type="submit">Create</button>
            </Container>

      </Modal>
    )
}