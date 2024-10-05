import { useState } from "react"

export default function Lista (){
    const [inputTarefa, setInputTarefa] = useState([])
    const [buttonAdicionar, setButtonAdicionar] = useState ("")

    function changeInput (ev){
        setInputTarefa(ev.target.value)
    }
    function clickButton (){
        setButtonAdicionar([...inputTarefa, buttonAdicionar])
        setInputTarefa("")
    }

    function clickApagar (){
        setButtonAdicionar("")
    }
    return(
        <div>
            <input
            placeholder="Escreva sua terefa.."
            onChange={changeInput}
            value={inputTarefa} />
            <button
            onClick={clickButton}
            >Adicionar</button>
            {buttonAdicionar &&
           
           <p>{buttonAdicionar} <button
            onClick={clickApagar}>X</button> </p>
          }
            
        </div>
    )
}