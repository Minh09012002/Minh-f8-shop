
// lấy dữ liệu từ thằng db.json
var dataRegister = "http://localhost:3000/data";
var dataRegister2 = "http://localhost:3000/datapasword";
var modalPasword = document.querySelector(".modal_pasword-js");
var modalContent = document.querySelector(".modal_content-js");
var loginInput = document.querySelector("#login_input-js");
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
var noticeNumberCall1 = document.querySelector("#notice_wrong-call-js");
var verificationCode = document.querySelector(".verification_code");
var createuserName = document.querySelector("#create_input-js");
var createpasword = document.querySelector("#register_pasword-js");
var retypepasword = document.querySelector("#register_pasword-retype-js");
var btnCreate = document.querySelector("#btn_create-js");
var  modalOverlay = document.querySelector(".modal_overlay-js")


// khi người dùng nhập vào ô input thì nó sẽ chuyển sang ô input khác
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
	// nút quay lại ô input bên trước
	if(e.which === 8){
		inputPasword1.focus()
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
	// nút quay lại ô iput bên trước
	if(e.which === 8){
		inputPasword2.focus()
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
	// nút quay lại ô input bên trước
	if(e.which === 8){
		inputPasword3.focus()
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
	// nút quay lại ô input bên trước
	if(e.which === 8){
		inputPasword4.focus()
	}
 }

fetch(dataRegister)
	.then(function(response){
		return response.json();
	})
	.then(function(e){
		loginInput.onkeyup = function(e){
			if(e.which === 13){
				comparedata();
			}  
		}
		btnLogin.onclick = function(){
			comparedata();
		};
		function comparedata(){
			for(var i  in e){
				if(e[i].numberphone === loginInput.value){
					modalContent.style.display = "none";
					modalPasword.style.display = "block";
					modal.style.height = ' 26.125em';
				}else{
					noticeNumberCall1.style.display = 'block';
				}
			}
			inputPasword1.focus();
		}
		// sự kiện khi người dùng nhấn enter thì hàm sẽ chạy
	fetch(dataRegister2)
		.then(function(response){
			return response.json();
		})
		.then(function(p){
			console.log(p)
				// bỏ hàm ở dưới vô
				btnLoginPasword.onclick = function(){
					paswordLogin();
				}
				inputPasword6.onkeyup = function(h){
					if(h.which === 13){
						paswordLogin();
					}else if(h.which === 8){ // nút quay lại o input bên trước
						inputPasword5.focus();
					}
				}
			function paswordLogin(){
				e.forEach((current, index) => {
					var arrayInputPasword = [];
					// thêm các input vao mảng
					arrayInputPasword.push(inputPasword1.value,inputPasword2.value,inputPasword3.value,inputPasword4.value,inputPasword5.value,inputPasword6.value);
					if(current.numberphone === loginInput.value){
						p.find((curr, index) =>{
							if(current.id === curr.id){
								if(curr.pasword === arrayInputPasword.join("")){
								
									alert("bạn đăng kí mua thành công")
									location.reload();
								}else{
									noticeNumberCall.style.display = 'block';
									inputPasword1.focus();
								}
								inputPasword1.value = "";
								inputPasword2.value = "";
								inputPasword3.value = "";
								inputPasword4.value = "";
								inputPasword5.value = "";
								inputPasword6.value = "";
							}
						})
					}
				});
			}
		})
	})

// quay lại trang bắt đầu
var btnReturn = document.querySelector("#modal_return-js")
btnReturn.onclick = function(){
 modalContent.style.display = "block";
 modalPasword.style.display = "none";
 modal.style.height = ' 31.625em';
}



// tạo tài khoản
// lưu dữ liệu số điện thoại hoặc email vào data khi người dùng nhập vào
var dataRegister = "http://localhost:3000/data"
 function savedata(data){
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
    
 }
 // lưu mật khẩu là datapasword khi người dùng nhập
 var dataRegister2 = "http://localhost:3000/datapasword"
 function savedata2(data2){
    var options2 = {
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data2)
   }
   
   fetch(dataRegister2, options2)
        .then(function(response){
            return response.json();
        })
 }

 // xử lý tạo from
 function handleRegister(){
	btnCreate.onclick = function(){
		saveRegister()
	}
	function saveRegister() {
		var formdata2 = {
			pasword : createpasword.value,
			retypepasword : retypepasword.value
		}
		var formdata = {
			numberphone : createuserName.value
		}
		savedata(formdata)
		savedata2(formdata2)

		createuserName.value = "",
		createpasword.value = "",
		retypepasword.value = ""

	// ẩn modal sau khi người dùng click vào tạo tài khoản
	//modal.classList.remove('modal_open');
	//modalOverlay.classList.remove("modal_overlay-open");
	//tải lại trang sau khi click
	setTimeout(() => {
		location.reload();
	}, 1000);
	}
	// tạo nút bấm enter tạo  tài khoản
	var retypepasword = document.querySelector("#register_pasword-retype-js");
	retypepasword.onkeyup = function(e){
		if(e.which === 13){
			console.log(e.which)
			saveRegister()
		}else if(e.which === 38){
			createpasword.focus();
		}
	}
 }
 handleRegister();
// xử lý sau khi nhập xong ô input thứ nhất bấm nút down hoặc enter nó sẽ xuống ô input thứ 26
createuserName.onkeyup = function(e){
	console.log(e.which)
	if(e.which === 40 || e.which === 13 ){
		createpasword.focus()
	}
}
createpasword.onkeyup = function(e){
	if(e.which === 40 || e.which === 13 ){
		retypepasword.focus()
	}else if(e.which === 38){
		createuserName.focus()
	}
} 


var createRegister = document.querySelector("#modal_request-js");
var modalRegister = document.querySelector(".modal_register-js");
function show(){
	createRegister.onclick = function(){
		modalContent.style.display = "none";
		modalRegister.style.display = 'block';
		createuserName.focus();
	}
}
show()

// quay lại trang đăng nhập
var btnReturnlogin = document.querySelector("#modal_request-rigister-js")
btnReturnlogin.onclick = function(){
 modalContent.style.display = "block";
 modalRegister.style.display = "none";
 modal.style.height = ' 31.625em';
}

