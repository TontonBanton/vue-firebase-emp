import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

// Define routes
const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/:employee_id', name: 'view-employee', component: ViewEmployee },
  { path: '/new', name: 'new-employee',component: NewEmployee },
  { path: '/edit/:employee_id', name: 'edit-employee', component: EditEmployee }
]

// Create and configure the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
