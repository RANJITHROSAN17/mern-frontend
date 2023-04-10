
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
const NotAuthenticated = () => {

    const navigate = useNavigate();
    return ( <div className='flex flex-col justify-center items-center h-screen w-screen gap-2'>
        <Heading>Youre not autenthicated</Heading>
        <Button colorScheme='teal' variant='solid' onClick={()=>{ navigate('login')}}>Autentificate</Button>
        <Button colorScheme='teal' variant='solid' onClick={()=>{ navigate('signup')}}>Inregistreazate</Button>
</div> );
}
 
export default NotAuthenticated;