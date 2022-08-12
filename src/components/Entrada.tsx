interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  somenteleitura?: boolean
  className?: string
  valorMudou?: (valor: any) => void
}
export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
         <label>
            {props.texto}
         </label>
         <input 
           type={props.tipo ?? 'text'} 
           value = {props.valor}
           readOnly={props.somenteleitura}
           onChange={e =>props.valorMudou?.(e.target.value)}
           className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-100
                px-4 py-2
                ${props.somenteleitura ? '' :' focus:bg-white '}
           `}
           />
          
        </div>
    )
}