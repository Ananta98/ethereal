import Features from './components/Features'
import CTA from './components/CTA'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import Stats from './components/Stats'
import styles from './style'
import Footer from './components/Footer'
import BecomeCreator from './components/BecomeCreator'
import PopularNft from './components/PopularNft'

function App() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Features />
                    <BecomeCreator />
                    <PopularNft />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
