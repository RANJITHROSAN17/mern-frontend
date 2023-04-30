import { Label,TextInput } from "flowbite-react";

const EventDate = () => {
    return (<>
      <div className="mb-2 block">
                  <Label
                    htmlFor="dataEveniment"
                    value="Data"
                  />
                </div>
                <TextInput
                  id="dataEveniment"
                  type="text"
                  required={true}
                />
    
    
    </>  );
}
 
export default EventDate;