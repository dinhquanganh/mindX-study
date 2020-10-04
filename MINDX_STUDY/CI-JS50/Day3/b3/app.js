// dinh nghia 1 dom
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML=
        `<div class="profile-container">
            <div id="name">Pastetu</div>
            <div id="age">19</div>
            <div id="sex"></div>
            <div id="address">NAMDU</div>
            <br>
        </div>`
    }
}
// custom element
window.customElements.define('my-profile',MyProfile);