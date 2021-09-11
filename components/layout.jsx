import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import classNames from 'classnames'


const name = 'Rohan Upadhyayula'
export const siteTitle = 'Rohan Upadhyayula'

export default function Layout({ children, home }) {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1"></meta>
        </Head>
        <header className={styles.header}>
            <Link href = {''}><a className = {styles.homeLink}>Rohan Upadhyayula</a></Link>
            {(1===2) && <div className = {styles.navItems}>
                <Link href = {''}><a>About</a></Link>
            </div>}
        </header>
        <main>{children}</main>
      </div>
    )
  }