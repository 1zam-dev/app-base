import { Buy } from "../Buy";
import { Cart } from "../Cart";
import { Orders } from "../Orders";
import { Profile } from "../Profile";

export function User() {
  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}
