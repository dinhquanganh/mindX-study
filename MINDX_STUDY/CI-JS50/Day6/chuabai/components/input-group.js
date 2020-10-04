let $temp = document.getElementById("input");

class InputGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($temp.content.cloneNode(true));
    this.$label = this.shadowRoot.getElementById("label");
    this.$ip = this.shadowRoot.getElementById("ip");
    this.$error = this.shadowRoot.getElementById("error");
  }

  static get observedAttributes() {
    return ["label", "type", "value", "error"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue != oldValue) {
      if (name == "label") {
        this.$label.innerHTML = newValue;
      }
      if (name == "type") {
        this.$ip.type = newValue;
      }
      if (name == "error") {
        this.$error.innerHTML = newValue;
      }
      if (name == "value") {
        this.$ip.value = newValue;
      }
    }
  }
  get value() {
    return this.$ip.value;
  }
  set error(message) {
    this.setAttribute("error", message);
  }
}

window.customElements.define("input-group", InputGroup);
