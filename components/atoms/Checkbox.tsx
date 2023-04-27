'use client'
import React from 'react';

const Checkbox = ({ itemName, defaultChecked, onToggle, Color }: CheckboxData ) => {
    const [checked, setChecked] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        setChecked(defaultChecked);
    }, [defaultChecked]);

    React.useEffect(() => {
        onToggle(itemName);
    }, [checked]);

    return (
        <input
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            id="red-checkbox"
            type="checkbox"
            className={`w-4 h-4 ${Color ?? "text-red-600"} bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />);
}

export default Checkbox;