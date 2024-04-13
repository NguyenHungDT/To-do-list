let count = 0;
const time = "";
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let stringTask = `<div class="content_printTask borderCorner">
                    <div class="content_printTask-left">
                        <input type="checkbox" class="content_printTask-checkbox" onclick = "complete(this)"> 
                        <p class="content_printTask-task">Học lập trình web</p>
                    </div>
                    <i class="ti-close content_printTask-right" onclick = "closeFn(this)"></i>
                </div>`

const eleTime = document.getElementsByClassName("header_time");

// handle time
let funcTime = (time) => {
    let dayWeek, day, month, year;
    const d = new Date();
    dayWeek = d.getDay();
    day = d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear(); 
    time = week[dayWeek] + " " + day + ", " + month + ", " + year;
    return time;
}
eleTime[0].innerHTML = funcTime(time);

let btn, inp;
btn = document.getElementsByClassName("addTask");
btn[0].addEventListener("click", addTask);

inp = document.getElementsByClassName("Tasks");
inp[0].addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        addTask();
    }
})


function addTask(){
    let data, eleData;
    let eleText, elePrint;
    
    eleData = document.getElementsByClassName("Tasks");
    data = eleData[0].value;

    elePrint = document.getElementsByClassName("content_print");    

    if(data.length > 0){
        let numTask;
        elePrint[0].innerHTML += stringTask;

        eleText = document.getElementsByClassName("content_printTask-task");
        eleText[count].innerHTML = data;
        count++;
        numTask = document.getElementsByClassName("content_taskComplete-number")[0].innerHTML;
        numTask = Number(numTask);
        numTask++;
        document.getElementsByClassName("content_taskComplete-number")[0].innerHTML = numTask;
        eleData[0].value = "";
    }
}

function closeFn(obj){
    let check = obj.previousElementSibling.firstElementChild;
    let countTask = document.getElementsByClassName("content_taskComplete-number")[0].innerHTML;
    countTask = Number(countTask);
    if(check.checked == true){
        countTask++;
    }
    count--;
    countTask--;
    document.getElementsByClassName("content_taskComplete-number")[0].innerHTML = countTask;
    obj.parentNode.remove();
}


function complete(obj){
    let numTask = document.getElementsByClassName("content_taskComplete-number")[0].innerHTML;
    numTask = Number(numTask);
    if(obj.checked == true){
        numTask--;  
        document.getElementsByClassName("content_taskComplete-number")[0].innerHTML = numTask;
        obj.setAttribute("checked", "checked");
        obj.nextElementSibling.classList.add("textStrikeThrought");
    }
    else{
        numTask++;
        document.getElementsByClassName("content_taskComplete-number")[0].innerHTML = numTask;
        obj.nextElementSibling.classList.remove("textStrikeThrought");
        obj.removeAttribute("checked");
    }
} 
