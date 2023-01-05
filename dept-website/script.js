const uniEl = document.getElementById('uni')
const deptEl = document.getElementById('dept')
const fullUniModal = document.querySelector('.full-uni-his')
const fullDeptModal = document.querySelector('.full-dept-his')

/* university modal */
uniEl.addEventListener('click', ()=>{
    fullUniModal.style.display="flex"
})

fullUniModal.addEventListener('click', ()=>{
    fullUniModal.style.display="none"
})

/* Department modal */
deptEl.addEventListener('click', ()=>{
    fullDeptModal.style.display="flex"
})

fullDeptModal.addEventListener('click', ()=>{
    fullDeptModal.style.display="none"
})