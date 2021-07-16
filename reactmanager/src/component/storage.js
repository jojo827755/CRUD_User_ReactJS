const TODOS_STORAGE_KEY = "USER"

export default {

    get(todos = TODOS_STORAGE_KEY){
        return JSON.parse(localStorage.getItem(todos)) || []
    },
    set(todos,key = TODOS_STORAGE_KEY){
        localStorage.setItem(key,JSON.stringify(todos));
    }

}
