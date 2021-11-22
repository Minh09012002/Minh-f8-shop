
var image = document.querySelector("#content_js");
var image1 = document.querySelector("#content_js-img");


var image2 = document.querySelector(".size_img-1")
var image3 = document.querySelector(".size_img-2")
var image4 = document.querySelector(".size_img-3")

image2.onclick= function(){
    image1.src = "./img/tải xuống.jpg";
}
image3.onclick= function(){
    image1.src = "./img/giay-domba-high-point-white-black-h-9111-mau-trang-5d73226cf1019-07092019102220.jpg";
}
image4.onclick= function(){
    image1.src = "./img/MG_5961.jpg";
}

var star1 = document.querySelector("#evaluate_star-icon-1")
var star2 = document.querySelector("#evaluate_star-icon-2")
var star3 = document.querySelector("#evaluate_star-icon-3")
var star4 = document.querySelector("#evaluate_star-icon-4")
var star5 = document.querySelector("#evaluate_star-icon-5")

star1.onclick= function(){
    star1.classList.toggle("color-star")
}
star2.onclick= function(){
    star2.classList.toggle("color-star")
}
star3.onclick= function(){
    star3.classList.toggle("color-star")
}
star4.onclick= function(){
    star4.classList.toggle("color-star")
}
star5.onclick= function(){
    star5.classList.toggle("color-star")
}

// đóng mở một modal
var btn = document.querySelector(".btn_js");
var modal = document.querySelector(".modal_js");
var closemodal = document.querySelector(".modal_close-js");
var modalOverlay = document.querySelector(".modal_overlay-js")

btn.onclick = function(){
     modal.classList.add('modal_open');
    modalOverlay.classList.add("modal_overlay-open");
    loginInput.focus();
}

closemodal.onclick =function(){
    modal.classList.remove('modal_open')
    modalOverlay.classList.remove('modal_overlay-open');
}

// đăng nhập bằng số điện thoại
/*
var numberCall = [
    '0379482055',
    '0366374714',
    '0385238132'
];

var pasword =[
    '123456',
    '654321',
    '567890'
];

var modalPasword = document.querySelector(".modal_pasword-js")
var modalContent = document.querySelector(".modal_content-js")
var loginInput = document.querySelector("#login_input-js")
var btnLogin = document.querySelector(".btn_login-js");
var btnLoginPasword = document.querySelector(".btn_login-pasword-js")
var modal = document.querySelector(".modal_js");
var inputPasword1 = document.querySelector("#modal_pasword-content-js-1")
var inputPasword2 = document.querySelector("#modal_pasword-content-js-2")
var inputPasword3 = document.querySelector("#modal_pasword-content-js-3")
var inputPasword4 = document.querySelector("#modal_pasword-content-js-4")
var inputPasword5 = document.querySelector("#modal_pasword-content-js-5")
var inputPasword6 = document.querySelector("#modal_pasword-content-js-6")
var noticeNumberCall = document.querySelector("#notice_wrong-pasword-js")

//sự kiện khi người dùng click vào nút thì hàm sẽ chạy
btnLogin.onclick = function(){
    comparedata();
}

btnLoginPasword.onclick = function(){
    paswordLogin();
}

// sự kiện khi người dùng nhấn enter thì hàm sẽ chạy
loginInput.onkeyup = function(e){
    if(e.which === 13){
         comparedata()
    }
}

inputPasword6.onkeyup = function(e){
    if(e.which === 13){
        paswordLogin();
    }
}

inputPasword1.onkeyup =function (e){
   switch(e.which){
        case 48 :
        case 49 :
        case 50 :
        case 51 :
        case 52 :
        case 53 :
        case 54 :
        case 55 :
        case 56 :
        case 57 :
        inputPasword2.focus();

   }
}
inputPasword2.onkeyup =function (e){
    switch(e.which){
        case 48 :
        case 49 :
        case 50 :
        case 51 :
        case 52 :
        case 53 :
        case 54 :
        case 55 :
        case 56 :
        case 57 :
         inputPasword3.focus();
    }
 }
 inputPasword3.onkeyup =function (e){
    switch(e.which){
        case 48 :
        case 49 :
        case 50 :
        case 51 :
        case 52 :
        case 53 :
        case 54 :
        case 55 :
        case 56 :
        case 57 :
         inputPasword4.focus();
    }
 }
 inputPasword4.onkeyup =function (e){
    switch(e.which){
        case 48 :
        case 49 :
        case 50 :
        case 51 :
        case 52 :
        case 53 :
        case 54 :
        case 55 :
        case 56 :
        case 57 :
         inputPasword5.focus();
    }
 }
 inputPasword5.onkeyup =function (e){
    switch(e.which){
        case 48 :
        case 49 :
        case 50 :
        case 51 :
        case 52 :
        case 53 :
        case 54 :
        case 55 :
        case 56 :
        case 57 :
         inputPasword6.focus();
    }
 }

// hàm so sánh dữ liệu
function comparedata(){
    var loginInputValue = loginInput.value;
    var noticeNumberCall = document.querySelector("#notice_wrong-call-js");
    var verificationCode = document.querySelector(".verification_code");
    numberCall.find((current, index)=>{
        if(current === loginInputValue){
            modalContent.style.display = "none";
            modalPasword.style.display = "block";
            modal.style.height = ' 26.125em';
            verificationCode.textContent = `${current}`;

        }else{
            noticeNumberCall.style.display = 'block';
        }
    })
    inputPasword1.focus();
}

// hàm nhập mật khẩu
function paswordLogin(){
    var arrayInputPasword = [];
    
    // thêm các input vao mảng
    arrayInputPasword.push(inputPasword1.value,inputPasword2.value,inputPasword3.value,inputPasword4.value,inputPasword5.value,inputPasword6.value);
    pasword.find((current, index) =>{
        if(current === arrayInputPasword.join("")){
            alert("bạn có muốn đi tới trang https://tiki.vn/ này không")
        }else{
            noticeNumberCall.style.display = 'block';
        }
        
    })
    inputPasword1.value = "";
    inputPasword2.value = "";
    inputPasword3.value = "";
    inputPasword4.value = "";
    inputPasword5.value = "";
    inputPasword6.value = "";
    // sau khi nhập xong thì focus lại thằng đầu
    inputPasword1.focus();
    loginInput.value = "";
    
}


// quay lại trang bắt đầu
var btnReturn = document.querySelector("#modal_return-js")
btnReturn.onclick = function(){
    modalContent.style.display = "block";
    modalPasword.style.display = "none";
     modal.style.height = ' 31.625em';
}

// lưu dữ liệu vào data khi người dùng nhập vào
var dataRegister = "http://localhost:3000/data"
 function savedata(data, callback){
    var options = {
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
   }
   
   fetch(dataRegister, options)
        .then(function(response){
            return response.json();
        })
        .then(function(e){
            console.log(e)
        })
    
 }

 // xử lý tạo from
 function handleRegister(){
    var createuserName = document.querySelector("#create_input-js");
    var createpasword = document.querySelector("#register_pasword-js");
    var retypepasword = document.querySelector("#register_pasword-retype-js");
    var btnCreate = document.querySelector("#btn_create-js");
    btnCreate.onclick = function(){
        var formdata = {
            numberphone : createuserName.value,
            pasword : createpasword.value,
            retypepasword : retypepasword.value
        }
        savedata(formdata)

        createuserName.value = "",
        createpasword.value = "",
        retypepasword.value = ""
    }
 }
 handleRegister();
 */