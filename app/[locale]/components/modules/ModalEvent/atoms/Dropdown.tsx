import React, {useState} from 'react';
import { Select, Option } from "@material-tailwind/react";

const Dropdown = ({onChange, value}) =>{

  let angajati = ["Andreea","Marian","Silviu"]
  

let handleAngajatChange = (value) =>{
    onChange(value);
}
  return(
    <Select onChange={handleAngajatChange} value={value}>

  <Option value="Selecteaza un angajat">--Selecteaza un angajat--</Option>

  {angajati.map((angajat)=><Option value = {angajat}>{angajat}</Option>)}

  </Select>

  )

}




export default Dropdown;