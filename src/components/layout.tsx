import Titulo from "./Titulo";
interface LayoutProps{
    titulo: string;
    children: any;

}

// terça-feira, 19/07/2022 as 13:47:35 h +|-
export default function Layout(props: LayoutProps) {
    return (
        <div className={`
              flex  flex-col w-2/3
              bg-white text-gray-800 rounded-md
        `}> 
         <Titulo> {props.titulo} </Titulo>
        <div className="p-6 m-3">
      {props.children}

 </div>

        </div>

    )
}