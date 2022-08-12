import { useEffect, useInsertionEffect, useState } from 'react';
import Layout from '../components/layout';
import Tabela from '../components/Tabela';
// import Titulo from '../components/Titulo';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
// import Cliente from '../components/core/Cliente';
// import ClienteRepositorio from '../components/core/ClienteRepositório';
// import ColecaoCliente from '../backend/bd/ColecaoCliente';
import useClientes from '../hooks/useClientes';

export default function Home() { 
 
const { 
      cliente,
      clientes,
      novoCliente,
      salvarCliente, 
      SelecionarCliente, 
      excluirCliente, 
      tabelaVisivel,
      exibirTabela
     } = useClientes()


  return (
    <div className =   {`flex h-screen
       justify-center items-center
       bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600 ` }
    >
      <Layout titulo="Cadastro Simples">
        a{ tabelaVisivel? (
        <>
        <div className="flex justify-items-end">
        <Botao cor="green" className="mr-7 " 
        onclick ={novoCliente}> novo cliente </Botao> 
        </div>      
        <Tabela clientes={clientes}
        clienteSelecionado={SelecionarCliente} 
        clienteExcluido={excluirCliente}/> 
      </>) :(  <Formulario cliente={cliente}
                clienteMudou={salvarCliente}
                 cancelado={exibirTabela}                  
      />) }
        

       </Layout>
    </div>
  )
}
