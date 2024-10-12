let $ = document
let form = $.querySelector("form")
let paragraph = $.querySelector("p")
let meqdarAdd = $.getElementById("num1")
let btn = $.getElementById("btn")
let add = "100000"
let x;


form.addEventListener("submit" , e => {
    e.preventDefault()
})

btn.addEventListener("click" , () => {
    if (Number(meqdarAdd.value)) {
        add = meqdarAdd.value
        if (add && add > 0) {
            name1()
            meqdarAdd.value = ""
        }
    } else {
        alert("not avalble")
    }
    console.log(meqdarAdd)
})

function name1() {
    if (add < 12_000_000) {
        paragraph.innerHTML = "مالیات تعلق نمیگیرد"
    } else if (12_000_000 < add && add <= 16_500_000){
        x = add - 12_000_000
        x *= 0.1 
        paragraph.innerHTML = `مالیات شما ${separate(x)} تومان است`

    } else if (16_500_000 < add && add <= 27_000_000){
        x = add - 16_500_000
        x *= 0.15
        x += 450_000 // 10 درصد پله اول
        paragraph.innerHTML = `مالیات شما ${separate(x)} تومان است`

    }  else if (27_000_000 < add && add <= 40_000_000){
        x = add - 27_000_000
        x *= 0.20
        x += 450_000 // 10 درصد پله اول
        x += 1_575_000 // 15 درصد پله دوم
        paragraph.innerHTML = `مالیات شما ${separate(x)} تومان است`

    }   else if (40_000_000 < add){
        x = add - 40_000_000
        x *= 0.30
        x += 450_000 // 10 درصد پله اول
        x += 1_575_000 // 15 درصد پله دوم
        x += 2_600_000 // 20 درصد پله سوم 

        paragraph.innerHTML = `مالیات شما ${separate(x)} تومان است`
    } 
}

window.addEventListener("keyup" , function (e) {
    console.log(e)
    if (e.keyCode == 13) {
        if (add && add > 0) {
            name1()
            meqdarAdd.value = ""
        }
    }
}) 


function separate(Number) {
Number+= '';
Number= Number.replace(',', '');
x = Number.split('.');
y = x[0];
z= x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(y))
y= y.replace(rgx, '$1' + ',' + '$2');
return y+ z;
}