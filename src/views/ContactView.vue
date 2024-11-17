<template>
  <div class="contact-us">
    <h1 class="page-title">ติดต่อผู้ดูแลร้านขายสัตว์น้ำ</h1>

    <div class="contact-form">
      <form>
        <!-- ชื่อผู้ติดต่อ -->
        <div class="form-group">
          <label for="name">ชื่อ:</label>
          <input type="text" id="name" placeholder="กรุณากรอกชื่อของคุณ" />
        </div>

        <!-- อีเมลผู้ติดต่อ -->
        <div class="form-group">
          <label for="email">อีเมล:</label>
          <input type="email" id="email" placeholder="กรุณากรอกอีเมลของคุณ" />
        </div>

        <!-- หมายเลขโทรศัพท์ -->
        <div class="form-group">
          <label for="phone">เบอร์โทรศัพท์:</label>
          <input type="tel" id="phone" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
        </div>

        <!-- ข้อความ -->
        <div class="form-group">
          <label for="message">ข้อความของคุณ:</label>
          <textarea id="message" placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ"></textarea>
        </div>

        <!-- ปุ่มส่งข้อความ -->
        <button type="submit">ส่งข้อความ</button>
      </form>
    </div>

    <!-- ข้อมูลการติดต่อเพิ่มเติม -->
    <div class="contact-info">
      <h2>ข้อมูลการติดต่อเพิ่มเติม</h2>
      <p><strong>ที่อยู่ร้าน:</strong> ป่าอเมซอน</p>
      <p><strong>เบอร์โทรศัพท์ร้าน:</strong> 0952861880</p>
      <p><strong>อีเมลร้าน:</strong> kaikung2015@gmail.com</p>
    </div>
  </div>
</template>

<style scoped>
.contact-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.contact-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 120px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.contact-info {
  margin-top: 40px;
  text-align: center;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
}
</style>
