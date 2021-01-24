import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'


const name = 'Rohan Upadhyayula';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.introContent}>
        <div className={styles.introText}>
          <p>Rohan is a Product Designer from
            San Jose, California.
          </p>
        <div>
        <div className={styles.contactText}>
            <h2 className = {styles.contact}>Contact</h2>
            <a href = "https://www.linkedin.com/in/rohan-upadhyayula-b37178146/"
            target="_blank" className = {styles.link}>LinkedIn</a>
            <a target="_blank" href = "mailto:rohan.upad123@gmail.com" className = {styles.link}>rohan.upad123@gmail.com</a>
      </div>
        </div>
        </div>
        <img className = {styles.homeImage} src = "/images/profile.jpg"/>
      </section>
      <section className = {styles.portfolio}>
        <h2 className = {styles.h2}>Portfolio</h2>
        <div className = {styles.portfolioItems}>
          <article className = {styles.portfolioItem}>
            <div id = "groupMeImg"className = {styles.itemImg}></div>
            <div className = {styles.itemContent}>
              <p className = {styles.itemTitle}>GroupMe Announcements Concept</p>
              <p className = {styles.itemBody}>Designing a new announcements feature to help users find high priority messages.</p>
              <a target="_blank" href = "https://rohanupadhyayula.medium.com/groupme-announcements-overcoming-the-infinite-scroll-6b0ac92e724b"
              className = {styles.caseButton}>VIEW CASE STUDY</a>
            </div>
          </article>
          <article className = {styles.portfolioItem}>
            <div id = "eatlyImg"className = {styles.itemImg}></div>
            <div className = {styles.itemContent}>
              <p className = {styles.itemTitle}>Eatly</p>
              <p className = {styles.itemBody}>Designing and prototyping a daily meal ordering web-app with React.js.</p>
              <a target="_blank" href = "https://rohanupadhyayula.medium.com/eatly-creating-a-daily-meal-ordering-tool-8860476e1b58"
              className = {styles.caseButton}>VIEW CASE STUDY</a>
            </div>
          </article>
          <article className = {styles.portfolioItem}>
            <div id = "mingleHallImg" className = {styles.itemImg}></div>
            <div className = {styles.itemContent}>
              <p className = {styles.itemTitle}>Mingle Hall</p>
              <p className = {styles.itemBody}>Designing a charades-based mobile app to help classmates meet each other
              during the pandemic.</p>
              <a target="_blank" href = "https://rohanupadhyayula.medium.com/mingle-hall-meeting-classmates-in-the-pandemic-age-8ca35fe13918"
              className = {styles.caseButton}>VIEW CASE STUDY</a>
            </div>
          </article>
        </div>
      </section>
      <div className={styles.spacer}>

      </div>
    </Layout>
  )
}