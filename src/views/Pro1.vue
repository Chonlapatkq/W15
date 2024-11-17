<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Whale Fish - ปลาวาฬ</h2>

    <div class="row justify-content-center">
      <!-- แสดงข้อมูลปลาวาฬและรูปภาพ -->
      <div class="col-md-8">
        <div class="card shadow-lg">
          <img src="@/assets/1.jpg" class="card-img-top" alt="Whale Fish" />
          <div class="card-body">
            <h5 class="card-title">ปลาวาฬ (Whale Fish)</h5>
            <p class="card-text">
              ปลาวาฬ (Whale Fish) เป็นสัตว์น้ำที่มีลักษณะพิเศษเฉพาะตัว มีขนาดใหญ่และสีสันสวยงาม
              เหมาะสำหรับการเลี้ยงในอควาเรียมขนาดใหญ่หรือในสภาพแวดล้อมที่มีการดูแลอย่างดี
            </p>

            <h6>สรรพคุณและประโยชน์:</h6>
            <ul>
              <li>ช่วยเพิ่มความสงบและสมดุลในสภาพแวดล้อมของคุณ</li>
              <li>มีลักษณะสวยงาม เหมาะกับการตกแต่งในพื้นที่อควาเรียม</li>
              <li>มีอายุยืนยาวและดูแลง่าย หากได้รับการดูแลอย่างเหมาะสม</li>
              <li>เพิ่มความสดชื่นให้กับบ้านหรือสำนักงานของคุณ</li>
            </ul>

            <h6>วิธีการดูแล:</h6>
            <p>
              ปลาวาฬเป็นสัตว์น้ำที่ต้องการการดูแลที่มีคุณภาพเพื่อให้สามารถเจริญเติบโตได้อย่างสมบูรณ์
              ควรให้ปลาในสภาพแวดล้อมที่สะอาดและมีน้ำที่มีคุณภาพ มีการให้อาหารที่เหมาะสม
              และควรตรวจสอบคุณภาพของน้ำอย่างสม่ำเสมอ
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <span class="text-muted">ราคา: 19.99$</span>
              <button class="btn btn-primary btn-sm">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pro1',
};
</script>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.container {
  max-width: 960px;
}
</style>
