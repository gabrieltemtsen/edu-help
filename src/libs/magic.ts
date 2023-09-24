import { Magic } from "magic-sdk"
declare global {
  interface Window {
    ethereum: any;
    
  }
}
// Initialize the Magic instance




// Create the Magic instance only on the client side
let magicInstance;

if (typeof window !== 'undefined') {
  magicInstance = new Magic("pk_live_A0DC15B4B593C660", {
    network: {
      rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
      chainId: 11155111,
    },
  });
}
export const magic = magicInstance

