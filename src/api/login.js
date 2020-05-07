import {fetch} from '@/utils/fetch.js'


export const getCode = (phone)=>{
    return fetch(`sendCode/${phone}`,{},'GET')
}

export const login = (data)=>{
    return fetch(`login`,data,'POST',{'content-type':'application/x-www-form-urlencoded'})
}

export const checkToken = (token, tenantsId)=>{
    return fetch(`data/qeury/warnStatisitics`,{"tenantId": tenantsId}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}