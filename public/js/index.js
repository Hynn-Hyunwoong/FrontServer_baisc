const xhr = new XMLHttpRequest()
const ajax_get = document.querySelector('#ajax_get')
const msg = document.querySelector('#msg')

ajax_get.addEventListener("click", () => {
    xhr.open("get", "http://localhost:3000/users")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send()

    xhr.onload = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response)
        }
    }
})