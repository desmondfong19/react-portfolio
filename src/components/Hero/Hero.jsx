import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}> 
            {/* <h1 className={styles.title}>Hi, I'm Jian Fong</h1> */}
            <p className={styles.description}>Hi, I'm Jian Wee Fong,a front-end developer with a year of experience using React and Javascript. Reach out if you'd like to know more!</p>
            <a href='mailto:desmondfong@hotmail.my'className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.jpg")} 
        // style={{ width: '50vh', height: '50vh' }}
        alt="Image of me"
        className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
