import { Magic } from "magic-sdk"

// Initialize the Magic instance
export const magic = new Magic("pk_live_A0DC15B4B593C660", {
  network: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
    chainId: 11155111,
  },
})