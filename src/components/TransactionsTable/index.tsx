import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from '../../services/api'

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    ammount: number,
    createdAt: Date
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() =>{
        
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))

    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (

                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>R${transaction.ammount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>

                        )
                    )}
                </tbody>
            </table>
        </Container>
    )
}