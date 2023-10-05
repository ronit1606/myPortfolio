import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo" />
            {/* <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname = 'active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#3fb8ff' />
            </NavLink>
            <NavLink exact="true" activeclassname = 'active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#3fb8ff' />
            </NavLink>
            <NavLink exact="true" activeclassname = 'active' className="portfolio-link" to='/portfolio'>
                <FontAwesomeIcon icon={faSuitcase} color='#3fb8ff' />
            </NavLink>
            <NavLink exact="true" activeclassname = 'active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#3fb8ff' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ronit-punjwani ' >
                    <FontAwesomeIcon icon={faLinkedin} color='#3fb8ff' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/ronit1606'>
                    <FontAwesomeIcon icon={faGithub} color='#3fb8ff' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/ronit_1606/'>
                    <FontAwesomeIcon icon={faInstagram} color='#3fb8ff' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.codingninjas.com/studio/profile/rp16 '>
                    <FontAwesomeIcon icon={faCodepen} color='#3fb8ff' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar