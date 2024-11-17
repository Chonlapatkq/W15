<template>
   <div class="home-page">
    <!-- Hero Section with Nature Theme -->
    <section class="hero-section bg-nature text-center py-5">
      <div class="container">
        <h1 class="display-4 mb-3">Welcome to Our Store</h1>
      </div>
    </section>

    <!-- Featured Products Section (Best Sellers & Discounted Products Combined) -->
    <section class="featured-products my-5">
      <h2 class="text-center mb-4">Featured Products</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div class="col" v-for="product in allProducts" :key="product.id">
          <div class="card shadow-sm">
            <img :src="require(`@/assets/${product.image}`)" class="card-img-top" alt="Product image">
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <div class="d-flex justify-content-center align-items-center">
                <span class="text-muted mr-2" v-if="product.originalPrice">${{ product.originalPrice }}</span>
                <span class="text-danger">${{ product.price }}</span>
              </div>
              <button class="btn btn-primary btn-sm mt-3">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      // รวมสินค้าขายดีและสินค้าลดราคาใน array เดียว
      allProducts: [
        { id: 1, name: 'Product 1', description: 'This is a description of Product 1', price: 19.99, image: '1.jpg' },
        { id: 2, name: 'Product 2', description: 'This is a description of Product 2', price: 29.99, image: '2.jpg' },
        { id: 3, name: 'Discounted Product 1', description: 'This is a discounted product', originalPrice: 49.99, price: 39.99, image: '3.jpg' },
        { id: 4, name: 'Discounted Product 2', description: 'This is another discounted product', originalPrice: 79.99, price: 59.99, image: '4.png' },
      ]
    };
  }
};
</script>

<style scoped>
/* Hero Section with Nature-Inspired Theme */
.hero-section {
  background: linear-gradient(135deg, #98d0a4, #3b7c5c); /* สีเขียวมะนาวกับเขียวเข้ม */
  color: white;  /* กำหนดตัวอักษรให้เป็นสีขาว */
  position: relative;
}

/* เพิ่มการจัดแต่งหัวข้อ (h1) */
.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: white; /* ใช้สีขาวสำหรับข้อความ */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);  /* เพิ่มเงาให้ตัวอักษรเพื่อให้โดดเด่น */
}

.hero-section p {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);  /* สีขาวลดความทึบเล็กน้อย */
}

/* เพิ่มไอคอนใบไม้ (Optional) */
.hero-section::before {
  content: url('https://upload.wikimedia.org/wikipedia/commons/7/74/Leaf_icon.svg'); /* ตัวอย่าง icon ใบไม้ */
  position: absolute;
  left: 10px;
  bottom: -30px;
  opacity: 0.2;
  width: 50px;
  height: 50px;
}

/* Hero Section */
.hero-section {
  background-color: #f0f8ff; /* Light Blue Background */
  color: #333;
}

.hero-section .display-4 {
  font-size: 3rem;
}

.hero-section .lead {
  font-size: 1.25rem;
  color: #555;
}

/* Featured Products Section */
.featured-products {
  padding: 2rem 0;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
  color: #777;
}

.card-body .text-muted {
  text-decoration: line-through;
}

.card-body .text-danger {
  font-size: 1.2rem;
  color: #e74c3c;
}

/* Buttons */
.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-sm {
  padding: 0.4rem 1rem;
  font-size: 0.875rem;
}

</style>
