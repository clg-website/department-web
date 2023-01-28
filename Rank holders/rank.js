const stuYears = document.querySelectorAll('.stu-year');
const stuLists = document.querySelectorAll('.list')

stuYears.forEach((stuYear) => {
    stuYear.addEventListener('click', () => {
        yearValue = stuYear.dataset.year;
        setActiveYear(stuYear);

        stuLists.forEach((stuList) => {
            listValue = stuList.dataset.value;
            if (yearValue === listValue) {
                stuList.style.right="0"
            } else {
                stuList.style.right="-1150px";
            }
        })
    })
})

function setActiveYear(e) {
    for(let i = 0; i < stuYears.length; i++) {
        stuYears[i].classList.remove('active');
    }
    e.classList.add('active');
}