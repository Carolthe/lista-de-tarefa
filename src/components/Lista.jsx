import { useState } from "react"

export default function Lista (){
    const [listaTarefa, setListaTarefa] = useState([])
    const [valorInput, setValorInput] = useState ("")

    function changeInput (ev){
        setValorInput(ev.target.value)
    }
    function clickButton (){
        setListaTarefa([...listaTarefa, valorInput])
        setValorInput("")
    }

    function clickApagar (){
        setButtonAdicionar("")
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
            onClick={clickApagar}>X</button> </p>
        ))}
            
        </div>
    )
}