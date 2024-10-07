import { getAuth } from 'firebase/auth';

export const authMiddleware = (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const isAuthRequired = to.matched.some(routeInfo => routeInfo.meta.requiresAuth);
  const isGuestRequired = to.matched.some(routeInfo => routeInfo.meta.requiresGuest);

  // Redirect to login if authentication is required and user is not authenticated
  if (isAuthRequired && !user) {
    return next({ path: '/login', query: { redirect: to.fullPath } });
  }

  // Redirect to dashboard if guest access is required and user is authenticated
  if (isGuestRequired && user) {
    return next({ path: '/', query: { redirect: to.fullPath } });
  }

  // Proceed to the route if no special conditions are applied
  next();
};
