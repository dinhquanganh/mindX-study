let $template = document.getElementById("my-profile");
class MyProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    // Lay ra the co id trong sdr;

    this.$name = this.shadowRoot.getElementById("name");
    this.$avatar = this.shadowRoot.getElementById("avatar");
    this.$address = this.shadowRoot.getElementById("address");
    this.$age = this.shadowRoot.getElementById("age");
    console.log(this.$address)
  }

  static get observedAttributes() {
    return ["name", "age", "address", "avatar"];
  }
  /**
   *
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(
    //   `Thuoc tinh ${name} vua thay doi gia tri tu ${oldValue} sang ${newValue}`
    // );
    if (name == "name") {
      this.$name.innerHTML = newValue;
    } else if (name == "age") {
      this.$age.innerHTML = newValue;
    } else if (name == "address") {
      this.$address.innerHTML = newValue;
    } else if (name == "avatar") {
      this.$avatar.src = newValue;
    }
  }
}

window.customElements.define("my-profile", MyProfile);
