let addbtn = document.querySelector('.add-btn')
let modalcont = document.querySelector(".modal-cont")
let addflag = false
let maincont = document.querySelector('.main-cont')

let colors = ['lightpink', 'lightgreen', 'lightblue', 'black']
let modalPriorityColor = colors[colors.length - 1]  //BLACK
let allprioritycolors = document.querySelectorAll('.priority-colors')

let taskareacont = document.querySelector('.textarea-cont')

let removbtn = document.querySelector('.remove-btn')
let rmvflag = false

let lockClass='fa-lock'
let unlockClass='fa-lock-open'

addbtn.addEventListener('click', function (e) {
    //Display the modal
    //addflag==true -> Modal Display
    //addflag==false -> Modal Hide
    addflag = !addflag

    if (addflag) {
        modalcont.style.display = 'flex'
    } else {
        modalcont.style.display = 'none'
    }
})

// Changing priority colors
allprioritycolors.forEach(function (colorelem) {
    colorelem.addEventListener('click', function (e) {
        allprioritycolors.forEach(function (prioritycolorelem) {
            prioritycolorelem.classList.remove('active')
        })
        colorelem.classList.add('active')

        modalPriorityColor = colorelem.classList[0]
    })
})

// generating ticket
modalcont.addEventListener('keydown', function (e) {
    let key = e.key
    if (key == 'Shift') {
        createTicket(modalPriorityColor, taskareacont.value, shortid())
        modalcont.style.display = 'none'
        addflag = false
        taskareacont.value = ''
    }
})

function createTicket(ticketkacolorclass, task, ticketId) {
    let ticketcont = document.createElement('div')
    ticketcont.setAttribute('class', 'ticket-cont')
    ticketcont.innerHTML = `<div class="ticket-color ${ticketkacolorclass} "></div>
    <div class="ticket-id">#${ticketId}</div>
    <div class="task-area">${task}</div>
    <div class="lock-ticket"><i class="fa-solid fa-lock"></i></div>`

    maincont.appendChild(ticketcont)
    handleRemoval(ticketcont)

    handleLock(ticketcont)

    

}

removbtn.addEventListener('click', function () {
    rmvflag = !rmvflag
    if (rmvflag == true) {
        removbtn.style.color = 'red'
    } else {
        removbtn.style.color = ''
    }
})
function handleRemoval(ticket) {
    ticket.addEventListener('click', function () {
        if (rmvflag == true) {
            ticket.remove()
        }
    })
}

// LOCK AND UNLOCK TICKETS

function handleLock(ticket){
    let ticketLockElem= ticket.querySelector('.lock-ticket')
    let ticketTaskArea= ticket.querySelector('.task-area')

    let ticketLock=ticketLockElem.children[0]

    ticketLock.addEventListener('click', function(e){
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass)
            ticketLock.classList.add(unlockClass)
            ticketTaskArea.setAttribute('contenteditable' , 'true')
            handleBandColor(ticket)

        }else{
            ticketLock.classList.remove(unlockClass)
            ticketLock.classList.add(lockClass)
            ticketTaskArea.setAttribute('contenteditable' , 'false')

        }
    })

}


function handleBandColor(ticket){
    let ticketColorBand=ticket.querySelector('.ticket-color')
    ticketColorBand.addEventListener('click' , function(e){
        let currentTicketColor= ticketColorBand.classList[1]

        let currentTicketColoridx=colors.findIndex(function(color){
            return currentTicketColor === color
        })
        
        currentTicketColoridx++

        let newTicketColoridx=currentTicketColoridx%colors.length
        let newTicketColor = colors[newTicketColoridx]

        ticketColorBand.classList.remove(currentTicketColor)
        ticketColorBand.classList.add(newTicketColor)
    })
}