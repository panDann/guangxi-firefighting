import {fetch} from '@/utils/fetch.js'


export const getCode = (phone)=>{
    return fetch(`sendCode/${phone}`,{},'GET')
}

export const login = (data)=>{
    return fetch(`login`,data,)
}