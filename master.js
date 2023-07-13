let inputemail = document.querySelector("input")
let emaillabels = document.querySelector(".emaillabel")
let btn = document.querySelector(".btn")
let validReq = document.querySelector(".validrequired")
let inputcard = document.querySelector(".card")
btn.addEventListener("click", validationEmail)

function validationEmail() {
  let validReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (inputemail.value.match(validReg)) {
    let validCard
    validCard = document.createElement("div")
    validCard.classList.add("confirm")
    validCard.innerHTML = `<div class="thanks">
            <img src="./assets/images/icon-success.svg" alt="">
            <h1>Thanks for subscribing</h1>
            <p>A confirmation email has been sent to <strong>${inputemail.value}</strong>.
                Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <div class="dismissbtn" onClick=backbtn() >Dismiss message</div>`
    document.body.appendChild(validCard)
    inputcard.style.display = "none"

  } else {
    validReq.style.display = "block"
    inputemail.style.cssText = "border: 1px solid var(--Tomato); color: var(--Tomato); background-color: rgba(252, 121, 121, 0.075);"
  }
}

function backbtn() {
  location.reload()
}

