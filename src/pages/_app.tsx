import '../styles/global.css';
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { UserProvider } from "../context/ UserContext";
import { Web3Provider } from "../context/Web3Context";

 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Web3Provider>
        <UserProvider>
  <Component {...pageProps} />
  </UserProvider>
  </Web3Provider>
    </ChakraProvider>
  )
}