import * as BaseAPI from './BaseAPI';

export const login = async (data) => {
    return await BaseAPI.postItem(AuthAPI.login, data)
}

export const adminLogin = async (data) => {
    return await BaseAPI.postItem(AuthAPI.adminLogin, data)
}

export const companyLogin = async (data) => {
    return await BaseAPI.postItem(AuthAPI.companyLogin, data)
}

export const resetPass = async (data) => {
    return await BaseAPI.postItem(AuthAPI.resetPass, data)
}

export const AuthAPI = {
    login: 'auths/login',
    adminLogin: 'auths/admin/login',
    companyLogin: 'auths/companies/login',
    resetPass: 'auths/reset'
}

const authServices = {
    ...login,
    ...adminLogin,
    ...companyLogin,
    ...resetPass
}

export default authServices;