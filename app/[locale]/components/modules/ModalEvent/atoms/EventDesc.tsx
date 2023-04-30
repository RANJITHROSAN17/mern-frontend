import { Label,Textarea } from "flowbite-react";
const EventDesc = () => {
    return ( <>
    <div className="mb-2 block">
                    <Label
                      htmlFor="descEveniment"
                      value="Descrierea Evenimentului"
                    />
                  </div>
                  <Textarea
                    id="descEveniment"
                    placeholder="Descrierea..."
                    required={true}
                    rows={4}
                  />
    
    </> );
}
 
export default EventDesc;