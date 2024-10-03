import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware  } from '../middleware/auth';
import Dashboard from '../components/Dashboard.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard,
    meta: {requiresAuth:true}
  },
  { path: '/:empid', name: 'view-employee', component: ViewEmployee,
    meta: {requiresAuth:true}
  },
  { path: '/new', name: 'new-employee', component: NewEmployee,
    meta: {requiresAuth:true}
  },
  { path: '/edit/:empid', name: 'edit-employee', component: EditEmployee,
    meta: {requiresAuth:true}
  },
  { path: '/login', name: 'login', component: Login,
    meta: {requiresGuest:true}
  },
  { path: '/register', name: 'register', component: Register,
    meta: {requiresGuest:true}
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//Navigataion guard - user authentications
router.beforeEach(authMiddleware)

export default router
