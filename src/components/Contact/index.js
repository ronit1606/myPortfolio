import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xzdhbw7',
        'template_hdth3sd',
        form.current,
        'HWHDAQM2uRUnUYHkd'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Email sent!')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="from_name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
            Ronit Punjwani,
            <br />
            274/d, Shastri vihar, Trimurti Nagar <br />
            Jabalpur <br />
            <span>ronitpunjwani16t@gmail.com</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[23.196889211025358, 79.92425894140821]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[23.196889211025358, 79.92425894140821]} >
                    <Popup>Ronit lives here, Come over for a cup of coffee :) </Popup>
                </Marker>

            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
