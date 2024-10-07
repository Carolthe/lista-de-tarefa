import { useState } from "react"

export default function Lista (){
    const [listaTarefa, setListaTarefa] = useState([])
    const [valorInput, setValorInput] = useState ("")

    function changeInput (ev){
        setValorInput(ev.target.value)
    }
    function clickButton (){
        if(valorInput.trim() === ""){
            alert("O campo de tarefa não pode estar vazio.")
            return
        }
        setListaTarefa([...listaTarefa, valorInput])
        setValorInput("")
    }

    function removerTarefa (tarefaParaRemover){
        setListaTarefa(listaTarefa.filter(tarefa => tarefa !== tarefaParaRemover))
    }
    return(
        <div>
            <input
            placeholder="Escreva sua terefa.."
            onChange={changeInput}
            value={valorInput}
            type="text" />
            <button
            onClick={clickButton}
            >Adicionar</button>
        {listaTarefa.map((tarefa) => (
           <p>{tarefa} <button
            onClick={()=> removerTarefa(tarefa)}>X</button> </p>
        ))}
            
        </div>
    )
}