
import Cliente from '../components/core/Cliente';
import ClienteRepositorio from '../components/core/ClienteRepositório';
import ColecaoCliente from '../backend/bd/ColecaoCliente';
import { useEffect, useState } from 'react';
import useTabelaOrform from './useTabelaOrform';

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()
    const {tabelaVisivel,exibirTabela,exibirFormulario,} = useTabelaOrform()  
    const [cliente, setCliente] = useState<Cliente> (Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]> ([])
    //  const [visivel, setVisivel] = useState <'tabela' | 'form'>('tabela')
    // const clientes = [
    //   // new Cliente ('Luis Carlos ', 39, '1'),
    //   // new Cliente ('Jean Cardoso', 28, '2'),
    //   // new Cliente ('Lucas Camargo', 21, '3'),
    //   // new Cliente ('Andre Luis', 40, '4')
    // ]
    useEffect(obterTodos, []) 
     function obterTodos(){
      repo.obterTodos().then(() => {
        setClientes(clientes)
       exibirTabela()
      }
      )
     } 
     function SelecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario()
    }
    function novoCliente(cliente: Cliente) {
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
     async function excluirCliente(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
  
     }
    async function salvarCliente(cliente : Cliente) {
     await repo.salvar(cliente)
      obterTodos()
     }
     return(
        {
        tabelaVisivel,
         cliente,
         clientes,
         novoCliente,
         salvarCliente,
         excluirCliente,
         SelecionarCliente,
         obterTodos,
         exibirTabela
        }
     )
}