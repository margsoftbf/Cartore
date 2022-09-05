import style from './Store.module.css';
import { StoreItem } from '../../components/StoreItem/StoreItem';
import storeItems from '../../data/items.json';

export function Store() {
	return (
		<>
			<div className={`${style.storeContainer}`}>
				<h1 className={`${style.storeTitle}`}>Store</h1>

				<div className={`${style.storeBoxes}`}>
					{storeItems.map((item) => (
						<div className={`${style.storeBox}`} key={item.id}>
							<StoreItem {...item} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
