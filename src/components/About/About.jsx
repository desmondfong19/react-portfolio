import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/About.jpg")}
            alt="Me sitting with laptop"
            // style={{ width: '50vh', height: '50vh' }}
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/mouse.png")} 
                    style={{ width: '5vh', height: '5vh' }}
                    alt="Cursor icon"/>
                    <div className={styles.aboutItemText}> 
                        <h3>Front-end Developer</h3>
                        <p>I'm a front-end developer with experience in building responsive and optimise sites.</p>
                    </div>
                   
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/server.png")} 
                    style={{ width: '5vh', height: '5vh'}}
                    alt="Server icon"/>
                    <div className={styles.aboutItemText}> 
                        <h3>Back-end Enthutiast</h3>
                        <p>I also experience in constructing back-end development with cloud computings.</p>
                    </div>
                    
            </li>
        </ul>
    </div>
   </section>
  )
}
