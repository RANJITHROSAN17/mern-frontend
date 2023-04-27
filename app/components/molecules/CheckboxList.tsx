'use client'
import * as React from 'react';
import Checkbox from '../atoms/Checkbox';
import Label from '../atoms/Label';
const CheckboxList = ({ listItems, defaultChecked,Colors}: {
  listItems: string[],
  defaultChecked: boolean,
  Colors: CheckboxColors | string[],

}) => {

  const [checkboxes, setCheckboxes] = React.useState<CheckboxManager>([]) ;


  React.useEffect(() => {
    const newChecked = [];
    listItems.forEach((itemName, index) => {
      newChecked.push({itemName, checked: defaultChecked, Color: Colors[index]});
    });
    setCheckboxes(newChecked);
  }, [listItems]);


  const handleToggle = (itemName: string) => {
    const newChecked = [...checkboxes];
    const index = newChecked.findIndex((item) => item.itemName === itemName);
    newChecked[index].checked = !newChecked[index].checked;
    setCheckboxes(newChecked);
  };


  return (<ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" >
    {checkboxes.map((checkbox) => {
      return (
        <li key={checkbox.itemName}>
          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <Checkbox defaultChecked={defaultChecked} itemName={checkbox.itemName} onToggle={handleToggle} Color={checkbox.Color}/>
            <Label text={checkbox.itemName} />
          </div>
        </li>
      );
    })}

  </ul>);
}

export default CheckboxList;