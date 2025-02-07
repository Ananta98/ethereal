import React from 'react'
import NftCard from './NftCard'
import { nft1, nft2, nft3, nft4 } from '../assets'

const PopularNft = () => {
    return (
        <div id="popular-nfts" className="pb-[3rem] pt-[5rem] ">
            <div className="text-center">
                <p className="font-poppins font-semibold text-[30px] md:text-[40px] text-white opacity-90">
                    Popular Item
                </p>
                <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] leading-[2.5rem] md:leading-[3.5rem] text-white">
                    Explore <span className="text-gradient">Popular</span> Nfts{' '}
                </h1>
            </div>
            <div className="w-[80%] mx-auto pt-[5rem] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
                <div>
                    <NftCard
                        price="0.25 ETH"
                        title="Digital Art"
                        author="Ananta"
                        image={nft1}
                    />
                </div>
                <div>
                    <NftCard
                        price="0.25 ETH"
                        title="Digital Art"
                        author="Ananta"
                        image={nft2}
                    />
                </div>
                <div>
                    <NftCard
                        price="0.25 ETH"
                        title="Digital Art"
                        author="Ananta"
                        image={nft3}
                    />
                </div>
                <div>
                    <NftCard
                        price="0.25 ETH"
                        title="Digital Art"
                        author="Ananta"
                        image={nft4}
                    />
                </div>
            </div>
        </div>
    )
}

export default PopularNft
