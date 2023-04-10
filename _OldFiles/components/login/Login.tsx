import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    Avatar
} from '@chakra-ui/react';
import { FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { PasswordField } from './PasswordField'
import { useMyAccount } from "../../context/MyAccountContext";
import { useNavigate } from "react-router-dom";
import AvatarIcon from "../../assets/fox.png"
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
const Login = () => {
    const context = useMyAccount();
    const navigate = useNavigate();
    // const [user,setUser] = context.user;
    console.log(context.user);
    const toast = useToast();
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    
    const handleLogin = () => {
        if (!isEmailError || !isPasswordError) {
            
            //TODO: fetch data
            // setUsername
            navigate('/UI');
        } else {
            //notify ca sunt probleme
            toast({
                title: 'Error',
                description: "Va rugam introduceti credentialele corecte.",
                status: 'error',
                position: 'bottom-right',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const validatePassword = () => {

    }
    const isEmailError = (inputEmail === '')
    const isPasswordError = (inputPassword === '')

    const handleEmailChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setInputEmail(e.currentTarget.value);
    }

    const handlePasswordChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setInputPassword(e.currentTarget.value);
    }


    return (<>
        <div className='h-full w-full' style={{ backgroundColor: '#f7fafc' }}>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <div style={{ backgroundColor: 'white' }}>
                    <LoginHeader />
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg-surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <LoginForm
                                inputEmail={inputEmail}
                                isEmailError={isEmailError}
                                handleEmailChanged={handleEmailChanged}
                                inputPassword={inputPassword}
                                isPasswordError={isPasswordError}
                                handlePasswordChanged={handlePasswordChanged}
                            />
                            <LoginFunctions
                                handleLogin={handleLogin}
                            />
                        </Stack>
                    </Box>
                </div>
            </Container>
        </div>

    </>);
}

const LoginHeader = () => {
    return (
        <Stack >
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center" className='items-center'>
                <Avatar src={AvatarIcon} />
                <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                <HStack spacing="1" justify="center">
                    <Text color="muted">Don't have an account?</Text>
                    <Button variant="link" colorScheme="blue">
                        Sign up
                    </Button>
                </HStack>
            </Stack>
        </Stack>
    )
}


const LoginForm = ({
    inputEmail, isEmailError, handleEmailChanged,
    inputPassword, isPasswordError, handlePasswordChanged }: any) => {

    return (<Stack spacing="5">
        <FormControl isInvalid={isEmailError}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" value={inputEmail} onChange={handleEmailChanged} />
            {!isEmailError ? (
                <FormHelperText>
                    Introdu email-ul tau.
                </FormHelperText>
            ) : (   
                <FormErrorMessage>Va rugam completati email-ul</FormErrorMessage>
            )}
        </FormControl>
        <PasswordField
            inputProps={
                {
                    value: inputPassword,
                    onChange: handlePasswordChanged
                }
            }
            isPasswordError={isPasswordError} />
    </Stack>)
}

const LoginFunctions = ({ handleLogin }: any) => {
    return (
        <>
            <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                    Forgot password?
                </Button>
            </HStack>
            <Stack spacing="6">
                <Button variant="solid" onClick={handleLogin}>Log in</Button>
            </Stack>
        </>
    )
}
export default Login;