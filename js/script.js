console.log('hello');

filterObjects("all");

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show-filtered");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show-filtered")
    }
}

function addClass(element, name){
    var i,arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
  })


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoheight: true,
    nav: false,
    responsive: {
        1300: {
            items: 2.4
        },
        368: {
            items: 1.2,
            center: true,
            autoWidth: false,
        }
    }
})


function SendMail(){

  var email = document.getElementById('email_id');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  var a = document.getElementById("fullName").value;
  var b = document.getElementById("email_id").value;
  var d = document.getElementById("message").value;

  document.getElementById("validation").innerHTML = "";

  var params = {
    from_name : document.getElementById("fullName").value,
    EmailID : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }


  if ((a == null || a=="")) {
    document.getElementById("validation").innerHTML = "please fill out the form below";
    document.getElementById("validation").style.color = "red";
    document.getElementById("validation").style.fontSize = "smaller";
    }
  
  else if (!filter.test(email.value)) {
    document.getElementById("validation").innerHTML = "Please enter a valid Email";
    document.getElementById("validation").style.color = "red";
    document.getElementById("validation").style.fontSize = "smaller";
    email.focus;
  }
  
  else {
    emailjs.send("service_dny19xi","template_vcz6vi8", params).then(function (res){
    document.getElementById("validation").innerHTML = "Sent. Thank you!";
    document.getElementById("validation").style.color = "Green";
    document.getElementById("validation").style.fontSize = "smaller";
  })
  }
   
  
}

