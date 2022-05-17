import React from "react";

const ProductsCards = ({ image, name, flavor, complement, price, onClick}) => {
	return (
		<div className='each-card'>
			<ul className='items'>
				<div className='image-item'>
					<img src={image} alt='Item' width={'60px'}></img>
				</div>
				<li className='item-name'>{name}</li>
				<section className='add-item'>
				<li  className='flavor' value='sabor'>Sabor: {flavor}</li>
				<li className='complement' name='complemento'>Complemento: {`${complement !== null ? complement : '' }`}</li>
				</section>
				<li>Preço: R${price}</li>
			</ul>
			<button className='add-btn' onClick={onClick}>Adicionar</button>
		</div>
	);
};

export default ProductsCards;