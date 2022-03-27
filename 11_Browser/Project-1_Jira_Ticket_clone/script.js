let addbtn=document.querySelector('.add-btn')
let modalcont=document.querySelector(".modal-cont")
let addflag=false

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