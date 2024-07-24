import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'

// Define routes
const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
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
