import { useWeb3Context } from "../hooks/useWeb3Context";
import { ChainID, Contracts } from "../constants";
import { useEffect, useState } from "react";

import { TearsFaucet__factory } from "../typechain/factories/TearsFaucet__factory"
import { TearsFaucet } from "../typechain/TearsFaucet";
import { Tears__factory } from "../typechain/factories/Tears__factory"

import { Tears } from "../typechain/Tears";

import { BigNumber, ethers, utils } from "ethers";

const Redeem = () => {
    const {address, connected, chainId, provider } = useWeb3Context()
    const [amount, setAmount] = useState(0);
    const [output, setOutput] = useState(0);
    const [token, setToken] = useState("");
    const [contract, setContract] = useState<TearsFaucet>();
    const [tokenContract, setTokenContract] = useState<Tears>();
    const [ts, setTS] = useState(0)
    const [percent, setPercent] = useState(0)
    const [txActive, setTxActive] = useState(false);
    const [error, setError] = useState("")
    const [balance, setBalance] = useState(0);
    
    useEffect(() => {
        if (chainId === ChainID.BSC && provider) {
            setContract(TearsFaucet__factory.connect(Contracts[chainId!].FAUCET, provider!.getSigner()))
            setTokenContract(Tears__factory.connect(Contracts[chainId!].TEARS, provider.getSigner()))
            setToken(Contracts[chainId!].UST)
        }
    }, [address, chainId])

    useEffect(() => {
        if (contract && token !== "" && tokenContract) {
            tokenContract.totalSupply().then((v) => {setTS(parseFloat(utils.formatEther(v)))});
            contract!.getOutput(utils.parseEther(amount.toString())).then((v) => {setOutput(parseFloat(utils.formatEther(v)))}) 
            tokenContract.balanceOf(contract.address).then((v) => {setBalance(parseFloat(utils.formatEther(v)))})
        }
    }, [amount, contract, tokenContract, token])


    useEffect(() => {
        setPercent(output * 100 / ts)
    }, [output, ts])

    const handleRedeem = () => {
        if (tokenContract && chainId) {
            setTxActive(true);
            tokenContract?.approve(Contracts[chainId!].FAUCET, utils.parseEther(amount.toString())).then(() => {
                contract?.redeem(token, utils.parseEther(amount.toString())).then(() =>{
                }).catch((e) => {
                    setError(e.message);
                }).finally(() => setTxActive(false))
            }).catch((e) => {
                setError(e.message)
            }).finally(() => setTxActive(false))
        }
    }

    return (<div>
        {
            connected && chainId == ChainID.BSC ?
            <div className="redeem">
                <div className="redeem-tokens">                
                    I would like to get rid of 
                    <select onChange={(e) => {setToken(e.target.value)}}>
                        <option value={Contracts[chainId!].UST}>UST</option>
                        <option value={Contracts[chainId!].LUNA}>LUNA</option>
                    </select>
                </div>
                <div className="redeem-amount">
                    The amount, I'd like to cry for is 
                    <input name="amount" onChange={(e) => {e.target.value == "" ? setAmount(0) : setAmount(parseFloat(e.target.value))}} />
                </div>
                <div className="redeem-info">
                    <span>You are gonna get {output.toLocaleString()} tears or {percent} % of supply.</span>
                </div>
                <div className="redeem-submit">
                    <button disabled={txActive || amount == 0} onClick={() => {handleRedeem()}}>Redeem</button>
                    <div className="error">{error}</div>
                </div>
                <div>
                    Remaining faucet balance: {balance.toLocaleString()}
                </div>
            </div>
            :
            ""
        }

    </div>)
}

export default Redeem;