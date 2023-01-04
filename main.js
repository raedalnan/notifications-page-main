const notification = document.querySelectorAll(".notification")
const dot = document.querySelectorAll(".dot")
const markRead = document.querySelector("#mark-read")

markRead.addEventListener("click" , ()=>{
    notification.forEach((e)=>{
        if(e.classList.contains("unread")){
            e.classList.remove("unread");
        }
    })
    dot.forEach((e)=>{
        e.classList.add("hidden")
    })
})
