const xhr = new XMLHttpRequest()
const ajax_get = document.querySelector('#ajax_get')
const msg = document.querySelector('#msg')

ajax_get.addEventListener("click", () => {
    xhr.open("get", "http://localhost:3000/users")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send()
    console.log("open :", xhr.open)
    console.log("open :", xhr.setRequestHeader)
    console.log("open :", xhr.send)

    xhr.onload = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response)
        }
    }
})

ajax_post_addEventListener("click", () => {
    xhr.open("post", "http://localhost:3000/users")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send('userid=choihwoong&username="hynn')
    console.log("open :", xhr.open)
    console.log("open :", xhr.setRequestHeader)
    console.log("open :", xhr.send)

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response)
        }
    }
})