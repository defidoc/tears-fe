import { useWeb3Context } from "../hooks/useWeb3Context";
import { ChainID, Contracts, DEFAULT_CHAIN } from "../constants";
import { useEffect, useState } from "react";

import { TearsFaucet__factory } from "../typechain/factories/TearsFaucet__factory"
import { TearsFaucet } from "../typechain/TearsFaucet";
import { Tears__factory } from "../typechain/factories/Tears__factory"
import { ERC20__factory } from "../typechain/factories/ERC20__factory";

import { Tears } from "../typechain/Tears";
import { ERC20 } from "../typechain/ERC20";

import { BigNumber, ethers, utils } from "ethers";
import useTimeout from "../hooks/useTimeout";
import useInterval from "../hooks/useInterval";

const Redeem = () => {
    const {address, connected, chainId, provider } = useWeb3Context()
    const [amount, setAmount] = useState(0);
    const [output, setOutput] = useState(0);
    const [token, setToken] = useState("");
    const [contract, setContract] = useState<TearsFaucet>();
    const [tokenContract, setTokenContract] = useState<ERC20>();
    const [tearsContract, setTearsContract] = useState<Tears>();
    const [ts, setTS] = useState(0)
    const [percent, setPercent] = useState(0)
    const [txActive, setTxActive] = useState(false);
    const [error, setError] = useState("")
    const [balance, setBalance] = useState(0);
    const [allowance, setAllowance] = useState(0);
    const [tokenBalance, setTokenBalance] = useState(0);
    const [tokenDecimals, setTokenDecimals] = useState(0);
    const [maxRedeem, setMaxRedeem] = useState(0);
    const [tearsBalance, setTearsBalance] = useState(0);
    
    useEffect(() => {
        if (chainId === ChainID.BSC && provider && token) {
            setContract(TearsFaucet__factory.connect(Contracts[chainId!].FAUCET, provider!.getSigner()))
            setTearsContract(Tears__factory.connect(Contracts[chainId!].TEARS, provider.getSigner()))
            setTokenContract(ERC20__factory.connect(token, provider.getSigner()))
        }
    }, [address, chainId, token])

    useInterval(() => {
        if (tearsContract && contract && tokenContract) {
            tearsContract.balanceOf(contract.address).then((v) => {setBalance(parseFloat(utils.formatEther(v)))})
            tokenContract.balanceOf(address).then((v) => {setTokenBalance(parseFloat(utils.formatUnits(v, tokenDecimals)))})
        }
    }, 10000)

    useEffect(() => {
        if (tokenContract) {
            tokenContract.decimals().then((v) => setTokenDecimals(v))
        }
    }, [tokenContract])

    useEffect(() => {
        if (contract && token && tokenDecimals > 0) {
            contract!.getOutput(token, utils.parseUnits(amount.toString(), tokenDecimals)).then((v) => {setOutput(parseFloat(utils.formatEther(v)))}) 
        }

    }, [amount, contract, token, tokenDecimals])

    useEffect(() => {
        if (tearsContract && contract && token && tokenDecimals > 0) {
            tearsContract.totalSupply().then((v) => {setTS(parseFloat(utils.formatEther(v)))});
            tearsContract.balanceOf(contract.address).then((v) => {setBalance(parseFloat(utils.formatEther(v)))})
            contract.maxRedeem().then((v) => {setMaxRedeem(parseFloat(utils.formatEther(v)))})
            tearsContract.balanceOf(address).then((v) => { setTearsBalance(parseFloat(utils.formatEther(v))) })
        }
        if (tokenContract && contract && address && tokenDecimals > 0) {
            tokenContract.allowance(address, contract.address).then((v) => setAllowance(parseFloat(utils.formatUnits(v, tokenDecimals))))
            tokenContract.balanceOf(address).then((v) => {setTokenBalance(parseFloat(utils.formatUnits(v, tokenDecimals)))})
        }
    }, [amount, contract, tokenContract, tearsContract, token, tokenDecimals])

    useEffect(() => {
        if (chainId == DEFAULT_CHAIN) {
            setToken(Contracts[chainId!].LUNA)
        }
    }, [chainId])


    useEffect(() => {
        setPercent(output * 100 / ts)
    }, [output, ts])

    const handleRedeem = () => {
        if (tokenContract && chainId) {
            setTxActive(true);
            if (allowance >= amount) {
                contract?.redeem(token, utils.parseUnits(amount.toString(), tokenDecimals)).then((tx) =>{
                    tx.wait(3).then(() => {
                        setError("")
                        setTxActive(false)
                    }).catch((e) => {
                        setError(e.data.message)
                        setTxActive(false)
                    })
                }).catch((e) => {
                    setError(e.data.message);
                }).finally(() => setTxActive(false))
            } else {
                tokenContract!.approve(Contracts[chainId!].FAUCET, utils.parseUnits(amount.toString(), tokenDecimals)).then((tx) => {
                    setError("Approving...")
                    tx.wait(3).then(() => {
                        contract!.redeem(token, utils.parseUnits(amount.toString(), tokenDecimals)).then((tx) =>{
                            setError("Redeeming...")
                            tx.wait(3).then(() => {
                                setError("")
                                setTxActive(false)
                            }).catch((e) => {
                                setError(e.data.message)
                                setTxActive(false)
                            })
                        }).catch((e) => {
                            setError(e.data.message);
                            setTxActive(false)
                        })
                    })
                }).catch((e) => {
                    setError(e.data.message)
                    setTxActive(false)
                })
            }
            
        }
    }

    return (<div>
        {
            connected && chainId == ChainID.BSC ?
            <div className="redeem">
                <div className="redeem-tokens">                
                    I would like to get rid of 
                    <select onChange={(e) => {setToken(e.target.value)}}>
                        <option value={Contracts[chainId!].LUNA}>LUNA</option>
                        <option value={Contracts[chainId!].UST}>UST</option>
                    </select>
                </div>
                <div className="redeem-amount">
                    The amount, I'd like to cry for is 
                    <input name="amount" value={amount} onChange={(e) => {e.target.value == "" ? setAmount(0) : setAmount(parseFloat(e.target.value))}} />
                    <button onClick={() => setAmount(tokenBalance)}>Max</button> ({tokenBalance})
                </div>
                <div className="redeem-info">
                    <span>You are gonna get {output.toLocaleString()} tears or {percent} % of supply.</span>
                </div>
                <div className="redeem-submit">
                    <button disabled={txActive || amount == 0 || output+tearsBalance > maxRedeem} onClick={() => {handleRedeem()}}>Redeem</button>
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