import React from 'react'

const ChildComponent = ({onDataFromChild}) => {

    const SendDataToParent=()=>{
        const data="Logged In"
        onDataFromChild(data)
    }



  return (
    <div>ChildComponent
    <button onClick={SendDataToParent}>send</button>
    </div>
  )
}

export default ChildComponent