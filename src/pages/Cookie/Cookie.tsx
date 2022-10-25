import { contains } from "../../domain/cart";
import { Product } from "../../domain/product";
import { useAddToCart } from "../../application/addToCart";
import { useUserStorage, useCartStorage } from "../../services/storageAdapter";
import  "./Cookie.scss";
import { Toppings } from "./Toppings";
import { Paper, Button } from "@mui/material";

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const { addToCart } = useAddToCart();

  return (
    <Paper elevation={6}  className='cookie'>
      <span className="image">🍪</span>
      <span className='title'>{cookie.title}</span>
      <Toppings cookie={cookie} />

      {!!user && (
        <Button sx={{backgroundColor:'violet'}} variant="contained" size="small" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} ₽
        </Button>
      )}

      {contains(cart, cookie) && (
        <span className='contains'>In your cart</span>
      )}
    </Paper>
  );
}
