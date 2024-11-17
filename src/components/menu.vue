<template>
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <!-- โลโก้ -->
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src="../assets/logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
          ร้านค้าออนไลน์
        </a>
  
        <!-- เมนู -->
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 link-dark">Home</router-link></li>
          <li><router-link to="/products" class="nav-link px-2 link-dark">Products</router-link></li>
          <li><router-link to="/about" class="nav-link px-2 link-dark">About Us</router-link></li>
          <li><router-link to="/contact" class="nav-link px-2 link-dark">Contact</router-link></li>
        </ul>
  
        <!-- ปุ่ม Login และ Sign-up -->
        <div class="col-md-3 text-end">
          <router-link to="/login">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
          </router-link>
          <router-link to="/signup">
            <button type="button" class="btn btn-primary">Sign-up</button>
          </router-link>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu',
  }
  </script>
  
  <style scoped>
  /* การตกแต่ง Navbar */
  header {
    background-color: #f8f9fa;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  /* เมนูแต่ละลิงก์ */
  .nav-link {
    font-size: 16px; /* ขนาดตัวอักษร */
    font-weight: 500; /* ทำให้ข้อความหนาขึ้น */
    text-transform: uppercase; /* ทำให้ตัวอักษรเป็นตัวพิมพ์ใหญ่ทั้งหมด */
    transition: all 0.3s ease-in-out; /* เพิ่มการเปลี่ยนแปลงเมื่อ hover */
  }
  
  .nav-link:hover {
    color: #42b983; /* สีเมื่อ hover */
    text-decoration: none; /* เอาขีดเส้นใต้ในเมนู */
  }
  
  /* เพิ่มระยะห่างระหว่างเมนู */
  .navbar-nav .nav-item {
    margin-left: 20px;
  }
  
  .navbar-brand img {
    border-radius: 50%; /* ทำให้โลโก้เป็นวงกลม */
  }
  </style>
  