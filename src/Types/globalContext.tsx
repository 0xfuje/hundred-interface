import { createContext, useContext } from "react";
import { Network } from "../networks";

export type GlobalContext = {
    network: Network | null,
    setNetwork: (n: Network | null) => void,
    // provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined,
    // setProvider: (p: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined) => void
}

export const MyGlobalContext = createContext<GlobalContext>({
    network: null,
    setNetwork: () => undefined,
    // provider : undefined,
    // setProvider: () => undefined,
})

export const useGlobalContext = () : GlobalContext => useContext(MyGlobalContext)