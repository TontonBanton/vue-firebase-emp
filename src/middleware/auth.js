import { getAuth } from 'firebase/auth';

export const authMiddleware = (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const isAuthRequired = to.matched.some(routeInfo => routeInfo.meta.requiresAuth);
  const isGuestRequired = to.matched.some(routeInfo => routeInfo.meta.requiresGuest);

  if (isAuthRequired) {
    if (!user) {
      next({ path: '/login', query: { redirect: to.fullPath } });   // Redirect to login if not authenticated
    } else {
      next();                                                       // Proceed to the route if authenticated
    }
  } else if (isGuestRequired) {
    if (user) {
      next({ path: '/', query: { redirect: to.fullPath } });        // Redirect to dashboard if already authenticated
    } else {
      next();                                                       // Proceed to the route if not authenticated
    }
  } else {
    next();                                                         // Proceed to the route if no special conditions are applied
  }
};
