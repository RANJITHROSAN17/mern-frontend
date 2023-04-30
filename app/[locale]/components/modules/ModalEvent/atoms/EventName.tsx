import { Label ,TextInput } from "flowbite-react";

const EventName = () => {
    return ( <>
    
    <div className="mb-2 block">
                  <Label
                    htmlFor="numeEveniment"
                    value="Numele evenimentului"
                  />
                </div>
                <TextInput
                  id="numeEveniment"
                  placeholder="Nume eveniment"
                  required={true}
                />
    </>
        

     );
}
 
export default EventName;