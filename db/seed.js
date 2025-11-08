import db from "#db/client";
import { createOrder } from "#db/queries/orders";
import { createOrderProduct } from "#db/queries/ordersProducts";
import { createProduct } from "#db/queries/products";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // Create 1 user
  const user = await createUser("superstar", "loves2shop");

  // Create 10 products
  for (let i = 1; i <= 10; i++) {
    await createProduct(
      "Product " + i,
      "Description " + i,
      Math.random() * 100,
    );
  }

  // User makes an order of 5 products
  const order = await createOrder(user.id, "7777-07-07");
  for (let i = 1; i <= 5; i++) {
    await createOrderProduct(order.id, i, i);
  }
}