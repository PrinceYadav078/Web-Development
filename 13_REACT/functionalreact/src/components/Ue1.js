import React, {useEffect, useState} from 'react'

function Ue1() {
    const [count, setCount]=useState(0)
    const [name, setName] = useState('Prince')

    useEffect(()=>{
        document.title=`This is my title ${count} ${name}`
    }) // working like a componentdidmount and componentdidupdate both
  return (
    <div>
        <h1>This is a counter {count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>setName('Yadav')}>change name</button>

    </div>
  )
}

export default Ue1