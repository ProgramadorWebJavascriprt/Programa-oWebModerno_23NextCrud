import { useState } from "react";
import Cliente from "./core/Cliente";
import Entrada from "./Entrada";
import Botao from './Botao'
import cliente from "./core/Cliente";

interface FormularioProps {
    cliente?: Cliente
    clienteMudou?:(cliente : cliente) =>void
    cancelado?:() => void

}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
   
    return (
        <div>
            {id ? (   
      <Entrada 
      somenteleitura
      texto="Código" 
      valor={id}
      className="mb-4"
      />): false}
    
       <Entrada 
       texto="Nome" 
       valor={nome}
       valorMudou={setNome}
       className="mb-4"
        />
       <Entrada 
       texto="Idade" 
       tipo= "number"
        valor={idade}
        valorMudou={setIdade}
        />
        <div className="flex justify-items-end mt-7">
            <Botao cor="blue" className="mr-5"
            onclick={()=> props.clienteMudou?.(new cliente(nome, +idade, id))}>
               {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao onclick={props.cancelado}>
             Cancelar
            </Botao>
        </div>
    </div> 
    )
}