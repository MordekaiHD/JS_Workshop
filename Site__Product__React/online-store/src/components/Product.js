import React, { useState } from 'react';

const Product = ({ icon, name }) => {
  // Состояние для количества товара
  const [quantity, setQuantity] = useState(0);

  // Функция для увеличения количества
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Количество товара, отображаемое над иконкой */}
      {quantity > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}
        >
          {quantity}
        </div>
      )}
      
      {/* Иконка товара */}
      <div onClick={increaseQuantity}>
        <img src={icon} alt={name} style={{ width: '50px', height: '50px' }} />
      </div>
      
      <div>{name}</div>
    </div>
  );
};

export default Product;
