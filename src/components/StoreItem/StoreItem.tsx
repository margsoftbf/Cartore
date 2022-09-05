import style from './StoreItem.module.css';
import { formatCurrency } from '../../utilities/formatCurrency';

type StoreItemProps = {
	id: number;
	name: string;
	category: string;
	description: string;
	price: number;
	imgUrl: string;
};

export function StoreItem({
	id,
	name,
	category,
	description,
	price,
	imgUrl,
}: StoreItemProps) {
	const quantity = 0;
	return (
		<div className={`${style.cardBox}`}>
			<div className={`${style.cardUpper}`}>
				<div className={`${style.cardBoxShadow}`}></div>
				<img className={`${style.cardBoxImg}`} src={imgUrl} />
				<span className={`${style.cardBoxCategory}`}>{category}</span>
			</div>
			<div className={`${style.cardBody}`}>
				<div className={`${style.cardTitleBox}`}>
					<span className={`${style.cardTitle}`}>{name}</span>
					<span className={`${style.cardDesc}`}>{description}</span>
					<span className={`${style.cardPrice}`}>{formatCurrency(price)}</span>
				</div>
				<div className={`${style.buttonBox}`}>
					{quantity === 0 ? (
						<button className={`${style.btnAddToCart} ${style.btn}`}>
							Add To Cart
						</button>
					) : (
						<div className={`${style.removeBox}`}>
							<div className={`${style.removeBoxBtns}`}>
								<button className={`${style.btnIncrease} ${style.btnChange}`}>+</button>
								<div className={`${style.cartValue}`}>
									<span className={`${style.cartQuantity}`}>{quantity}</span> in cart
								</div>
								<button className={`${style.btnDecrease} ${style.btnChange}`}>-</button>
							</div>
							<button className={`${style.btnRemoveFromCart} ${style.btn}`}>
								Remove
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
