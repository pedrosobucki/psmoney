import { Container } from "./styles";
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    Modal.setAppElement('#root')

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <Container>
                <h2>Create new transaction</h2>

                <input
                placeholder="Title"
                type="text" />

                <input
                placeholder="Value"
                type="number" />

                <input
                placeholder="Category"
                type="text" />

                <button type="submit">Create</button>
            </Container>

      </Modal>
    )
}