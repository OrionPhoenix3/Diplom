const LOCAL_STORAGE_LOADER = localStorage.getItem("showLoader");

export const LOCAL_STORAGE_USER = localStorage.getItem("user")

export const removeLocalStorage = (key) => {
    localStorage.removeItem(`${key}`)
}

export default LOCAL_STORAGE_LOADER


