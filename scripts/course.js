const courses = document.querySelector('#courses');
const credit = document.querySelector('#credits');
const all = document.querySelector('#all')
const wdd = document.querySelector('#wdd')
const cse = document.querySelector('#cse')
const certificates = [
    {type:"cse", courses: ["CSE110", "CSE111", "CSE210"], credit: 6
    },
    {type:"wdd", courses: ["WDD130", "WDD131"], credit: 4},
    {type: "all", courses:["CSE110", "CSE111", "CSE210", "WDD130", "WDD131"], credit: 10}
]

function removeChild(){
    while(courses.firstChild){
        courses.removeChild(courses.firstChild);
    }
}
function appendChild(id){
    certificates[id].courses.forEach(course => {
        let h4 = document.createElement('h4');
        h4.textContent = course;
        courses.appendChild(h4)
    });
    credit.textContent = certificates[id].credit;
}

all.addEventListener('click', () =>{
    removeChild();
    appendChild(2);
});
wdd.addEventListener('click', () =>{
    removeChild();
    appendChild(1);
});
cse.addEventListener('click', () =>{
    removeChild();
    appendChild(0);
});

appendChild(1);

