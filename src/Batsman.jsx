import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);

    const [fours, setFours]= useState(0);

    const [sixes, setSixes] = useState(0);

    const handleSingle = () =>{
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleDouble = () =>{
        const updateRuns = runs + 2;
        setRuns(updateRuns);
    }

    const handleTriple = () =>{
        const updateRuns = runs + 3;
        setRuns(updateRuns);
    }

    const handleFour = () =>{
        const updateRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(updateRuns);
    }

    const handleSix = () =>{
        const updateRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updateRuns);
    }

    return(
        <div>
            <h3>Batsman: Shakib</h3>
            <h1>Score: {runs}</h1>
            {
                runs >= 50 && <p>You Scored 50!</p>
            }

            <h2>4s: {fours}</h2>
            <h2>6s: {sixes}</h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTriple}>Triple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

            
        </div>
    )
}