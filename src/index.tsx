import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model, Server} from 'miragejs';
import {App} from './App';

createServer({
  
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website development',
          type: 'deposit',
          category: 'Job',
          ammount: 1500,
          createdAt: new Date('2021-11-09 09:00:00')
        },

        {
          id: 2,
          title: 'Appartment Rent',
          type: 'withdraw',
          category: 'Home',
          ammount: 600,
          createdAt: new Date('2021-11-18 09:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
