'use client'

import React, { useState } from 'react';
import Dropdown from '../atoms/Dropdown';
import { Button } from "@material-tailwind/react";
import ChipArray from '../atoms/ChipArray';
const ChipPicker = () =>{
  const [selected, setSelected] = useState<string>("Selecteaza un angajat");
  const [invitedPersons, setInvitedPersons] = useState<string[]>([]);
  const handleChangeSelected = (newSelected) =>{
    setSelected(newSelected)
  }

  const invitePerson = () =>{
    setInvitedPersons((prev) => [...prev, selected ]);
  }
  return(
    <React.Fragment>
      <Dropdown onChange={handleChangeSelected} value={selected}/>
      <Button onClick={invitePerson } className='my-2'>Adauga la lista</Button>
      <ChipArray invitedPersons={invitedPersons}/>
    </React.Fragment>
  )

}




export default ChipPicker;