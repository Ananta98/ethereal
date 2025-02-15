import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => {
    return (
        <div
            className={`flex p-6 rounded-[20px] ${
                index !== features.length - 1 ? 'mb-6' : 'mb-0'
            } feature-card`}
        >
            <div
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dim-blue`}
            >
                <img
                    src={icon}
                    alt="icon"
                    className="w-[50%] h-[50%] object-contain"
                />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                    {title}
                </h4>
                <p className="fint-poppins font-normal text-dim-white text-[16px] leading-[24px]">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard
