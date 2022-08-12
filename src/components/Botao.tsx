interface Botaoprops {
     cor?:'green' | 'blue' | 'gray'
     className?: string
     children:  any
     onclick: () => void
}
export default function Botao(props: Botaoprops) {
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onclick} className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4  py-2 rounded-md 
        ` } >
            {props.children}
        </button>
    )
}
 