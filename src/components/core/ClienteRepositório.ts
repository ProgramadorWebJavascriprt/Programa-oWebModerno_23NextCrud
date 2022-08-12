import cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(cliente: cliente): Promise<cliente>
    excluir(cliente: cliente): Promise<void>
    obterTodos(): Promise<cliente[]>


}