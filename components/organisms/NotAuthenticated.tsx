
'use client';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'
const NotAuthenticated = () => {

    const router = useRouter()
    return ( <div className='flex flex-col justify-center items-center h-screen w-screen gap-2'>
        <Heading>Youre not autenthicated</Heading>
        <Button colorScheme='teal' variant='solid' onClick={()=>{ router.push('/login')}}>Autentificate</Button>
        <Button colorScheme='teal' variant='solid' onClick={()=>{ router.push('/register')}}>Inregistreazate</Button>
</div> );
}
 
export default NotAuthenticated;