
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })




import { ChakraProvider } from "@chakra-ui/react"
import { Web3Provider } from './context/Web3Context'
import { UserProvider } from './context/ UserContext'



export const metadata: Metadata = {
  title: 'Edu-Help',
  description: 'AI powered platform to help students prepare for a lecture',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  

  return (
    <html lang="en">
       <ChakraProvider>
      <Web3Provider>
        <UserProvider>
        <body className={inter.className}>{children}</body>
        </UserProvider>
      </Web3Provider>
    </ChakraProvider>
     
    </html>
  )
}
