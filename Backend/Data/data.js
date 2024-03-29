import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234,8"),
      isAdmin: true,
    },
    {
      name: "basir",
      email: "user@example.com",
      password: bcrypt.hashSync("1234,8"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Wistern modern",
      category: "women clothes",
      image: "./images/a1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Titan",
      rating: "3.0",
      numReview: 10,
      description: "high quality clothes",
    },
    {
      name: "Abord modern",
      category: "women clothes",
      image: "./images/a2.jpg",
      price: 100,
      countInStock: 20,
      brand: "petter",
      rating: "4.0",
      numReview: 13,
      description: "high quality clothes",
    },
    {
      name: "Suits Wistern",
      category: "women clothes",
      image: "./images/a3.jpg",
      price: 190,
      countInStock: 0,
      brand: "America",
      rating: "3.8",
      numReview: 16,
      description: "high quality clothes",
    },
    {
      name: "Cotton modern",
      category: "women clothes",
      image: "./images/a4.jpg",
      price: 110,
      countInStock: 60,
      brand: "cotton",
      rating: "2.0",
      numReview: 8,
      description: "high quality clothes",
    },
    {
      name: "Eisten modern",
      category: "women clothes",
      image: "./images/a5.jpg",
      price: 150,
      countInStock: 90,
      brand: "fly",
      rating: "5.0",
      numReview: 20,
      description: "high quality clothes",
    },
    {
      name: "Itly modern",
      category: "women clothes",
      image: "./images/a6.jpg",
      price: 180,
      countInStock: 12,
      brand: "brock",
      rating: "4.5",
      numReview: 18,
      description: "high quality clothes",
    },
  ],
};

export default data;
