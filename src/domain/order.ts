import { totalPrice } from "./product";
import { Cart } from "./cart";
import { User } from "./user";
import { currentDatetime } from "src/core/lib/datetime";

export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export function createOrder(user: User, cart: Cart): Order {
  return {
    cart,
    user: user.id,
    status: "new",
    created: currentDatetime(),
    total: totalPrice(cart.products),
  };
}
