var date = new Date();
var todaydate = date.getDate();
//highlight the current day
        if(todaydate == 1){
            document.getElementById("d1").style.backgroundColor = "darkred";
        }
        if(todaydate == 2){
            document.getElementById("d2").style.backgroundColor = "darkred";
        }
        if(todaydate == 3){
            document.getElementById("d3").style.backgroundColor = "darkred";
        }
        if(todaydate == 4){
            document.getElementById("d4").style.backgroundColor = "darkred";
        }
        if(todaydate == 5){
            document.getElementById("d5").style.backgroundColor = "darkred";
        }
        if(todaydate == 6){
            document.getElementById("d6").style.backgroundColor = "darkred";
        }
        if(todaydate == 7){
            document.getElementById("d7").style.backgroundColor = "darkred";
        }
        if(todaydate == 8){
            document.getElementById("d8").style.backgroundColor = "darkred";
        }
        if(todaydate == 9){
            document.getElementById("d9").style.backgroundColor = "darkred";
        }
        if(todaydate == 10){
            document.getElementById("d10").style.backgroundColor = "darkred";
        }
        if(todaydate == 11){
            document.getElementById("d11").style.backgroundColor = "darkred";
        }
        if(todaydate == 12){
            document.getElementById("d12").style.backgroundColor = "darkred";
        }
        if(todaydate == 13){
            document.getElementById("d13").style.backgroundColor = "darkred";
        }
        if(todaydate == 14){
            document.getElementById("d14").style.backgroundColor = "darkred";
        }
        if(todaydate == 15){
            document.getElementById("d15").style.backgroundColor = "darkred";
        }
        if(todaydate == 16){
            document.getElementById("d16").style.backgroundColor = "darkred";
        }
        if(todaydate == 17){
            document.getElementById("d17").style.backgroundColor = "darkred";
        }
        if(todaydate == 18){
            document.getElementById("d18").style.backgroundColor = "darkred";
        }
        if(todaydate == 19){
            document.getElementById("d19").style.backgroundColor = "darkred";
        }
        if(todaydate == 20){
            document.getElementById("d20").style.backgroundColor = "darkred";
        }
        if(todaydate == 21){
            document.getElementById("d21").style.backgroundColor = "darkred";
        }
        if(todaydate == 22){
            document.getElementById("d22").style.backgroundColor = "darkred";
        }
        if(todaydate == 23){
            document.getElementById("d23").style.backgroundColor = "darkred";
        }
        if(todaydate == 24){
            document.getElementById("d24").style.backgroundColor = "darkred";
        }
        if(todaydate == 25){
            document.getElementById("d25").style.backgroundColor = "darkred";
        }
        if(todaydate == 26){
            document.getElementById("d26").style.backgroundColor = "darkred";
        }
        if(todaydate == 27){
            document.getElementById("d27").style.backgroundColor = "darkred";
        }
        if(todaydate == 28){
            document.getElementById("d28").style.backgroundColor = "darkred";
        }
        if(todaydate == 29){
            document.getElementById("d29").style.backgroundColor = "darkred";
        }
        if(todaydate == 30){
            document.getElementById("d30").style.backgroundColor = "darkred";
        }

// Ms.Kaur Version
console.log(date);
const month = date.getMonth();
console.log(month);
var nextmonth = month+1;
const yyyy = date.getFullYear();
console.log(yyyy);
const day = date.getDay();
console.log(day);


// const days_month = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(days_month);
const name_Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const day_Week = [0,1,2,3,4,5,6];
var month_number = [0,1,2,3,4,5,6,7,8,9,10,11];
console.log(month_number);
const namesMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



//display name of the month and year
const nameofmonth = document.querySelector(".calhead");

for (var n = 0; n<=11; n++){
    if(month_number[n] === month){
        nameofmonth.innerHTML = `<div>
        ${namesMonth[month]} ${yyyy}
        </div>`
    }
}

const nameofdays = document.querySelector(".daynames");
let nod = " ";
for (var j = 0; j<=6; j++){
    nod+= `<p class = 'dayname'> ${name_Days[j]} </p>`
    nameofdays.innerHTML = nod;
}

// var y = yyyy;
// if((y%4 === 0) && (y%100!==0) || (y%400===0)){

//     febDays = 29;
//     console.log(febDays);
//         console.log("Year : "+yyyy+ " "+" is a leap year");
// }
// else{
//     febDays = 28;
//     console.log(febDays);
//     console.log("Year : " +yyyy+" "+"is not a leap year");
// }

// const month = date.getMonth();
// var cur_month = month;
// if(month_number = 0 || 2 || 4 || 6 || 7 || 9 || 11){
//     var days_month = 31;
// }
// else if(month_number = 3 || 5 || 8 || 10){
//     var days_month = 30;
// }