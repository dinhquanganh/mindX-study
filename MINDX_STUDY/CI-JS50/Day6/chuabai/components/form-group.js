let $template = document.getElementById("form-group");

class FormGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
    this.$btnLogin = this.shadowRoot.getElementById("btnLogin");
    this.$form = this.shadowRoot.querySelector(".form-group");
    this.$form.addEventListener("submit", (event) => {
      console.log(this);
      this.validate();
      event.preventDefault();
    });
  }
  validate() {
    let check = true;
    let email = this.$email.value;
    let password = this.$password.value;

    if (email.trim() === "") {
      check = false;
      this.$email.error = "email invalid";
    }

    if (password.trim() === "") {
      check = false;
      this.$password.error = "password invalid";
    }
    return check;
  }
}

window.customElements.define("form-group", FormGroup);
