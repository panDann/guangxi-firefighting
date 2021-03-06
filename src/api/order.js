import {fetch} from '@/utils/fetch.js'

//工单列表
export const scomWorkOrderList = (token, transactorId, status, pageNum, pagesize)=>{
    let param = {}
    param.transactorId = transactorId
    console.log('-------bbb--------')
    console.log(typeof status == 'number')
    if(typeof status == 'number'){
        param.status = status
    }
    if(typeof pageNum == 'number'){
        param.pageNum = pageNum
    }
    if(typeof pagesize == 'number'){
        param.PageSize = pagesize
    }
    console.log(param)
    return fetch(`system/scomWorkOrderList/getList`,param, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}

//巡检计划列表
export const scomPatrolPlan = (token, tenantsId, patrolTaskType, cycle, topic, pageNum, pagesize)=>{
    console.log('-------ddd--------')
    let param = {}
    param.tenantsId = tenantsId
    if(typeof patrolTaskType == 'number'){
        param.patrolTaskType = patrolTaskType
    }
    if(typeof cycle == 'number'){
        param.cycle = cycle
    }
    if(typeof topic == 'string'){
        param.topic = topic
    }
    if(typeof pageNum == 'number'){
        param.pageNum = pageNum
    }
    if(typeof pagesize == 'number'){
        param.PageSize = pagesize
    }
    console.log(param)
    return fetch(`system/scom-patrol-plan/getList`,param, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}

//巡检计划详情
export const scomPatrolPlanDetails = (token, planid)=>{
    return fetch(`system/scom-patrol-plan/get`,{"id": planid}, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}

//巡检工单列表
export const scomPatrolTask = (token, transactorId, status, pageNum, pagesize)=>{
    let param = {}
    param.transactorId = transactorId
    console.log('-------aaa--------')
    console.log(typeof status == 'number')
    if(typeof status == 'number'){
        param.status = status
    }
    if(typeof pageNum == 'number'){
        param.pageNum = pageNum
    }
    if(typeof pagesize == 'number'){
        param.PageSize = pagesize
    }
    console.log(param)
    return fetch(`system/scomPatrolTask/getList`,param, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}

//巡检工单详情
export const scomPatrolTaskDetails = (token, taskid)=>{
    return fetch(`/system/scomPatrolTask/getTaskDetail`,{"id": taskid}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}

//巡检工单设备列表
export const getTaskEquipmentById = (token, taskid)=>{
    return fetch(`system/scomPatrolTask/getTaskEquipmentById`,{"id": taskid}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}

//巡检工单设备详情
export const getTaskEquipmentDetail = (token, deviceId)=>{
    return fetch(`/system/scomPatrolTask/getTaskEquipmentDetail`,{"id": deviceId}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}