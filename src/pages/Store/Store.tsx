import style from './Store.module.css';
import { Row, Col } from 'react-bootstrap';
import { StoreItem } from '../../components/StoreItem/StoreItem';
import storeItems from '../../data/items.json';

export function Store() {
	return (
		<>
			<div className={`${style.storeContainer}`}>
				<h1>Store</h1>
				<Row md={3} xs={2} lg={5} className='g-3'>
					{storeItems.map((item) => (
						<Col key={item.id}>
							<StoreItem  {...item} />
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}
