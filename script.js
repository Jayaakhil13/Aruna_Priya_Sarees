// Sample product data
const products = [
  { name: "Crimson Bloom", id: "PRD001", price: 1999 },
  { name: "Emerald Grace", id: "PRD002", price: 2499 },
  { name: "Royal Indigo", id: "PRD003", price: 1799 },
  { name: "Golden Sand", id: "PRD004", price: 1499 },
  { name: "Peach Petal", id: "PRD005", price: 1899 },
  { name: "Midnight Teal", id: "PRD006", price: 2299 }
];

// Sample order data
const orders = [
  { id: "AP1023", price: 1999, status: "Delivered" },
  { id: "AP1045", price: 2499, status: "Delivered" },
  { id: "AP1078", price: 1799, status: "Delivered" },
  { id: "AP1102", price: 1499, status: "Delivered" }
];

// Render products to the grid
function renderProducts() {
  const grid = document.getElementById("productGrid");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.innerHTML = `
      <strong>${p.name}</strong><br>
      ID: ${p.id}<br>
      ₹${p.price}
    `;
    grid.appendChild(div);
  });
}

// Render orders to the orders section
function renderOrders() {
  const container = document.getElementById("orders");
  orders.forEach(o => {
    const div = document.createElement("div");
    div.className = "order-item";
    div.textContent = `Order #${o.id} | ₹${o.price} | ${o.status}`;
    container.appendChild(div);
  });
}

// Simulate login
function login() {
  alert("Login successful!");
}

// Initialize content
renderProducts();
renderOrders();
