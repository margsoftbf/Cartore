import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import style from './Home.module.css';

export function Home() {
	return (
		<div className={`${style.Container}`}>
			<div className={`${style.homePage}`}>
				<div className={`${style.leftSection}`}>
					<h2 className={`${style.title}`}>
						Feel luxurious with <span>premium</span> quality{' '}
						<span>outfits</span>
					</h2>
					<p className={`${style.headerDesc}`}>
						With so muich demand for a style of board where every aspect of it
						flews, we created a new series
					</p>
					<NavLink className={`${style.navLink}`} to='/store'>
						Store <FontAwesomeIcon className={`${style.navLinkArrow}`} icon={faArrowRight} />
					</NavLink>
				</div>
				<div className={`${style.rightSection}`}>
					<img
						className={`${style.logoImg}`}
						src='../../../public/imgs/header-logo.png'
						alt='women'
					/>
				</div>
			</div>
		</div>
	);
}
