// Call Elements
let states = document.querySelectorAll(".main div:last-of-type p");
let hours = document.querySelectorAll(".activity > div:last-of-type > div:last-of-type h1 span");
let lastHours = document.querySelectorAll(".activity > div:last-of-type > div:last-of-type p");

let userHours = [32, 10, 4, 4, 5, 2];
let userLastHours = [36, 8, 7, 5, 10, 2];
// Add Hours And Last Hours From The Array To Weakly State As First One Apeare
for (let i = 0; i < hours.length; i++) {
    hours[i].textContent = `${userHours[i]}`
    lastHours[i].innerHTML = `Last Week - <span>${userLastHours[i]}hrs`
}

states.forEach(function(state){
    state.addEventListener("click", function(){
        // Remove "active" Class From Every states Then Add It To The Clicked One
        states.forEach((state) => state.classList.remove("active"))
        this.classList.add("active")
        // Weakly Hours
        if (this.textContent == "Weekly") {
            for (let i = 0; i < hours.length; i++) {
                hours[i].textContent = `${userHours[i]}`
                lastHours[i].innerHTML = `Last Week - <span>${userLastHours[i]}hrs`
        }
        }
        // Daily Hours
        else if (this.textContent == "Daily") {
            for (let i = 0; i < hours.length; i++) {
                hours[i].textContent = `${Math.ceil(userHours[i] / 7)}`
                lastHours[i].innerHTML = `Last Day - <span>${Math.ceil(userLastHours[i] / 7)}hrs`
            }
        }
        // Monthly Hours
        else if (this.textContent == "Monthly"){
            for (let i = 0; i < hours.length; i++) {
                hours[i].textContent = `${Math.ceil(userHours[i] * 4)}`
                lastHours[i].innerHTML = `Last Day - <span>${Math.ceil(userLastHours[i] * 4)}hrs`
            }
        }
    })
})