'use client';
import CheckboxList from "./CheckboxList";
const EventCategories = () => {
    return ( <div>
        <h6 className="pl-2"> Events  </h6>
        <CheckboxList listItems={['Parties','Game Nights','Reminders']}/>
    </div> );
}
 
export default EventCategories;