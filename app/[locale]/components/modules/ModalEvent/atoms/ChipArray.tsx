import { Chip } from "@material-tailwind/react";
import React from 'react';

const ChipArray = ({invitedPersons}) => {
    return ( <div className="flex gap-2 flex-wrap ">
       {invitedPersons.map((persoana) => { return(<Chip color="indigo" value={persoana}/>)} )} 
    </div>  );
}
 
export default ChipArray;


