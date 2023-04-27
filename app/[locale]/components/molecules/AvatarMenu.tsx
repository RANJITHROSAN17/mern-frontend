'use client';
import { Dropdown } from "flowbite-react";
import Avatar from "@/components/atoms/Avatar";
// import React from 'react';
// import { Menu, MenuButton, MenuList, MenuItem , Button, Avatar} from '@chakra-ui/react';
// import { Text, Box} from '@chakra-ui/react'

const AvatarMenu = () => {
  const username = "Gandolh";
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const logout = () => {
    // setUserName('');
    // setIsAuthenticated(false);
  }


  return (<>
    <div className="w-full h-full">
      <Dropdown label={username} className="w-full h-full">
        <Dropdown.Header>
          <Avatar name={username} src="/mern-frontend/fox.png" />
        </Dropdown.Header>
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          My events
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item >
          <span onClick={logout}> Logout</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  </>);
}

export default AvatarMenu;
