import CartProduct from '../CartProduct/CartProduct';
import { Wrapper } from './Cart.styles';
import {CartProductType} from "../CartMain/CartMainStyles";
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";


type Props = {
  cartProducts: CartProductType[];
  addToCart: (clickedProduct: CartProductType) => void;
  removeFromCart: (id: string) => void;

};


const Cart: React.FC<Props> = ({ cartProducts, addToCart, removeFromCart }) => {

    const nav = useNavigate();

  const calculateTotal = (products: CartProductType[]) =>
    products.reduce((ack: number, product) => ack + product.amount * product.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartProducts.length === 0 ? <p>No products in cart.</p> : null}
      {cartProducts.map(product => (
        <CartProduct
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartProducts).toFixed(2)}</h2>
        <div className="buttons">
            <Button variant="outlined" onClick={() => nav('/checkout')}>
                Checkout
            </Button>
        </div>
    </Wrapper>
  );
};

export default Cart;


