import { useState } from 'react';
import { useQuery } from 'react-query';


import Cart from '../Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import { Wrapper, StyledButton } from '../App.styles';
import Product from "../Product/Product";
import {CartProductType} from "./CartMainStyles";


const getProducts = async (): Promise<CartProductType[]> =>
    await (await fetch('api/main')).json();

const CartMain = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([] as CartProductType[]);
    const { data, isLoading, error } = useQuery<CartProductType[]>(
        'products',
        getProducts
    );
    console.log(data);
    interface Props {}
    const getTotalProducts = (items: CartProductType[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedProduct: CartProductType) => {
        setCartProducts(prev => {
            // 1. Is the product already added in the cart?
            const isProductInCart = prev.find(item => item.id === clickedProduct.id);

            if (isProductInCart) {
                return prev.map(item =>
                    item.id === clickedProduct.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            // First time the product is added
            return [...prev, { ...clickedProduct, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartProducts(prev =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [] as CartProductType[])
        );
    };

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ...</div>;

    return (
        <Wrapper>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartProducts={cartProducts}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalProducts(cartProducts)} color='error'>
                    <AddShoppingCartIcon />
                </Badge>
            </StyledButton>
            <Grid container spacing={3}>
                {data?.map(product => (
                    <Grid item key={product.id} xs={12} sm={4}>
                        <Product product={product} handleAddToCart={handleAddToCart} />

                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default CartMain;
