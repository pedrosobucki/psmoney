import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() =>{
        fetch("https:localhost:3000/api/transactions")
            .then(response => response.json())
            .then(data => console.log(data))
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
                    <tr>
                        <td>Website development</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Development</td>
                        <td>06/11/2021</td>
                    </tr>

                    <tr>
                        <td>Rent</td>
                        <td className="withdraw">- R$1.000,00</td>
                        <td>House</td>
                        <td>02/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}