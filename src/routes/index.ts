import express from 'express';
import { AuthRoutes } from '../app/modules/auth/auth.route';
import { UserRoutes } from '../app/modules/user/user.route';
import { NotificationRoutes } from '../app/modules/ADMIN/Notification/notification.route';
import { PaymentRouter } from '../app/modules/Payment/Payment.route';
import { SettingRouter } from '../app/modules/Setting/SettingRouter';

const router = express.Router();

const apiRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },

  {
    path: '/notification',
    route: NotificationRoutes,
  },
  {
    path: '/payment',
    route:PaymentRouter ,
  },
  {
    path: '/setting',
    route:SettingRouter ,
  },
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;
