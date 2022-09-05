import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Navbar = () => {
	const navLinkStyles = ({ isActive }) => {
		return {
			color: isActive ? '#fff' : '#000',
			backgroundColor: isActive ? '#ce5e40' : '',
		};
	};

	

	return (
		<div className={`${style.navbar}`}>
			<div className={`${style.navbarContainer}`}>
				<div className={`${style.navLogos}`}>
					<img src={logo} alt='Logo' className={`${style.navLogo}`} />
					<span>Cartore</span>
				</div>
				<div className={`${style.navLinks}`}>
					<NavLink className={`${style.navLink}`} style={navLinkStyles} to='/'>
						Home
					</NavLink>
					<NavLink
						className={`${style.navLink}`}
						style={navLinkStyles}
						to='/store'
					>
						Store
					</NavLink>
					<NavLink
						className={`${style.navLink}`}
						style={navLinkStyles}
						to='/about'
					>
						About
					</NavLink>
				</div>
				<div className='navCart'>
					<button className={`${style.btn}`}>
						{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 16 16'
						>
							{' '}
							<path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />{' '}
						</svg>
						<div className={`${style.btnItems}`}>3</div>
					</button>
				</div>
			</div>
		</div>
	);
};
