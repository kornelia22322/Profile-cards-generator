var db = [
    {name:'James Butters', email:'James@gmail.com', age: 15},
    {name:'Mark Robinson', email:'Mark@gmail.com', age: 23},
    {name:'Lara Barbosa', email:'Lara@gmail.com', age: 23},
    {name:'Amy Lee', email:'amy@gmail.com', age: 28},
    {name:'Amy Lee', email:'amy@gmail.com', age: 280}
];

(function Avatars(db){
	this.init = function(){
		this.generateList();
		this.enterUser();
	}

	this.generateList = function(){
		var parent = document.querySelector('#parent_avatar');
		parent.innerHTML = '';
		var template = '';
		for(var i = 0; i < db.length; i++){
		    template += '<div class="col-sm-4">';
		    template +=  '<div class="card">';
		    template +=     '<div class="card-delete" data-card="'+i+'"'+ i +'"><i class="fa fa-times hid" aria-hidden="true"></i></div>';
		    template +=     '<div class="card-block">';
		    template +=         '<h3 class="card-title">'+ db[i].name +'</h3>';
		    template +=         '<p class="card-text"><strong>Email:</strong> '+ db[i].email +'</p>';
		    template +=         '<p class="card-text"><strong>Age:</strong> '+ db[i].age +'</p>';
		    template +=     '</div>';
		    template +=   '</div>';
		    template += '</div>';
<<<<<<< HEAD
       	parent.insertAdjacentHTML('afterbegin', template);
       	template = '';
       	loadCards();
    }
    deleteCard();
=======

       		parent.insertAdjacentHTML('afterbegin', template);
       		template = '';
       		loadCards();
        	}			
        	deleteCard();  
>>>>>>> 045db08a156992a25f701347a2f82cd7e40ce6ee
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
				this.generateList();
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
	};

	this.deleteCard = function(){
		var button = document.querySelectorAll('.card-delete');

		function deleteThis(element){
			var obj = element.getAttribute("data-card");
			db.splice(obj, 1);
			generateList();
		}
<<<<<<< HEAD

=======
>>>>>>> 045db08a156992a25f701347a2f82cd7e40ce6ee
		for(var i = 0;i<button.length;i++){
			button[i].addEventListener("click", function(e){
				deleteThis(this);
			});
		}
	};

	this.loadCards = function(){
		  $( ".card" ).animate({
		  	  height : "180px",
		  	  width : "100%"
		  }, 1000);
		  setTimeout(function(){
		  	$(".card-delete").css("display", "inline");
		  }, 1000);
	}
	this.init();
})(db);
