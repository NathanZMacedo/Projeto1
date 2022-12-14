import React from 'react'

function Pessoa({pessoa}) {
    function FormatarData(data){
        let dataFormada = data.substr(0, 10);
        return dataFormada
    }

  return (
    <div className='pessoa'>
        <h1> {pessoa.name.first} </h1>
        <img src={pessoa.picture.large} alt="" />
        <h3> {FormatarData(pessoa.dob.date)} </h3>
        <h3> {(pessoa.dob.age)} years </h3>
    </div>
  )
}

export default Pessoa