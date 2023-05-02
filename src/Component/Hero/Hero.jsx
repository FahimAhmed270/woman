import React from 'react'
import css from './Hero.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {RiShoppingBagFill} from 'react-icons/ri'
import HeroImg from '../../assets/hero.png'
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className={css.container}>

            {/* left side */}
            <div className={css.h_sides} >
                <span className={css.text1}>SKIN PROTECTION CREAM</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span> {''} Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>
            </div>

            {/* middle side */}
            <div className={css.wrapper}>
                {/* blue circle */}
                <motion.div 
                transition={{
                    duration: 3,
                    delay: 0.1,
                    type:'spring'
                }}
                initial={{bottom:'2rem'}}
                whileInView={{bottom: '0rem'}}
                className={css.blueCricle}></motion.div>

                {/* image motion */}
                <motion.img
                transition={{
                    duration: 3,
                    delay: 0.1,
                    type:'spring'
                }}
                initial={{bottom:'-2rem'}}
                whileInView={{bottom: '0rem'}}
                src={HeroImg} alt="" width={600}/>

                <motion.div 
                 transition={{
                    duration: 3,
                    delay: 0.1,
                    type:'spring'
                }}
                initial={{right:'4%'}}
                whileInView={{right:'0%'}}
                className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly traffic</span>
                </div>
                <div className={css.traffic}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
