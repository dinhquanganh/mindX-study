const $template = document.getElementById("template-form-register");

class FormRegister extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$name = this.shadowRoot.getElementById("name");
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
    this.$passwordConfirmation = this.shadowRoot.getElementById(
      "password-confirmation"
    );

    this.$formRegister = this.shadowRoot.querySelector(".form-register");
    this.$formRegister.onsubmit = (event) => {
      event.preventDefault();
      this.register();
    };
  }
  //   console.log(email, name, password, passwordConfirmation);
  // }.bind(this);

  register() {
    //lay du lieu
    let email = this.$email.value;
    let name = this.$name.value;
    let password = this.$password.value;
    let passwordConfirmation = this.$passwordConfirmation.value;
    console.log(name, email, password, passwordConfirmation);
    // check dữ liệu
    if (
      this.validate(
        this.name,
        this.email,
        this.password,
        this.passwordConfirmation
      )
    ) {
      alert("Success 😪");
    }
  }

  validate(name, email, password, passwordConfirmation) {
    let isPassed = true;
    if (name == "") {
      this.$name.error = "Nhap ten";
      isPassed = false;
    } else {
      this.$name.error = "";
    }
    if (email == "") {
      this.$email.error = "Nhap email";
      isPassed = false;
    } else {
      this.$email.error = "";
    }
    if (password == "") {
      this.$password.error = "Nhap password";
      isPassed = false;
    } else {
      this.$password.error = "";
    }
    if (passwordConfirmation == "" || passwordConfirmation != password) {
      this.$passwordConfirmation.error = "Xac thuc mat khau khong dung";
    } else {
      this.$passwordConfirmation.error = "";
    }
    return isPassed;
  }
}

window.customElements.define("form-register", FormRegister);
