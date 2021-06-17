import {default as AbstractView, }from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Add User");
        this.setBackground()
        document.addEventListener('click', e => {
            if (e.target.classList.contains('btn-submit')) {
                e.preventDefault();
                console.log("clicked")
               this.addUser()
            }
        });
    }



    addUser(){
        console.log("starting to proceed form")
        document.getElementById('form').addEventListener('submit', e => {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let website = document.getElementById("website").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            console.log("I just called abstract class")
         
            return super.addUser(name, website, email, phone)
        })

    }
    
    async getHtml() {
        return `
            <div id="product-wrapper">
            <div class="content">
          <h1>Create a new User </h1>
          <p>Please fill the following</p>
      
        </div>
        <form id="form" class="form-wrapper">
          <input type="text" id="name" name="name"required placeholder="Full Name" autocomplete="off"/>
          <input type="text" required id="website" name="website" placeholder="website" autocomplete="off"/>
          <input type="email" required id="email" name="email" placeholder="Email" autocomplete="off"/>
          <input type="number"  required name="phone" id="phone" placeholder="Phone Number" autocomplete="off"/>
          <button type="submit" class="btn-submit"><span>Save</span></button>
        </form>
      </div>
            </div>
            
        `;
    }
}