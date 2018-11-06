import Link from 'next/link';
import styled from 'styled-components';


const CartStyles = styled.div`
  padding: 2px 1px 0 1px;
`;

const Cart = () => (
  <CartStyles>
    <Link href="/cart">
      <a><img src="/static/images/cart.svg" alt="Cart" width="12" /></a>
    </Link>
  </CartStyles>
);

export default Cart;
