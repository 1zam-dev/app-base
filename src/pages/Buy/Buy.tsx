import React, { useState } from "react";
import { useOrderProducts } from "../../application/orderProducts";
import { UserName } from "../../domain/user";
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";
import { OutlinedInput,TextareaAutosize,Button } from "@mui/material";
import  "./Buy.scss";

export function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const [name, setName] = useState<UserName>(user?.name ?? "");
  const [email, setEmail] = useState<Email>(user?.email ?? "");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  if (!user || !cart.products.length) return null;

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <span>Name :</span>
          <OutlinedInput
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </label>
        <label>
          <span>Email :</span>
          <OutlinedInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Address :</span>
          <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: 300 }}
          ></TextareaAutosize>
        </label>

        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Preparing an order..." : "Checkout"}
        </Button>
      </form>
    </section>
  );
}
