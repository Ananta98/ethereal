import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
    return (
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row
            flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>
                    Don't miss out—start your NFT journey today!
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Discover, create, and trade unique NFTs in a decentralized
                    marketplace. Own your art, earn rewards, and be part of the
                    next digital revolution!
                </p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button />
            </div>
        </section>
    )
}

export default CTA
