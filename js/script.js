var db = [
    {name:'James Butters', email:'James@gmail.com', age:15},
    {name:'Mark Robinson', email:'Mark@gmail.com', age:23},
    {name:'Lara Barbosa', email:'Lara@gmail.com', age:23}
];

(function Avatars(db){
	this.init = function(){
		this.generateList(0);
		this.enterUser();
	}

	this.generateList = function(j){

		var parent = document.querySelector('#parent_avatar');
		var template = '';

		for(var i = j; i < db.length; i++){
		    template += '<div class="col-sm-4">';
		    template +=  '<div class="card">';
		    template +=     '<div class="card-delete" data-card="'+ i +'">x</div>';
		    template +=     '<div class="card-block">';
		    template +=         '<h3 class="card-title">'+ db[i].name +'</h3>';
		    template +=         '<p class="card-text"><strong>Email:</strong> '+ db[i].email +'</p>';
		    template +=         '<p class="card-text"><strong>Age:</strong> '+ db[i].age +'</p>';
		    template +=     '</div>';
		    template +=   '</div>';
		    template += '</div>';
        }			
        parent.insertAdjacentHTML('afterbegin', template);
	};

	this.enterUser = function(){

		var emptyMsg = false;

		function grabUser(){
			var name = document.querySelector('#user_name').value;
			var email = document.querySelector('#user_email').value;
			var age = document.querySelector('#user_age').value;

			var parent = document.querySelector('.form-container');

			var elements = [name, email, age];

			if(validateUser(elements)){
				document.querySelector("#myForm").reset();
				db.push({name: name, email: email, age: age});
				this.generateList(db.length-1);
				if(emptyMsg) {
					var tmp = document.querySelector('.emptyFormMsg');
					tmp.innerHTML = '';
				}
			} else if(!emptyMsg) {
				var emptyFormMsg = '';
				emptyFormMsg += '<div class="emptyFormMsg">'+ 'Form cannot be empty' + '</div>';
				parent.insertAdjacentHTML('beforeend', emptyFormMsg);
				emptyMsg = true;
			}
		}

		document.querySelector('#myForm').addEventListener("submit", function(e){
			e.preventDefault();
			grabUser();
		});
	}

	this.validateUser = function(input){		
		for(var i = 0; i < input.length; i++){
			if(input[i] == ''){
				return false;
			}
		}
		return true;
	}

	this.init();
})(db);
