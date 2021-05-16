

//login
		var x = document.getElementById('login');
  		var y = document.getElementById('signup');
  		var z = document.getElementById('btn');
		var w = document.getElementById('bc-login-form');

  		function signup()
  		{
			w.style.display="block",
  			x.style.left='-400px';
  			y.style.left='50px';
  			z.style.left='110px';
  		}
  		function login()
  		{
			w.style.display="block",
  			x.style.left='50px';
  			y.style.left='450px';
  			z.style.left='0px';
  		};
//closing Log In Form
			let closeLongInBtn = document.getElementById("s-in-close-form");
			let LogInForm = document.getElementById("bc-login-form");

			closeLongInBtn.addEventListener('click', function(){
				LogInForm.style.display = 'none';
			});

// funtion to open shopping forms
		document.querySelectorAll('.buy-btn').forEach(item =>{
		 		item.addEventListener('click', event => {
				  document.querySelector('.shopping-cont').style.display = 'flex';
			})
		});
		
//closing shopping and payment forms
		document.querySelectorAll('.close-form').forEach(item =>{
			item.addEventListener('click',event => {
				document.querySelector('.payment-cont').style.display = 'none',
				document.querySelector('.shopping-cont').style.display = 'none';
				
			})
		});
		
		let ShBtn = document.getElementById("sh-trigger-btn");

		 ShBtn.addEventListener('click', function(){
			if (document.querySelector('.payment-cont').style.display = 'none')   
			{
				document.querySelector('.payment-cont').style.display = 'flex';
				document.querySelector('.shopping-cont').style.display = 'none';
			} else{                                             
				document.querySelector('.payment-cont').style.display = 'none';
				document.querySelector('.shopping-cont').style.display = 'none';
			}
		 });

	
		let closeb = document.getElementById('closebtn');
		let openbtn = document.getElementById('openbtn');
		let sidebar = document.getElementById('l-sidebar');
		let invisibleCont = document.getElementById('invible-cont')

		openbtn.addEventListener('click', function(){
			sidebar.style.left = '0%',
			closebtn.style.display = 'block',
			invisibleCont.style.display = 'block',
			openbtn.style.display = 'none';
			
		});
		closeb.addEventListener('click', function(){
			sidebar.style.left = '-175px',
			closeb.style.display = 'none',
			
			openbtn.style.display = 'block';
		});
		function congrts() {
			alert("Thank You!! ");
		}
		function hidesslide(){
			sidebar.style.left = '-175px',
			closeb.style.display = 'none',
			openbtn.style.display = 'block',
			invisibleCont.style.display = 'none';
		}
		