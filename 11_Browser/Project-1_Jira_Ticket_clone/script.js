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

let toolBoxColors = document.querySelectorAll('.color')

let lockClass = 'fa-lock'
let unlockClass = 'fa-lock-open'

let ticketArr = [] // which store all the tickets object

// GET ALL TICKETS FROM LOCAL STORAGE

if(localStorage.getItem('tickets')){
    ticketArr=JSON.parse(localStorage.getItem('tickets'))
    ticketArr.forEach(function(ticket){
        createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId)
    })
}

// FILTER TICKETS WITH RESPECT TO COLORS

for (let i = 0; i < toolBoxColors.length; i++) {
    toolBoxColors[i].addEventListener('click', function (e) {
        let currentToolBoxColor = toolBoxColors[i].classList[0]
        // console.log(currentToolBoxColor)
        let filteredTickets = ticketArr.filter(function (ticketobj) {
            return currentToolBoxColor === ticketobj.ticketColor
        })

        //remove previous ticket
        let allTickets = document.querySelectorAll('.ticket-cont')
        for (let i = 0; i < allTickets.length; i++) {
            allTickets[i].remove()
        }

        filteredTickets.forEach(function (filteredobj) {
            createTicket(filteredobj.ticketColor, filteredobj.ticketTask, filteredobj.ticketId)
        })
    })

    toolBoxColors[i].addEventListener('dblclick', function (e) {
        let allTickets = document.querySelectorAll('.ticket-cont')
        for (let i = 0; i < allTickets.length; i++) {
            allTickets[i].remove()
        }

        ticketArr.forEach(function(ticketObj){
            createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketId)
        })


    })
}

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
        createTicket(modalPriorityColor, taskareacont.value,)
        modalcont.style.display = 'none'
        addflag = false
        taskareacont.value = ''
    }
})

function createTicket(ticketColor, ticketTask, ticketId) {

    let id = ticketId || shortid()

    let ticketcont = document.createElement('div')
    ticketcont.setAttribute('class', 'ticket-cont')
    ticketcont.innerHTML = `<div class="ticket-color ${ticketColor} "></div>
    <div class="ticket-id">#${id}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="lock-ticket"><i class="fa-solid fa-lock"></i></div>`

    maincont.appendChild(ticketcont)
    handleRemoval(ticketcont, id)

    handleLock(ticketcont)

    if (!ticketId) {
        ticketArr.push({ ticketColor, ticketTask, ticketId: id })
        localStorage.setItem('tickets', JSON.stringify(ticketArr))
    }





}

removbtn.addEventListener('click', function () {
    rmvflag = !rmvflag
    if (rmvflag == true) {
        removbtn.style.color = 'red'
    } else {
        removbtn.style.color = ''
    }
})
function handleRemoval(ticket, id) {
    ticket.addEventListener('click', function () {
        if (!rmvflag) return
        
        let idx=getTicketIdx(id) //idx

        //localStorage removal of ticket
        ticketArr.splice(idx, 1)
        let strTicketArray= JSON.stringify(ticketArr)
        localStorage.setItem('tickets' , strTicketArray)
        
        ticket.remove()
    })
}

// LOCK AND UNLOCK TICKETS

function handleLock(ticket , id) {
    let ticketLockElem = ticket.querySelector('.lock-ticket')
    let ticketTaskArea = ticket.querySelector('.task-area')

    let ticketLock = ticketLockElem.children[0]

    ticketLock.addEventListener('click', function (e) {
        let ticketIdx=getTicketIdx(id)
        if (ticketLock.classList.contains(lockClass)) {
            ticketLock.classList.remove(lockClass)
            ticketLock.classList.add(unlockClass)
            ticketTaskArea.setAttribute('contenteditable', 'true')
            handleBandColor(ticket)

        } else {
            ticketLock.classList.remove(unlockClass)
            ticketLock.classList.add(lockClass)
            ticketTaskArea.setAttribute('contenteditable', 'false')

        }

        ticketArr[ticketIdx].ticketTask=ticketTaskArea.innerText
        localStorage.setItem('tickets',JSON.stringify(ticketArr))
    })

}


function handleBandColor(ticket , id) {
    let ticketColorBand = ticket.querySelector('.ticket-color')
    ticketColorBand.addEventListener('click', function (e) {
        let currentTicketColor = ticketColorBand.classList[1]

        let ticketIdx=getTicketIdx(id)

        let currentTicketColoridx = colors.findIndex(function (color) {
            return currentTicketColor === color
        })

        currentTicketColoridx++

        let newTicketColoridx = currentTicketColoridx % colors.length
        let newTicketColor = colors[newTicketColoridx]

        ticketColorBand.classList.remove(currentTicketColor)
        ticketColorBand.classList.add(newTicketColor)
        ticketArr[ticketIdx].ticketColor=newTicketColor
        localStorage.setItem('tickets',JSON.stringify(ticketArr))
    })
}

function getTicketIdx(id){
    let ticketIdx=ticketArr.findIndex(function(ticketObj){
        return ticketObj.ticketIdn === id
    })

    return ticketIdx
}