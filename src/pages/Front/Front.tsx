import { Product } from "../../domain/product";
import { useStore } from "../../store/store";
import { Cookie } from "../Cookie";
import  "./Front.scss";

export function Front() {
  const { cookies } = useStore();

  return (
    <main>
      <h1>Cookies</h1>

      <ul className='list'>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
