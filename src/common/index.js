import React from 'react';
import '@common/styles/index.scss'

let click = ()=>{
    console.log(123123);
    alert(321);
}
export default  ({})=>{
    return <div className="img" onClick={click}>hello world</div>
}