import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone aboutText">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a passionate frontend developer enthusiast currently pursuing my
            B.Tech degree in the 7th semester at GGITS, Jabalpur. With a strong
            foundation in web development.
          </p>
          <p>
            My unwavering dedication to learning, particularly in the realm of
            Data Structures and Algorithms (DSA), drives my passion for
            technology. I possess a comprehensive tech stack that spans HTML,
            CSS, JavaScript, and React for frontend development. Additionally, I
            have expertise in SQL, Linux, C++, Python, UI/UX design, and even
            delve into the fascinating world of machine learning.
          </p>
          <p>
            I've had the privilege of gaining valuable industry experience
            through internships. Notably, I completed a rigorous 4-week
            internship at Amazon's ML Summer School, where I delved into the
            fascinating world of machine learning under the guidance of seasoned
            professionals. I also spent 7 weeks as an intern at Martian, a
            division of Persistent Systems, where I honed my practical skills in
            software development. Additionally, I dedicated a month to an
            enriching internship at Oasis Infobyte as a web developer, further
            refining my expertise in web technologies.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
          <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#007AFE" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#7A78FE" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
