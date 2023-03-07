
const staff1El = document.getElementById('staff-1')
const staff2El = document.getElementById('staff-2')
const staff3El = document.getElementById('staff-3')
const staff4El = document.getElementById('staff-4')
const staff5El = document.getElementById('staff-5')
const staff6El = document.getElementById('staff-6')
const kabDetail = document.getElementById('kab')
const abiDetail = document.getElementById('abi')
const govDetail = document.getElementById('gov')
const sorDetail = document.getElementById('sor')
const anaDetail = document.getElementById('ana')
const sumDetail = document.getElementById('sum')
const allStaffs = [kabDetail, abiDetail, govDetail, sorDetail , anaDetail, sumDetail]

/* staff1 detail*/
staff1El.addEventListener('click', ()=>{
    reset(allStaffs)
    kabDetail.style.top="0"
}) 

/* staff2 detail*/
staff2El.addEventListener('click', ()=>{
    reset(allStaffs)
    abiDetail.style.top="0"
}) 

/* staff3 detail*/
staff3El.addEventListener('click', ()=>{
    reset(allStaffs)
    govDetail.style.top="0"
}) 
 
/* staff4 details*/
staff4El.addEventListener('click', ()=>{
    reset(allStaffs)
    sorDetail.style.top="0"
}) 

/* staff5 details*/
staff5El.addEventListener('click', ()=>{
    reset(allStaffs)
    anaDetail.style.top="0"
}) 

/* staff6 detail*/
staff6El.addEventListener('click', ()=>{
    reset(allStaffs)
    sumDetail.style.top="0"
}) 


function reset(staffs) {
    staffs.forEach ((staff)=>{
        staff.style.top="-1200px"
    })
}