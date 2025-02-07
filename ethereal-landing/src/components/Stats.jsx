import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between gap-4 border border-gray-60 rounded-2xl p-8 bg-[#1e1e1e]">
            {stats.map((stat) => (
                <div
                    key={stat.id}
                    className={`flex-1 flex-col flex justify-center items-center gap-4`}
                >
                    <span class="text-base leading-6 font-poppins font-semibold text-center text-white">
                        {stat.title}
                    </span>
                    <span class="text-[40px] leading-8 font-bold tracking-[.01em] font-poppins text-center text-gradient">
                        {stat.value}
                    </span>
                </div>
            ))}
        </section>
    )
}

export default Stats
