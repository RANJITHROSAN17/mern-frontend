'use client';
import * as React from 'react';
import { Menu, MenuButton, MenuList, MenuItem , Button, Avatar} from '@chakra-ui/react';
import { Text, Box} from '@chakra-ui/react'
// import AvatarIcon from '../../assets/fox.png'
import { useMyAccount } from '../../hooks/MyAccountContext';

export default function AccountMenu() {
  const context = useMyAccount();
  const username = ''
  // const [username, setUserName] = context.username;
  // const [isAuthenticated,setIsAuthenticated] = context.isAuthenticated;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () =>{
    // setUserName('');
    // setIsAuthenticated(false);
  }
  return (
    <Menu>
      <MenuButton as={Button} isActive={open} onClick={handleClick} className="text-left">
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
    </Menu>
  );
}