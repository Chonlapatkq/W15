<template>
  <div class="about-us">
    <!-- Hero Section -->
    <section class="hero-section bg-info text-white text-center py-5">
      <div class="container">
        <h1 class="display-4 mb-3">About Us</h1>
        <p class="lead">เราเชี่ยวชาญในการจัดหาสิ่งมีชีวิตทางน้ำที่ดีที่สุดสำหรับตู้ปลาของคุณ</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-content py-5">
      <div class="container">
        <h2 class="text-center mb-4">Our Mission</h2>
        <p class="lead text-center">
          ที่ Kquaiam เรามีความมุ่งมั่นที่จะนำความงามของสัตว์น้ำมาสู่บ้านของคุณ ภารกิจของเราคือการนำเสนอสัตว์น้ำ ถัง และอุปกรณ์เสริมคุณภาพสูง ในขณะเดียวกันก็รับประกันความเป็นอยู่ที่ดีของสิ่งมีชีวิตทุกตัวที่เราขาย
        </p>

        <h3 class="mt-4">Our Story</h3>
        <p>
          Kquaiam ก่อตั้งขึ้นใน 1998 โดยเริ่มต้นจากร้านค้าเล็กๆ ที่มีภารกิจเดียว: เพื่อมอบสิ่งมีชีวิตทางน้ำที่ดีต่อสุขภาพและได้รับการดูแลอย่างดีแก่ผู้ชื่นชอบพิพิธภัณฑ์สัตว์น้ำ ในช่วงหลายปีที่ผ่านมา เราได้ขยายคอลเลกชันของเราให้ครอบคลุมถึงปลา ปะการัง พืช แท็งก์ และทุกสิ่งที่คุณต้องการเพื่อสร้างระบบนิเวศทางน้ำที่เจริญรุ่งเรือง
        </p>

        <div class="team-section mt-5">
          <h3 class="text-center">พบกับทีมของเรา</h3>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="teamMember in team" :key="teamMember.id">
              <div class="card">
                <img :src="require(`@/assets/${teamMember.image}`)" class="card-img-top" alt="Team Member">
                <div class="card-body">
                  <h5 class="card-title">{{ teamMember.name }}</h5>
                  <p class="card-text">{{ teamMember.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="mt-5 text-center">Our Services</h3>
        <p class="ข้อความศูนย์">
          เราให้คำแนะนำจากผู้เชี่ยวชาญในการจัดตั้งตู้ปลา การรักษาสภาพแวดล้อมที่ดี และการดูแลสัตว์เลี้ยงในน้ำของคุณ ตั้งแต่ถังน้ำจืดไปจนถึงถังน้ำเค็ม เรามีทุกสิ่งที่คุณต้องการเพื่อรักษาระบบนิเวศทางน้ำของคุณให้เจริญรุ่งเรือง
        </p>

        <h4 class="mt-5 text-center">Why Choose Us?</h4>
        <ul>
          <li>เราขายเฉพาะปลาและสัตว์น้ำคุณภาพสูงที่ดีต่อสุขภาพเท่านั้น</li>
          <li>คำแนะนำจากผู้เชี่ยวชาญจากนักเลี้ยงปลาและนักชีววิทยาทางทะเลที่ผ่านการฝึกอบรม</li>
          <li>ถัง อุปกรณ์เสริม และพืชน้ำมีให้เลือกมากมาย</li>
          <li>คำแนะนำการดูแลที่ครอบคลุมและการสนับสนุนสัตว์น้ำทุกชนิด</li>
          <li>Location</li>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31860.186146386488!2d-62.23648014550591!3d-3.4653049765779036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2z4Lib4LmI4Liy4LiU4Li04Lia4LiK4Li34LmJ4LiZ4LmB4Lit4Lih4Liw4LiL4Lit4LiZ!5e0!3m2!1sth!2sth!4v1731827576567!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      team: [
        {
          id: 1,
          name: 'Chonlapat Pratoom',
          role: 'NEO CEO',
          image: 'L1.jpg', // รูปภาพของสมาชิกทีม
        },
        {
          id: 1,
          name: 'John Doe',
          role: 'CEO & Founder',
          image: 'team1.jpg', // รูปภาพของสมาชิกทีม
        },
        {
          id: 2,
          name: 'Jane Smith',
          role: 'Aquatic Specialist',
          image: 'team2.jpg', // รูปภาพของสมาชิกทีม
        },
        {
          id: 3,
          name: 'Mark Johnson',
          role: 'Marine Biologist',
          image: 'team3.jpg', // รูปภาพของสมาชิกทีม
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background-color: #17a2b8; /* สีฟ้าอ่อน */
  color: white;
}

.hero-section h1 {
  font-size: 3.5rem;
}

.hero-section p {
  font-size: 1.25rem;
}

.about-content {
  background-color: #f8f9fa;
}

.about-content h2, .about-content h3, .about-content h4 {
  font-size: 2rem;
  color: #333;
}

.about-content p, .about-content ul {
  font-size: 1.125rem;
  line-height: 1.6;
}

.team-section .card {
  transition: transform 0.3s ease-in-out;
}

.team-section .card:hover {
  transform: scale(1.05);
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

ul {
  list-style-type: disc;
  margin-left: 2rem;
}
</style>
