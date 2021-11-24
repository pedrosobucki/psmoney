import {createContext, useState, useEffect, ReactNode} from 'react'
import {api} from './services/api'

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    ammount: number,
    createdAt: Date
}

type Transactioninput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[],
    createTransaction: (transaction: Transactioninput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({children} : TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() =>{
        
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))

    }, [])

    function createTransaction(transaction : Transactioninput){

        api.post('/transactions', transaction)
    
    }

    return (<TransactionsContext.Provider value={{transactions, createTransaction}}>
        {children}
    </TransactionsContext.Provider>)
}