var db = [
    {name:'James Butters',email:'James@gmail.com',age:15},
    {name:'Mark Robinson',email:'Mark@gmail.com',age:23},
    {name:'Lara Barbosa',email:'Lara@gmail.com',age:23}
];

(function Avatars(db){
	this.init = function(){
		this.generateList();

	this.generateList = function(){

		var parent = document.querySelector('#parent_avatars');
		var template = '';

		for(var i = 0; i < db.length; i++){

			var container = $("<div>");
			container.addClass("col-sm-4");
			var containerInner = $("<div");
			containerInner.addClass("card");
			container.append(containerInner);
			var containerCardDelete = $("<div");
			containerCardDelete.addClass("card-delete");
			containerInner.append(containerCardDelete);

			template += '<div class="col-sm-4">
    						<div class="card">
    							<div class="card-delete" data-card="">x</div>
    							<div class="card-block">
									<h3 class="card-title">Lara Barbosa</h3>
									<p class="card-text"><strong>Email: </strong>lara@gmail.com</p>   
									<p class="card-text"><strong>Age: </strong>25</p> 						
    							</div>
    						</div>
    					</div>'
		}

			
		}

	};

	this.init();
})(db);