var slider=document.getElementById("myRange")
var output=document.getElementById("value")
var slider2=document.getElementById("myRange2")
var output2=document.getElementById("value2")
output.innerHTML=slider.value
slider.oninput= function(){
    output.innerHTML=this.value

}
slider2.oninput=function(){
    output2.innerHTML=this.value
}
slider.addEventListener("mousemove",function(){
    var x= slider.value
   
   
    var color='linear-gradient(90deg,rgb(117,252,117)'+x+'%,rgb(214,214,214)'+x+'%)'
    slider.style.background=color

})
slider2.addEventListener("mousemove",function(){
    var y=slider2.value
})

function calculate(){
    var weight=document.getElementById("myRange").value
    var height=document.getElementById("myRange2").value
     weight=parseFloat(weight)
     height=parseFloat(height)


     if (weight > 0 && height > 0) {
        var bmi = weight / ((height)) ** 2
        document.getElementById("result").innerHTML = `your BMI is ${bmi.toFixed(2)}`

        if (bmi < 18.5) {
            document.getElementById("category").innerHTML = "you are underweight"
            category.style.color="#3CB371"
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            document.getElementById("category").innerHTML = "you are normal weight"
              category.style.color="#ffc44d"
        }
       else {
           document.getElementById("category").innerHTML = "you are overweight"
            category.style.color="#D9534F"
         }

    }
    else {
        document.getElementById("result").innerHTML = "please enter valid weight and height"
        document.getElementById("category").innerHTML = ""
    }




}