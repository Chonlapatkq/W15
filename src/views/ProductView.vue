<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Our Products</h2>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <!-- แสดงสินค้าจากอาร์เรย์ -->
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card shadow-sm">
          <!-- กำหนดขนาดของรูปภาพให้เท่ากัน -->
          <img :src="require(`@/assets/${product.image}`)" class="card-img-top" alt="Product image">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-muted">${{ product.price }}</span>
              <button class="btn btn-primary btn-sm">Add to Cart</button>
              <!-- ปุ่มดูรายละเอียด -->
              <router-link :to="`/product/${product.id}`" class="btn btn-secondary btn-sm">View Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          description: "นี้คือปลาวาฬ",
          price: 19.99,
          image: "1.jpg"  // รูปภาพชื่อ 1.jpg
        },
        {
          id: 2,
          name: "Product 2",
          description: "นี้คือปลาโลมา",
          price: 29.99,
          image: "2.jpg"  // รูปภาพชื่อ 2.jpg
        },
        {
          id: 3,
          name: "Product 3",
          description: "นี้คือฉลาม.",
          price: 39.99,
          image: "3.jpg"  // รูปภาพชื่อ 3.jpg
        },
        {
          id: 4,
          name: "Product 4",
          description: "น้ำคือหมึกยักษ์",
          price: 49.99,
          image: "4.png"  // รูปภาพชื่อ 4.png
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

/* กำหนดขนาดของรูปภาพให้เหมือนกัน */
.card-img-top {
  height: 200px; /* กำหนดความสูง */
  width: 100%; /* กำหนดความกว้างให้เต็มที่ */
  object-fit: cover; /* ใช้การครอบรูปเพื่อให้ภาพไม่บิดเบือน */
}
</style>
