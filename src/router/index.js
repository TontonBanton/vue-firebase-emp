import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth';
import Dashboard from '../components/Dashboard.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard, meta: {requiresAuth:true} },
  { path: '/:employee_id', name: 'view-employee', component: ViewEmployee, meta: {requiresAuth:true} },
  { path: '/new', name: 'new-employee',component: NewEmployee, meta: {requiresAuth:true} },
  { path: '/edit/:employee_id', name: 'edit-employee', component: EditEmployee, meta: {requiresAuth:true} },
  { path: '/login', name: 'login', component: Login, meta: {requiresGuest:true} },
  { path: '/register', name: 'register', component: Register, meta: {requiresGuest:true} },
]

// Create and configure the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
