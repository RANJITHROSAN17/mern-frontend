import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './styles/index.css'
import { MyAccountProvider } from './context/MyAccountContext'
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <ChakraProvider>
        <MyAccountProvider>
    <App />
        </MyAccountProvider>
       </ChakraProvider>
  </React.StrictMode>,
)
