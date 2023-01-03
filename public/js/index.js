const xhr = new XMLHttpRequest()
const ajax_get = document.querySelector('#ajax_get')
const ajax_post = document.querySelector('#ajax_post')
const msg = document.querySelector('#msg')

// request ({ method : 'get', path : '/users/5', body:""}, callback)
const request = ({ method, path ,body}, callback) => {
    const host = 'http://localhost:3000'
    const xhr = new XMLHttpRequest()
    xhr.open(method, `${host}${path}`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(body))

    xhr.onload = () => {
        callback(xhr)
    }

}

ajax_get.addEventListener("click", () => {
    const view = (xhr) => {
        console.log(xhr)
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response)
        }
    }

    request({method : "get", path: "/users/1"}, (xhr) => {
        console.log("xhr",xhr.response)
        console.log("res",response)
    })

})

ajax_post.addEventListener("click", () => {
    request ({method : "post", path: "/users"},(response) => {
        console.log("xhr",xhr.response)
        console.log("res", response)
        
    })
})
    // xhr.open("get", "http://localhost:3000/users/5")
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // xhr.send()
    // // console.log("open :", xhr.open)
    // // console.log("set :", xhr.setRequestHeader)
    // // console.log("send :", xhr.send)

    // xhr.onload = () => {
    //     if(xhr.readyState === 4 && xhr.status === 200){
    //         console.log(xhr.response)
    //     }
    // }
// })

// ajax_post.addEventListener("click", () => {
//     xhr.open("post", "http://localhost:3000/users")
//     xhr.setRequestHeader("Content-Type", "application/json")
//     const data = {
//         userid :'choihwoong',
//         userpw :'1234',
//         username : 'hynn',
//         gender : "남자"
//     }
//     xhr.send(JSON.stringify(data))

//     console.log("open :", xhr.open)
//     console.log("set :", xhr.setRequestHeader)
//     console.log("send :", xhr.send)

//     xhr.onload = () => {
//         if (xhr.readyState === 4 && xhr.status === 200){
//             console.log(xhr.response)
//         }
//     }
// })