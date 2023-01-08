const yearButtonEl = document.querySelectorAll('.list')
const listEl = document.querySelectorAll('.name-list')
let button
let year

/* opening the student list with the appropriate year button */
for (i = 0; i < yearButtonEl.length; i++) {
    yearButtonEl[i].addEventListener('click', function(e) {
        button = e.target.dataset.year
        for (i = 0; i < listEl.length; i++) {
            year = listEl[i].dataset.value
            if (year === button) {
                listEl[i].style.display="block"
            }
        }
    })
}

/* Closing the student list */
listEl.forEach((list)=>{
    list.addEventListener('click', ()=>{
        list.style.display="none"
    })
})