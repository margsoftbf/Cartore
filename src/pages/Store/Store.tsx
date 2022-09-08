import style from './Store.module.css';
import { StoreItem } from '../../components/StoreItem/StoreItem';
import storeItems from '../../data/items.json';
import { useState } from 'react';

export function Store() {
	const [data, setData] = useState(storeItems);

	const filterResult = (filterItem: string) => {
		const result = storeItems.filter((item) => {
			return item.category === filterItem;
		});
		setData(result);
	};

	const navLinkStyles = (isActive: any) => {
		return {
			color: isActive ? '#fff' : '#000',
			backgroundColor: isActive ? '#ce5e40' : '',
		};
	};

	return (
		<>
			<div className={`${style.storeContainer}`}>
				<h1 className={`${style.storeTitle}`}>Store</h1>
				<div className={`${style.categoryBox}`}>
					<button
						className={`${style.categoryBtn}`}
						onClick={() => setData(storeItems)}
					>
						All
					</button>
					<button
						className={`${style.categoryBtn}`}
						onClick={() => filterResult('Shoes')}
					>
						Shoes
					</button>
					<button
						className={`${style.categoryBtn}`}
						onClick={() => filterResult('Jacket')}
					>
						Jacket
					</button>
					<button
						className={`${style.categoryBtn}`}
						onClick={() => filterResult('T-shirt')}
					>
						T-shirt
					</button>
				</div>
				<div className={`${style.storeBoxes}`}>
					{data.map((item) => (
						<div className={`${style.storeBox}`} key={item.id}>
							<StoreItem {...item} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
