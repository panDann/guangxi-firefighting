import {fetch} from '@/utils/fetch.js'

export const equipmentInfo = (tenantsId, token)=>{
    return fetch(`data/qeury/equipmentInfo`,{"tenantId": tenantsId}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}

export const patrolTask = (userId, tenantsId, token)=>{
    return fetch(`data/qeury/patrolTask`,{"userId": userId, "tenantsId": tenantsId}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}

export const warnToday = (tenantsId, token)=>{
    return fetch(`warnStatisitics/warnToday`,{"tenantsId": tenantsId}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}