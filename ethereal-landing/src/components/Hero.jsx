import React from 'react'
import styles from '../style'
import { discount, NftBanner } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img
                        src={discount}
                        alt="discount"
                        className="w-[32px] h-[32px]"
                    />
                    <p className={`${styles.paragraph} ml-2 gap-2`}>
                        <span className="text-white">50% </span>
                        <span>Discount for selected NFTs and </span>
                        <span className="text-white">
                            unlock exclusive digital art for a limited time
                        </span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Discover the Future Of{' '}
                        <span className="text-gradient">
                            Decentralized Art & Finance
                        </span>
                        <br className="sm:block hidden" />
                        <br />
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <p className={`${styles.paragraph} max-w-[470px mt-5]`}>
                    Ethereal is redefining the way creators and investors
                    connect in a decentralized world. Explore a new era where
                    digital art meets innovative finance, powered by blockchain
                    technology. Own, trade, and invest with full transparency
                    and security. The future is here—be part of it.
                </p>
            </div>

            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <img
                    src={NftBanner}
                    alt="billing"
                    className="w-[100%] h-[100%] relative z-5"
                />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero
