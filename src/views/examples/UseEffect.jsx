import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFactorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1

    return calcFactorial(n - 1) * n
}

function isPar(num){
    const n = parseInt(num)

    if(n % 2 === 0) return "Par"
    return "Impar"
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [paridade, setParidade] = useState("Impar")
    const [numberParidade, setNumberParidade] = useState(1)

    useEffect(function(){
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function() {
        if(factorial > 1000000){
            document.title = "Já deu"
        }
    }, [factorial])

    useEffect(function(){setParidade(isPar(numberParidade))}, [numberParidade])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{factorial === -1? "Não existe" : factorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Paridade:</span>
                    <span className="text red">{paridade}</span>
                    <input type="number" className="input" value={numberParidade} onChange={e => setNumberParidade(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
