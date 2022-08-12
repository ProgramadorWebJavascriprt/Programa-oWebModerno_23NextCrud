// terça-feira, 19/07/2022 as 14:57:10 h +|-
import cliente from './core/Cliente'
import { IconeEditcao, IconeLixo } from './Icones';
interface tabelaprops {
    clientes: cliente[]
    clienteSelecionado?:(cliente: cliente) => void
    clienteExcluido?:(cliente: cliente) => void

}

export default function tabela(props: tabelaprops) {
    const exibirAcoes = props.clienteExcluido ||  props.clienteSelecionado
    function renderizarCabecalho(){
      return( <tr>
        <th className="text-left p-4"> Código </th>
        <th className="text-left p-4" > Nome </th>
        <th className="text-left p-4" > Idade </th>
        {exibirAcoes ? <th className=" p-4" > Ações </th> : false}
       
    </tr>
    ) 
    }
    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                 className = {`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100 '}` }
                >
                    <td className="text-left p-4">{cliente.id} </td>
                    <td className="text-left p-4">{cliente.nome} </td>
                    <td className="text-left p-4">{cliente.idade} </td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })

    }
    function renderizarAcoes(cliente: cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado?(
                     <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center 
                        text-green-600 rounded-full   p-2 m-1
                        hover:bg-purple-50
                    
                           `}>
                    {IconeEditcao}
                 </button  > ):false}
                 {props.clienteExcluido?(
                 <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center 
                        text-red-500 rounded-full   p-2 m-1
                        hover:bg-purple-50
                    
                           `}>
                        {IconeLixo}
                    </button>) : false}
                    
            </td>
        )
    }
    return(
        <table  className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800`}>    
                { renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )

}