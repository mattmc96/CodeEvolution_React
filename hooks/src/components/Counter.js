import React,{ useState, useMemo } from 'react'

function Counter() {
   const [counterOne, setCounterOne] = useState(0)
   const [counterTwo, setCounterTwo] = useState(0)

   const incrementOne = () => {
        setCounterOne(counterOne + 1)
   }
  
   // callbacks in hooks is used to return the cached functions
   const incrementTwo = () => {
       setCounterTwo(counterTwo + 1)
   }

   // memo is used to cahced the value of a callback function
   // memo used for performace optimization
   const isEven =  useMemo(() => {
    return counterOne % 2 === 0
    },[counterOne])

   return (
        <div>
            <div>
                <button onClick={incrementOne}> Count One - {counterOne}</button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}> Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
