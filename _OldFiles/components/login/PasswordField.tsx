import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react'
import { FormErrorMessage,FormHelperText } from '@chakra-ui/react';
import { forwardRef, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
type PasswordFieldsProps = {
  inputProps?: InputProps
  isPasswordError?: boolean
}
export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldsProps>((props, ref) => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)

  const mergeRef = useMergeRefs(inputRef, ref)
  const onClickReveal = () => {
    onToggle()
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }

  return (
    <FormControl isInvalid={props.isPasswordError}>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={mergeRef}
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
          {...props.inputProps}
        />
      </InputGroup>
      {!props.isPasswordError ? (
        <FormHelperText>
          introdu parola ta
        </FormHelperText>
      ) : (
        <FormErrorMessage>Parola trebuie sa contina o litera mare, o litera mica si caractere alfanumerice</FormErrorMessage>
      )}
    </FormControl>
  )
})

PasswordField.displayName = 'PasswordField'
