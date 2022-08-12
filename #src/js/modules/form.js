// Password - valid ================
let inputChange = function () {
	let inputAll = document.querySelectorAll(".password__input");
	let controlPassAll = document.querySelectorAll(".password__eye");
	inputAll.forEach(item => {
		item.addEventListener("input", addEye);
	});
	controlPassAll.forEach(item => {
		item.addEventListener("click", clickEye);
	});

	function addEye() {
		let box = this.closest(".input-signUp__box"),
			eye = box.querySelector(".password__eye"),
			passConfirm = document.querySelector("#confirm-password");
		if (
			this.value != "" &&
			eye &&
			!eye.classList.contains("_icon-eye-blocked")
		) {
			eye.classList.add("_icon-eye");
		} else if (this.value == "" && eye) {
			if (eye.classList.contains("_icon-eye"))
				eye.classList.remove("_icon-eye");
			else if (eye.classList.contains("_icon-eye-blocked") && eye) {
				eye.classList.remove("_icon-eye-blocked");
				this.type = "password";
				passConfirm.type = "password";
			}
		}
		passValid(passConfirm);
	}
	function passValid(passConfirm) {
		let pass = document.querySelector("#password"),
			check = document.querySelector(".password__check"),
			text = document.querySelector(".password__text");

		if (pass.value && passConfirm.value) {
			if (passConfirm.value == pass.value) {
				if (passConfirm.classList.contains("_valid-no")) {
					passConfirm.classList.remove("_valid-no");
					passConfirm.classList.add("_valid-yes");
					check.classList.add("_icon-check-mail");
				}
			} else if (passConfirm.value != pass.value) {
				if (passConfirm.classList.contains("_valid-yes"))
					passConfirm.classList.remove("_valid-yes");
				if (check.classList.contains("_icon-check-mail"))
					check.classList.remove("_icon-check-mail");
				if (!passConfirm.classList.contains("_valid-no"))
					passConfirm.classList.add("_valid-no");
			}
		} else if (pass.value && !passConfirm.value) {
			if (pass.value.length <= 7) {
				text.style.display = "block";
				pass.classList.add("_valid-no");
			} else {
				text.style.display = "none";
				pass.classList.remove("_valid-no");
			}
			if (passConfirm.classList.contains("_valid-no"))
				passConfirm.classList.remove("_valid-no");
		} else if (!pass.value && passConfirm.value) {
			passConfirm.classList.add("_valid-no");
		} else {
			if (passConfirm.classList.contains("_valid-no"))
				passConfirm.classList.remove("_valid-no");
			if (pass.classList.contains("_valid-no")) {
				pass.classList.remove("_valid-no");
				text.style.display = "none";
			}
		}
	}

	function clickEye() {
		let box = this.closest(".input-signUp__password"),
			input = box.querySelector(".password__input"),
			eye = box.querySelector(".password__eye"),
			passConfirm = document.querySelector("#confirm-password");
		if (input.type == "password") {
			input.type = "text";
			passConfirm.type = "text";
			eye.classList.remove("_icon-eye");
			eye.classList.add("_icon-eye-blocked");
		} else if (input.type == "text") {
			input.type = "password";
			passConfirm.type = "password";
			eye.classList.remove("_icon-eye-blocked");
			eye.classList.add("_icon-eye");
		}
	}
};
inputChange();
// </Password - valid> ================
