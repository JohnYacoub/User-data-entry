export default class {
    constructor(params,) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    setBackground(bg) {
        const section = document.querySelector('section')
        section.style.background = bg ? `#221F26 url(${bg})` : "#221F26"
    }

       setFormTitle(parg){
        document.querySelector(".user-form-content").innerHTML =   parg
    }

    async getHtml() {
        return "";
    }
}