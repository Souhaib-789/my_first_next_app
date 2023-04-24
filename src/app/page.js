import React from "react"
import styles from './styles/home.module.css'
import Button from "./components/button/button"
import Image from "next/image"
import mainImage from './assets/image1.png'
import bgdot from './assets/image2.png'
import circle from './assets/circle1.png'
import rectangle from './assets/rectangle.png'
import client_a from './assets/google.png'
import client_b from './assets/airbnb.png'
import client_c from './assets/uber.png'
import client_d from './assets/amazon.png'
import service_a from './assets/box.png'
import service_b from './assets/code.png'
import service_c from './assets/wallet.png'
import service_d from './assets/chart.png'


export default function Home() {

  const services = [
    {
      id: 1,
      title: 'Business Idea Planning',
      desc: 'We present you a proposal and discuss niffty-gritty like',
      image: service_a,
      color: '#F1F7FF'
    },
    {
      id: 2,
      title: 'Development Website and App',
      desc: 'Communication protocols apart from engagement models',
      image: service_b,
      color: '#FFF2F8'
    },
    {
      id: 3,
      title: 'Financial Planning System',
      desc: 'Protocols apart from aengage models, pricing billing',
      image: service_c,
      color: '#FFF7E3'
    },
    {
      id: 4,
      title: 'Market Analysis Project',
      desc: 'Protocols apart from aengage models, pricing billing',
      image: service_d,
      color: '#DEFFEE'
    },
  ]

  return (
    <div style={{ paddingLeft: '70px' }}>

      <section id="home" className={styles.home_section}>
        <div className={styles.sub_home_section}>
          <div className={styles.initial_view}>
            <h1 className={styles.heading}>A Digital Product Agency</h1>
            <text className={styles.span}>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</text>
            <Button title={'Contact Now'} />
            <Image src={bgdot} className={styles.bg_dot_image} />
            <Image src={circle} className={styles.circle_bg_image} />
            <Image src={rectangle} className={styles.rectangle_bg_image} />
          </div>
          <Image src={mainImage} className={styles.image} />
        </div>
        <div className={styles.sub_home_section}>
          <div>
            <h1>Our Clients</h1>
            <text className={styles.span}>Several selected clients, who already believe in our service.</text>
          </div>
          <div className={styles.clients_image_view}>
            <Image src={client_a} className={styles.client_image} />
            <Image src={client_b} className={styles.client_image} />
            <Image src={client_c} className={styles.client_image} />
            <Image src={client_d} className={styles.client_image} />
          </div>
        </div>
      </section>



      <section id="services" className={styles.service_section}>
        <h1>How can we help your Business ?</h1>
        <text className={styles.span}>We build readymade websites, mobile applications, and elaborate online business services.</text>
      </section>
    </div>
  )
}
