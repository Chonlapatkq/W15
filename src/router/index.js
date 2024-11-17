import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue'
import ContactView from '@/views/ContactView.vue'
import Pro1 from '@/views/Pro1.vue';  // หน้า Product 1

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/products', component: ProductView },
  { path: '/contact', component: ContactView },
  {
    path: '/product/1',
    name: 'product-detail-1',
    component: Pro1,  // ไปที่ Pro1.vue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
