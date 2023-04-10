import * as React from 'react';
import {List, ListItem,ListIcon} from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react'
type CheckboxListProps = {
  listItems: string[],
}

export default function CheckboxList({ listItems }: CheckboxListProps) {
  const colorSchemes = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan',
   'purple', 'pink', 'linkedin', 'facebook', 'messenger', 'whatsapp', 'twitter', 'telegram'];
  const [checked, setChecked] = React.useState(['']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <List className="pl-2" spacing={1}>
      {listItems.map((item, index) => {
        return (
          <ListItem
            key={item}
            className="flex gap-2 items-center"
          >
            <Checkbox size='sm' colorScheme={colorSchemes[index*4 % colorSchemes.length]}
              defaultChecked
              tabIndex={-1}
              >
              {item}
            </Checkbox>
          </ListItem>
        );
      })}
    </List>
  );
}