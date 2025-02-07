import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div
                className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[266px] h-[72px] object-contain"
                    />
                </div>

                <div className="flex-[1.5] w-full flex justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div
                            key={footerLink}
                            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                        >
                            <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white">
                                {footerLink.title}
                            </h4>
                            <ul>
                                {footerLink.links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="font-poppins font-normal text-[16px] leading-[24px] text-dim-white hover:text-secondary cursor-pointer"
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
                <p className="font-poppins font-normal text-[18px] leading-[27px] text-center text-dim-white">
                    © 2025 Ethereal. All rights reserved.
                </p>

                <div className="flex md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                index !== socialMedia.length - 1
                                    ? 'mr-6'
                                    : 'mr-0'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer
