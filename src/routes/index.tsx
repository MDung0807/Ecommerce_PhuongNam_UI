import configs from '../configs'
import {Account, Brand, Category, Home, PaymentMethod, Ranks, ShippingMethod, Shop} from '../pages/Admin'
import { AdminLayout } from '../layouts'
import { Login } from '../pages/Customer'

const privateRoutes = [
    {path: configs.adminRouters.manageAccount, component: Account, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageShop, component: Shop, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageBrand, component: Brand, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.home, component: Home, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.category, component: Category, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.ranks, component: Ranks, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageBrand, component:Brand, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.manageShippingMethod, component: ShippingMethod, layout: AdminLayout, private: true, roles: ['ADMIN']},
    {path: configs.adminRouters.managePaymentMethod, component:PaymentMethod, layout: AdminLayout, private: true, roles: ['ADMIN']},

]

const publicRoutes = [
    {path: configs.publicRouters.login, component: Login, layout: null, private: false, roles: []},

]

const routes = [
    ...privateRoutes,
    ...publicRoutes,
]

export default routes