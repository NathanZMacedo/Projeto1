import Pessoa from "./Pessoa";

function ListaDePessoas ({dados}){
    return(
        <>
            <div className="lista">

            { dados.map(pessoa =>
                <Pessoa  
                pessoa={pessoa}
                />
                ) }
            </div>
        </>
    )
}
export default ListaDePessoas;