<template>
  <div id="app">
    <!-- Header -->
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <!-- โลโก้ -->
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <!-- เมนู -->
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><router-link to="/" class="nav-link px-2 link-light">Home</router-link></li>
            <li><router-link to="/products" class="nav-link px-2 link-light">Products</router-link></li>
            <li><router-link to="/about" class="nav-link px-2 link-light">About Us</router-link></li>
            <li><router-link to="/contact" class="nav-link px-2 link-light">Contact</router-link></li>
          </ul>

          <!-- ฟอร์มค้นหา -->
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
          </form>

          <!-- ปุ่ม Login และ Sign-up -->
          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>

    <!-- ส่วนที่แสดงเนื้อหาของแต่ละหน้า -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* กำหนดสีของลิงก์ในเมนู */
.nav-link {
  color: #f8f9fa;
  text-decoration: none;
}

.nav-link:hover {
  color: #42b983; /* สีที่ใช้เมื่อ hover */
}

.router-link-exact-active {
  color: #42b983;
}
</style>
