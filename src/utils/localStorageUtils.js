export const localStorageDelete = (item) =>{
    localStorage.removeItem(item)
} 

export const localStorageUserCreate  = (userId) =>{
    localStorage.setItem("user", userId)
} 

export const LOCAL_STORAGE_USER = localStorage.getItem("user")
