import { useLocation } from 'react-router-dom';

function ProductsInfo() {

  const location = useLocation();
  const { product } = location.state;

  return (
    <div class="products__info">
      <img src={product.image} alt={product.title} className="products__info__img" />
      <svg class="products__info__left" width="47.000000" height="47.000000" viewBox="0 0 47 47" fill="none"
        xmlns="http://www.w3.org/2000/svg" >
        <defs>
          <clipPath>
            <rect width="30.000000" height="30.000000" transform="translate(8.500000 8.500000)" fill="white"
              fill-opacity="0" />
          </clipPath>
        </defs>
        <path d="M0 0L47 0L47 47L0 47L0 0Z" fill="#2A2A2A" fill-opacity="0.150000" fill-rule="evenodd" />
        <rect width="30.000000" height="30.000000" transform="translate(8.500000 8.500000)" fill="#FFFFFF"
          fill-opacity="0" />
        <g clip-path="url(#clip69_441)">
          <path id="Vector" d="M29.69 15.75L21.94 23.5L29.69 31.25L28.14 34.34L17.29 23.5L28.14 12.64L29.69 15.75Z"
            fill="#000000" fill-opacity="1.000000" fill-rule="nonzero" />
        </g>
      </svg>
      <svg class="products__info__right" width="47.000000" height="47.000000" viewBox="0 0 47 47" fill="none"
        xmlns="http://www.w3.org/2000/svg" >
        <defs>
          <clipPath>
            <rect width="30.000000" height="30.000000" transform="translate(8.500000 8.500000)" fill="white"
              fill-opacity="0" />
          </clipPath>
        </defs>
        <path d="M0 0L47 0L47 47L0 47L0 0Z" fill="#2A2A2A" fill-opacity="0.150000" fill-rule="evenodd" />
        <rect width="30.000000" height="30.000000" transform="translate(8.500000 8.500000)" fill="#FFFFFF"
          fill-opacity="0" />
        <g clip-path="url(#clip69_441)">
          <path id="Vector2" d="M29.69 15.75L21.94 23.5L29.69 31.25L28.14 34.34L17.29 23.5L28.14 12.64L29.69 15.75Z"
            fill="#000000" fill-opacity="1.000000" fill-rule="nonzero" />
        </g>
      </svg>
    </div>
  );
}

export default ProductsInfo;