let addbtn=document.querySelector('.add-btn')
let modalcont=document.querySelector(".modal-cont")
let addflag=false
let maincont=document.querySelector('.main-cont')

let colors=['lightpink','lightgreen','lightblue','black']
let modalPriorityColor=colors[colors.length-1]  //BLACK
let allprioritycolors=document.querySelectorAll('.priority-colors')

let taskareacont=document.querySelector('.textarea-cont')

let removbtn=document.querySelector('.remove-btn')
let rmvflag=false
addbtn.addEventListener('click',function(e){
    //Display the modal
    //addflag==true -> Modal Display
    //addflag==false -> Modal Hide
    addflag=!addflag

    if(addflag){
        modalcont.style.display='flex'
    }else{
        modalcont.style.display='none'
    }
})

// Changing priority colors
allprioritycolors.forEach(function(colorelem){
    colorelem.addEventListener('click',function(e){
        allprioritycolors.forEach(function(prioritycolorelem){
            prioritycolorelem.classList.remove('active')
        })
        colorelem.classList.add('active')

        modalPriorityColor=colorelem.classList[0]
    })
})

// generating ticket
modalcont.addEventListener('keydown',function(e){
    let key=e.key
    if(key=='Shift'){
        createTicket(modalPriorityColor,taskareacont.value)
        modalcont.style.display='none'
        addflag=false
        taskareacont.value= ''
    }
})

function createTicket(ticketkacolorclass,task ){
    let ticketcont=document.createElement('div')
    ticketcont.setAttribute('class', 'ticket-cont')
    ticketcont.innerHTML=`<div class="ticket-color ${ticketkacolorclass} "></div>
     <div class="ticket-id">${'#hyhgbyh'}</div>
     <div class="task-area" >${task}</div>
 </div>`

    maincont.appendChild(ticketcont)
    handleRemoval(ticketcont)

}

removbtn.addEventListener('click',function(){
    rmvflag=!rmvflag
    if (rmvflag==true){
        removbtn.style.color='red'
    }else{
        removbtn.style.color= ''
    }
})
function handleRemoval(ticket){
    ticket.addEventListener('click',function(){
        if(rmvflag==true){
            ticket.remove()
        }
    })
}



