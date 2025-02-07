import React from 'react'
import {
    PaintBrushIcon,
    CloudArrowUpIcon,
    CurrencyDollarIcon,
    WalletIcon,
    PhotoIcon,
} from '@heroicons/react/24/solid'

const BecomeCreator = () => {
    return (
        <div
            id="become-creator"
            className="pb-[3rem] pt-[5rem] bg-[#1e1e1e] rounded-2xl"
        >
            <div className="text-center">
                <p className="font-poppins font-semibold text-[30px] md:text-[40px] text-white opacity-90">
                    Become a Creator
                </p>
                <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] leading-[2.5rem] md:leading-[3.5rem] text-white">
                    Create and <span className="text-gradient">Sell</span> Your
                    Nfts{' '}
                </h1>
            </div>
            <div className="w-[80%] mx-auto mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
                <div className="bg-black-gradient-2 box-shadow rounded-2xl hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 p-4">
                    <PaintBrushIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-white" />
                    <h1 className="font-poppins font-bold mt-[1rem] text-[20px] text-white">
                        Create Your Art
                    </h1>
                    <p className="font-poppins mt-[1rem] text-[15px] text-white opacity-85">
                        Design unique digital artwork, music, videos, or
                        collectibles.
                    </p>
                    <button
                        type="button"
                        className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-4`}
                    >
                        Learn More
                    </button>
                </div>
                <div className="bg-black-gradient-2 box-shadow rounded-2xl hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 p-4">
                    <WalletIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-white" />
                    <h1 className="font-poppins font-bold mt-[1rem] text-[20px] text-white">
                        Setup Your Wallet
                    </h1>
                    <p className="font-poppins mt-[1rem] text-[15px] text-white opacity-85">
                        Use MetaMask, WalletConnect, or any supported wallet.
                    </p>
                    <button
                        type="button"
                        className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-4`}
                    >
                        Learn More
                    </button>
                </div>
                <div className="bg-black-gradient-2 box-shadow rounded-2xl hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 p-4">
                    <CloudArrowUpIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-white" />
                    <h1 className="font-poppins font-bold mt-[1rem] text-[20px] text-white">
                        Mint Your NFT
                    </h1>
                    <p className="font-poppins mt-[1rem] text-[15px] text-white opacity-85">
                        Upload your artwork, set your price, and mint it on the
                        blockchain.
                    </p>
                    <button
                        type="button"
                        className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-4`}
                    >
                        Learn More
                    </button>
                </div>
                <div className="bg-black-gradient-2 box-shadow rounded-2xl hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10 p-4">
                    <CurrencyDollarIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-white" />
                    <h1 className="font-poppins font-bold mt-[1rem] text-[20px] text-white">
                        List & Sell
                    </h1>
                    <p className="font-poppins mt-[1rem] text-[15px] text-white opacity-85">
                        Showcase your NFT on the marketplace and start earning.
                    </p>
                    <button
                        type="button"
                        className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-4`}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BecomeCreator
