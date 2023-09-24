import { VStack } from "@chakra-ui/react"
import ConnectButton from "../components/ConnectButton"
import DisconnectButton from "../components/DisconnectButton"
import ShowUIButton from "../components/ShowUIButton"
import SignMessage from "../components/SignMessage"
import WalletDetail from "../components/WalletDetail"
import { useUser } from "../context/ UserContext"
import Nav from "../components/layouts/Navbar"


export default function Home() {
   // Use the UserContext to get the current logged-in user
   const { user } = useUser()
  return (
    <>
     <Nav />
    <VStack justifyContent="center" alignItems="center" minH="100vh">
      {/* If no user is available, display the Connect button.
          Otherwise, display the Wallet details, Sign Message Component, Disconnect button, and ShowUI button. */}
      {!user ? (
        
        <ConnectButton />
      ) : (
        <>
          <WalletDetail />
          <SignMessage />
          <DisconnectButton />
          <ShowUIButton />
        </>
      )}
    </VStack>
    
    </>
   
  )
}
