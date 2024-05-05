import { useState, useRef, useEffect, useLayoutEffect} from "react"; 
import { ColorPicker } from "../components/ColorPicker";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const prevCounterValue = useRef<number>(0);
    const refButton = useRef<HTMLButtonElement>(null);
    

    useEffect(() => {

        prevCounterValue.current = counter;
    
    },[counter])

    useLayoutEffect(() => {
        if (refButton.current) {
            refButton.current.style.backgroundColor = "green";
        }
    },[])

    return (

        <div className="max-w-full ml-4">

            <h3>PreviousPrevious Counter: {prevCounterValue.current}</h3>
            <h3 className="text-bold">Counter: {counter}</h3>

            
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCounter(prev => prev + 1)}
                ref={refButton}
            >
                Increment
            </button>
            <hr className="mt-3 mr-3"/>
            <ColorPicker />

        </div>
    )
}