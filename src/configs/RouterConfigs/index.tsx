const customerRouters = {
    profile: '/profiles',
    notifications: '/notifications',
    orders: '/orders',
    follows: '/follows',
    reivews: '/reviews',
}

const publicRouters = {
    home: '/',
    login: '/login',
    register: '/register',
    search: '/search',
}

const adminRouters = {
    home: '/admin',
    login: '/admin/login',
    shopMall: '/admin/ShopMall',
    category: '/admin/category',
    ranks: '/admin/ranks',
    manageAccount: '/admin/manageAccount',
    manageShop:'/admin/manageShop',
    manageBrand: '/admin/manageBrand',
    manageShippingMethod: '/admin/manageShippingMethod',
    managePaymentMethod: '/admin/managePaymentMethod',
}

const ShopRouters = {
    home: '/Shop',
    login: '/Shop/login',
    register: '/Shop/register',
    manageOrder: '/Shop/order',
    manageBus: '/Shop/bus',
    busDetail: '/Shop/bus/:id',
    ticket: '/Shop/ticket/:id',
    manageTicket: '/Shop/ticket',
    statistic: '/Shop/statistic',
    routeDetail: '/Shop/routeDetail',
    createRouteDetail: '/Shop/createRouteDetail',
    createTicket: '/Shop/createTicket',
    price: '/Shop/prices',
    priceClassification: '/Shop/priceClassification',
}

const RouterConfigs = {
    customerRouters,
    adminRouters,
    ShopRouters,
    publicRouters,
}

export default RouterConfigs;