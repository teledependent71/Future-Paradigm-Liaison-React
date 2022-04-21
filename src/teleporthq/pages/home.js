import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Embarrassed Variable Salamander</title>
        <meta property="og:title" content="Embarrassed Variable Salamander" />
      </Helmet>
    </div>
  )
}

export default Home
