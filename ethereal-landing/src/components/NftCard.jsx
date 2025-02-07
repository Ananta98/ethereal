import React from 'react'

const NftCard = ({ price, title, author, image }) => {
    return (
        <div className="p-4 m-2 bg-black-gradient-2 rounded-lg bg-opacity-15">
            <img
                src={image}
                alt={title}
                width={400}
                height={400}
                className="mx-auto rounded-lg"
            />
            <h1 className="mt-[1.5rem] text-white text-[30px] font-poppins">
                {title}
            </h1>
            <p className="mt-[0.2rem] text-dim-white text-[15px] font-poppins">
                {author}
            </p>
            <div className="mt-[1.5rem] flex items-center justify-between">
                <button
                    type="button"
                    className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-4`}
                >
                    Place a bid
                </button>
                <p className="text-[30px] text-white">{price}</p>
            </div>
        </div>
    )
}

export default NftCard
