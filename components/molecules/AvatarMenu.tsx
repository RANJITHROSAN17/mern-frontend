'use client';
// import React from 'react';
// import { Menu, MenuButton, MenuList, MenuItem , Button, Avatar} from '@chakra-ui/react';
// import { Text, Box} from '@chakra-ui/react'

const AvatarMenu = () => {
  // const username= "Gandolh";
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const logout = () =>{
  //   // setUserName('');
  //   // setIsAuthenticated(false);
  // }


  return (<>
  <div>

    <button 
    id="dropdownInformationButton"
     data-dropdown-toggle="dropdownInformation"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       type="button">
        Dropdown header
         <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

    <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div className="font-medium truncate">name@flowbite.com</div>
      </div>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
      </ul>
      <div className="py-2">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </div>
    </div>
  </div>



    {/* <Menu >
      <MenuButton as={Button} isActive={open} onClick={handleClick} className="text-left bg-lime-300 h-full rounded-none">
        <Box className='flex gap-2 items-center'>
      <Avatar  size='sm' name={username} src="/fox.png" />
       <Text fontSize='md' className='text-cyan-900'>{username}</Text>
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem> My events</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </MenuList>
    </Menu> */}
  </>);
}

export default AvatarMenu;
