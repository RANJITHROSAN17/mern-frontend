'use client'

import { Modal , Button, Label, TextInput,Checkbox,Textarea } from "flowbite-react";
import React, {useState } from "react";
import ChipPicker from "../molecules/ChipPicker";
import EventName from "../atoms/EventName";
import EventDate from "../atoms/EventDate";
import EventDesc from "../atoms/EventDesc";


const ModalEvent = () => {
    const [visible,setVisible] = useState(false);
    const onClick = () =>{
        setVisible(true);
    }
    
    const onClose = () =>{
        setVisible(false);
    }
    return ( <React.Fragment>
        <Button onClick={onClick}>
          Toggle modal
        </Button>
        <Modal
          show={visible}
          size="md"
          popup={true}
          onClose={onClose}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Creeaza un eveniment
              </h3>
              <div>
                <EventName/>
              </div>
              <div>
               <EventDate/>
              </div>
              <div>
              <EventDesc/>
              </div>
              <div className="flex justify-between">
              </div>
              <div>
              <div className="mb-2 block">
                <Label
                htmlFor="chipPicker"
                value="Alegeti Participantii"
                />
                <ChipPicker/>
                
              </div>
              <div>
                Locatie
              </div>
              </div>
              <div className="w-full">
                <Button>
                  Creeaza evenimentul
                </Button>
              </div>
              
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment> );
}
 
export default ModalEvent;