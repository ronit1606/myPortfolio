import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
import Loader from 'react-loaders';
import sideHome from '../../assets/images/developer1.jpg'


const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['o', 'n', 'i', 't', ',']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
          setletterClass('text-animate-hover')  
        }, 4000)

        return () =>{
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer / Software Engineer / Student</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
                <a href="Ronit_Punjwani_Resume.pdf" download>
                    <button className='flat-button btn2'>View Resume</button>
                </a>
            </div>
            <div className="gif-container">
                <img src={sideHome} alt="" />
            </div>
            {/* <Logo /> */}
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home