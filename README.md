# About author
- **Author:** *Luwam Meaza*
- **SCCB Student ID:** *S45306884 *
- **DMU Student Nubmer:** *P2562222*
- **SCCB Assessor:** *Aram Saeed*
- **DMU Modul:** *CTEC3905 Front-End Web Developlent*

## college/Universtiy Module Helpful Links
-*DMU BB*, [online lab matterial]

## Git Hub Accout
*Github* , [Github Account](https://vle.dmu.ac.uk/webapps/blackboard/content/listContent.jsp?course_id=_557840_1&content_id=_5025142_1)

## Files Requed need
*Software*
- download and instal virtual studio code
-  download and instal chrome as browser
- download and instal github desktop

## External link
### layout
- grid - [link]{https://css-tricks.com/snippets/css/complete-guide-grid/, https://www.youtube.com/watch?v=9zBsdzdE4sM&ab_channel=WebDevSimplified}
- flex box - [link]{https://css-tricks.com/snippets/css/a-guide-to-flexbox/ , https://www.youtube.com/watch?v=9zBsdzdE4sM&ab_channel=WebDevSimplified}
- Sudo element - [link]{https://www.w3schools.com/css/css_pseudo_elements.asp, https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements, https://www.youtube.com/watch?v=zoBsxEV0MAs&ab_channel=WebDevSimplifiedWebDevSimplifiedVerified}
- animation - [link]{https://www.youtube.com/watch?v=6vOJoAmbza0&ab_channel=NeilRoweNeilRowe, https://spark.adobe.com/sp/design-remix/post/Jah5ZDJEP5mx3?_branch_match_id=760647692496029078}
- Java script - [link]{https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1, https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick}
==========================================================================
1. My template folder that includes (index.html, my_css.css, my_js.js)


# Template
### All my pages will based on the stracture index.html file
# Week 1

## First step
1.  Crated a folder
- rename my folder to mywebpages
2. Crated files in my folder
- index.html
3.  Created folder in my webpages
- Folder for css
- Folder for java script
- Folder images
- Folder icons
### Next Step
#### Crated base page
#### by using "!" in Virtual stuido code
#### then added 4 div base on my design on for the navigation bar, main body and footer.
``` html
<!DOCTYPE html>
	<html lang="en">	
	<HEAD>
		<title>ERI Fashion</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<link rel="stylesheet" href="css/styleforallpages.css">
		
        <link rel="icon" href="icons/logo.png" >  <!-- favicon-->
	</HEAD>
		<BODY>
				<div id="container">
					<div id="navigaionbar" class="navhover"></div>
					
                    </div>	<div id="midcontainer" ></div> 
                    
                    <div id="blfooter"></div>

		        </div>
		<script src="js/script.js"></script>
	</BODY>
</html> 
```
#### In my html file i have linked the css file and javascript
css
``` html
<link rel="stylesheet" href="css/style.css">	
```
#### I have added the java in the button of html bacause i want load the page first then the javascrip.
js
``` js
<script src="js/script.js"></script>
```
## CSS
 
``` css
#container{
    position: absolute; 
    max-width: 100%; 
    min-height: 100vh;
    
}
    #navigaionbar{
    position:absolute ;
    top: 0;
    height:100px;
    border-bottom:2px solid #fdbb2d;
}

    .middle-con{
    position: absolute;
    width: 100%; 
    height: 100vh;
    border: 2px solid red;
}

#blfooter{
    position: absolute;
    bottom:0;
    width: 100%;
    height:15rem; ;
    background-color: #000;
    border: 2px solid yellow;
}
```
# Week 2

1. Navigaiton bar 
2. footer

## 1. Navigaiton bar 
### html -Navigaiton bar 
``` html
         <div id="navigaionbar" class="navhover">
			<div id="navtop" class="nav-all">							
				<ul>
				    <li><a>>Sign Up</a></li>
				    <li><a>Log In</a></li>
				</ul>
				</div> 
		    	<div id="nav-bot">							
				<ul>
			         <li><a href="index.html"> Home</a></li>
			        <li><a href="traditional.html">Traditional</a></li>
		             <li><a href="modern.html">Modern</a>
			        <li><a href="aboutus.html">About Us</a></li>
			    </ul>
		</div>
```
### CSS -Navigaiton bar 
``` css

 #navigaionbar{
    position:absolute ;
    top: 0;
    height:100px;
    border-bottom:2px solid #fdbb2d;
}
    #navtop{
    width: 100%;
    height: 35%;
    background-color: #000;
    border: none;
    }
    }
    #nav-bot{
            width: 100%;
            height: 65%;
            background-color:#fff;
            border-style: none none groove ; 
          }
```

## 2. Footer
### html -Footer
```html 
		<div id="blfooter">
			<div class="bt-address"></div> 
			<div id="socialmedia"></div>
		    <div id="bccopyright"></div>
	    </div>

```
### CSS -Footer

``` css - 
#blfooter{
    position: relative;
    background-color: #000;
    border-top: 2px solid #ffffff;

}
#bccopyright{
	position: absolute;
    bottom: 0;
    border: 2px solid yellow;
    width: 100%;
    height:15px; 
}
#socialmedia
{
    margin: auto;
	position: absolute;
    width: 100%;
    height:20px; 
    border: 2px solid yellow;
}
.bt-address{
    width: 100%;
    height:20px; 
    border: 2px solid yellow;
}
```
### !!! In the second week I have encounter problem with position of and everything went out of control, then I decided to make deep research and other found out the best way to lay out your style. 

#### - I decided to change all the code in CSS to make the base structure esay to work with. 
#### - All those code are base on those tutorial I found in position and layout structure. 

## Change i made

```css
#container{
    position: relative; 
    max-width: 100%; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
} 

#navigaionbar{
    position: sticky;
    top: 0;
	font-style: none;
	width: 100%; 
	height:6.25rem; 
	z-index: 2;
    overflow: hidden  ;
}
#navtop{
    width: 100%;
    height: 35%;
    background-color: #000;
    border: none;
    }
#nav-bot{
    width: 100%;
    height: 65%;
    background-color:#fff;
    border-style: none none groove ; 
    border-width: thin;
    border-color:#404040;
    display: flex;
    justify-content: center;
    justify-items: center;
}
#container{
    position: relative; 
    max-width: 100%; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
} 
#blfooter{
    position: relative;
    overflow: hidden;
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:15rem; 
    background-color: #000;
    flex-flow: row wrap;
    border-top: 2px solid #ffffff;
} 


#bccopyright{
	position: absolute;
    bottom: 0;    
    color: whitesmoke;
    bottom: 0;
}
#socialmedia
{
    margin: auto;
	position: relative;
}
.socialmimg{
    width: 50px;
    height: 50px;
    position: relative;
    margin: 0 5px;
	padding: 0;
    float:left;    
}

#bot-logo{
    position: relative;
    left: 2px;
    width: 160px;
    height: 200px;
```
 ### I use position relative and use display property on the parent element to control children of the parent element

<br>

# Week 3
## Adding content in html and css to style it. 
1. Navigaiton bar 
2. footer 

## 1. Navigaiton bar 
#### added logo in my navigaion bar
### HTML -Navigaiton bar 
``` html
        <div id="top-logo">
			<img src="images/logo2.png" alt="logo image">
		</div>
```
### CSS -Navigaiton bar 
```css
      #nav-bot li {
        margin: 10px 0 ;
      }
    .nav-all {
        float: left;
        border-right: 1rem solid #bbbbbb;
        border-bottom: none;
    
    }
    .nav-all li{
        display: inline-block;
    }
                                     
    .nav-all li a{
        display: block;
        padding: 10px 15px;
        margin: 0 15px ;
        text-decoration: none;	
        transition: all 0.3s ease 0s;
        color: #000;
        font-weight: 700;
    }
    
    .nav-all ul{
        list-style-type:none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    
     #navtop li
     {
         float: right; 
     }
            
     .active      
     {
        border: 2px black;
        border-style: none none solid none;
        font-weight: 600;
        cursor: context-menu;
     } 	
```
## 2. Footer 
### 
I added logo in my footer
- images for the social meida
- Adress of the company
- copy right
### HTML -footer bar 
```html
<div id="bot-logo">
							<img src="images/logo1.png" alt="logo image">
					</div> 
					<div class="bt-address">
						<p>Digbeth Campus</p>
						<p>High Street Deritend, </p>
						<p>Birmingham </p>
						<p>B5 5SU </p>
					</div> 
						<div id="socialmedia">
						<div class="socialmimg">  <img alt="facebook icon" src="icons/facebook.png">
						</div>
						<div class="socialmimg">  <img alt="instagram icon" src="icons/instagram.png">
						</div>
						<div class="socialmimg"> ><img alt="twitter icon" src="icons/twitter.png">
						</div>
						<div class="socialmimg"> <img alt="pinterest icon" src="icons/pinterest.png">
						</div>
						<div class="socialmimg"> <img alt="linkedin icon" src="icons/linkedin.png"></div>
					</div>
				<div id="bccopyright"> <p> All rights reserved 2021 &#169; ERI</p></div>
					<span id="sh-trigger-btn"></span>
			</div>

```

# Week 4
I have focoused on the boyd of the first index.html
## Adding content in body html and css to style it. 
1. Slide Show
2. product 

## 1. Slide Show
### of the slide show i have used a template
- Side bar
[link]()
```html
                <div id="slideshow">
						<div class="slider">
							<div class="slides">
								<div class="slide">
									<div class="slide-data">
										<h1>This is Slide # 1</h1>
										<p>Lorem ipsum dolor sit 
                                            amet consectetur adipisicing elit.</p>
										<button>SUBSCRIBE</button>
									</div>
								</div>
                            <div>
                 <div
	
```
### CSS - Main body
```css
.slider {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.slides {
    position: absolute;
    width: 300%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 2s ease;
}

.slide {
    width: 33.33%;
    height: 100%;
    position: relative;
    float: left;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

```
## 2. Main body
### I have added 2 div in the main body
- side bar
- product display

### HTML - Main body
```html
<div id="midcontainer" >
    <div id="l-sidebar" class="sidebar">							
	</div>
        <div   id="midcontainer-right"> 
		
            <div  class="grid-item item-1 ">
            <img src="images/test.jpg" alt="logo image" >
            </div>
									
		</div>
	
```
### CSS - Main body
```css
#midcontainer-left{
    position: relative;
    width: 20%;
}
#midcontainer-right{
    position: relative;
    width: 100%;
}
#l-sidebar{
    position: relative; 
    width:300px ;
    background-color: #000;
}
.grid-style{
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
}

```

### At this stage I have found the best display for one product the I have just copy and pest the for the rest products.
 ```html
 <div  class="grid-item item-1 ">
            <img src="images/test.jpg" alt="logo image" >
            </div>
 ```
 # Week 5

## In week 5 I have added three more html file in my root file based on my navigation bar "li".
## Created html file
- traditional.html
- modern.html
- aboutus.html
## I have copy all the temlate code from index.html to all three html files. 
 
## Next Step 
1. traditonal.html
- Created one example dv box that holds the 
- Created image holder 
- Created button to buy
2. aboutus.html 
### Created three div
- Description of the company and map
- for Animation
- form

## 1. traditional.html 
### HTML - traditional 
```html
                            <div class="gallery-grid-container">
								<div class="gallery-container">
										<div class="gallery-item">
										<div class="image">
											<img src="images/test.jpg" alt="image"> </div>
										</div>
										<div class="details-box">
											<div class="type">
												<span>Rabbed Cardigan</span>
											    <span>Noe Arrival</span>
											</div>
											<a class="price">£120</a>
										</div>
									</div>
                            </div>
```
### CSS - traditional
```css
.gallery-grid-container{
    display:grid;
    width: inherit;
    grid-template-columns: repeat(5,1fr);
    grid-auto-rows:400px 400px;
    grid-gap:40px;
    grid-auto-flow: dense;
    text-align:center;
    padding: 40px 40px  40px;
}
.gallery-item{
    width:100%;
    height:80%;
}
.gallery-item .image{
    width:100%;
    height:100%;
    overflow:hidden;
}
.gallery-item .image img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position:50% 50%;
    cursor:pointer;
    transition:.5s ease-in-out;
}
```
### One I found the suitable size for height and width for the box that holds the image and description, then I copy and paste “<div class="gallery-container">” and its children. Since the i have plan the same row and coloum for both tradional and modern html file because of that i use for both html files.

## . about.html 
### HTML -about
```html
            <div class="company-info"></div>
                <div id="map-cont">
				<div class="company-address"></div> 
				<div class="mapouter"><</div>
		    </div>
```
                            
### CSS - about
```css
.company-info{
    display: flex;
    flex-direction: column;
    padding:  8% 10%;
}
#map-cont{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;   
    padding: 0 10%;
    height: 100%;
    max-width:100% ;
    overflow: hidden;
}
.company-address{
    display: flex;
    padding-bottom: 20px;
}
.mapouter{
     position: relative;
    height: 800px;
    width:800px ; 
}

```


# Week 6
## Add conntet 
1. index.htm
- left slide
- descripon for the products
- animation
2. traditional.html
- Headin


3. modern.html
- Copied from traditioal headin

4. aboutus.html
- crated the form
- animation 
## 1. index.htm
### HTML - index
```html
                            <div id="l-sidebar" class="sidebar">	
							<nav class="sticky-side-bar">
								<h2>Categories</h2>
								<ul>
								  <li><a class="side-bar-back" id="topmar" href="#menandwomen">All Men's and Women</a></li>
								  <li><a class="side-bar-back"  href="#newcoiming">New Coming</a></li>
								  <li><a class="side-bar-back"  href="#topsales">Top Sales</a></li>
								  <li><a class="side-bar-back"  href="#custFavor">Customers Favorite</a></li>
								  <li><a class="side-bar-back"  href="traditional.html">Old Style</a></li>
								  <li><a class="side-bar-back"  href="modern.html">Fatshion</a></li>
								</ul>
							</nav>
						  </div>
                          <div class="grid-details-large grid-d1">
									<h2>Our latest</h2>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
										Cum nisi maxime impedit obcaecati consectetur debitis eaque 
										officiis delectus quae id est, vero molestiae, earum quaerat quasi. Eum asperiores eligendi non.</p>
								</div>
                                <div  class="grid-item item-9 item-dis">
									<div class="grid-details"><h2>Our latest</h2>
										<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
											Cum nisi maxime impedit obcaecati consectetur debitis eaque 
											officiis delectus quae id est, vero molestiae, earum quaerat 
											quasi. Eum asperiores eligendi non.</p>
									</div>
                                    <div class="mainheadding" >
								<h5 class="txtanimate">Stay Home, Protect The NHS, Save Lives - COVID-19.</h5>
							</div> 
```
                            
### CSS -  index.htm
```css
#l-sidebar{
    position: relative; 
    width:300px ;
    background-color: #000;
}
.grid-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5%;
}
.grid-details h2{
    color: black;
    border: none;
    padding-bottom: 10px;
}
.grid-details-large h2{
    color: black;
    border: none;
    font-size: 5rem;
}
.grid-details-large p{
    font-size: 3rem;
    margin-bottom: 60px;
}
.grid4all{
    position: relative;
    width: 100%;
    display: grid;
}
.txtanimate{/* index text animationo*/
    animation: type49 6s steps(49) infinite;
    white-space: nowrap;
    border-right:4px solid white;
    overflow: hidden;
    }
 @keyframes type49 {
    0% {
        opacity: 0.5;
        width: 0ch;
    }
    100% {
        opacity: 1;
        width: 49ch;
        
}
```
}
## 2. traditional.htm
### HTML - traditional
```html
div class="mainheadding" >
								<h5>women</h5>
```
                            
### CSS - traditional
```css
/* the same class as 'index mainhedding'*/
```



## 3. aboutus.htm
### HTML - aboutus
```html
			<div class="form-container">
						<h1 class="brand"> Contact us</h1>
						<div class="wrapper ">
						  <div class="side-info">
							<h3>Eri fushion</h3>
							<ul>
							  <li> Digbeth Campus</li>
							  <li> 0121 694 5000</li>
							  <li> Erifashion@acme.test</li>
							</ul>
							</div>
					<div class="contact">
						<h3>Email Us</h3>
					<form action="MAILTO:s45306884@sccb.ac.uk" method="post" enctype="text/plain">
						<p>
						  <label>Name</label>
						  <input type="text" name="name" size="30" placeholder="E.g. John Smith" pattern="[A-Za-z]{1,15}+[][A-Za-z]{1,15}" required>
						</p>
						<p>
						  <label>Company <span class="span-gray">(Optional)</span></label>
						  <input type="text" name="company">
						</p>
						<p>
						  <label>Email Address</label>
						  <input class="email" type="email" name="email" placeholder="1234@abcd.com" required>
						</p>
						<p>
						  <label>Phone Number</label>
						  <input type="tel" name="phone" placeholder="071234..." pattern="[0-9]{1,11}" required>
						</p>
						<p class="full">
						  <label>Message</label>
						  <textarea name="message" rows="5"  name="Additional Comments"  placeholder="Enter text here..."></textarea>
						</p>
						<p class="full">
						  <button >Submit</button>
						</p>
					  </form>
					  </div>
					</div>
				</div>

                <div id="animation-cont">
					<section>
						<video src="videos/smoke.mp4" autoplay muted></video>
						<h1 class="smoke_typo_an">
							<span>T</span>
							<span>H</span>
							<span>A</span>
							<span>N</span>
							<span>K</span>
							<span>S</span>
						</h1>
					</section>
					<h5 class="typo_an" >FOR VISITING OUR WEBSITE.  </h5>
				</div>
```
                            
### CSS - aboutus
```css
.form-container{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width:100%;
    height: 800px;
    padding: 0;
}
.brand{
    text-align: center;
    position: relative;
    
  }
  
  .brand span{
    color:#fff;
  }
  
  .span-gray{
      color:rgba(128, 128, 128, 0.685);
      bottom: unset;
      margin-left: 10px;
  }
  .wrapper{
    box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
    margin-top: 30px;
  }
  
  .wrapper > *{
    padding: 1em;
  }
  
  .side-info{
    background:	#d3d3d3;
  }
  .side-info li{
    text-decoration: none;
    padding-bottom:6px;
  }
  .side-info h3, .side-info ul{
    text-align: center;
    margin:0 0 1rem 0;
    list-style: none;
    
  }
  
  .contact{
    background:	#eeeeee;
  }
  #animation-cont{
    position: relative;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px yellow;
}
video{
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.smoke_typo_an{
    font-size: 8rem;
    letter-spacing: 2rem;
}
.smoke_typo_an span{
    opacity: 0;
    display: inline-block;
    animation: smoketext 1s linear forwards ;
}

.typo_an{/* about as page text animationo*/
    animation: type 5s steps(49) forwards;
    white-space: nowrap;
    border-right:4px solid white;
    overflow: hidden;
    opacity: 0;
    letter-spacing: 0.6rem;
		position: absolute;
    bottom: 25%;
    font-size: 6.5rem;
    color: white;
}

@keyframes smoketext{
    0%{
        opacity: 0;
        transform: rotate(0deg);
        filter: blur(10px);

    }
    100%{
        opacity: 1;
        transform: rotate(0deg);
        filter: blur(0);
        color: rgb(175, 139, 46);

    }
}
.smoke_typo_an span:nth-child(1)
{
    animation-delay: 0s;
}
.smoke_typo_an span:nth-child(2)
{
    animation-delay: 1s;
}
.smoke_typo_an span:nth-child(3)
{
    animation-delay: 2s;
}
.smoke_typo_an span:nth-child(4)
{
    animation-delay: 2.8s;
}
.smoke_typo_an span:nth-child(5)
{
    animation-delay: 3.6s;
}
.smoke_typo_an span:nth-child(6)
{
    animation-delay: 4.2s;
}

```
}
# Week 7
## Add conntet 
1. aboutus.html
- map
## 3. aboutus.htm
### HTML -
```html
               <div class="company-address">
					<p class="underline">Our Address</p>
					<p>Digbeth Campus</p>
					<p>High Street Deritend, </p>
					<p>Birmingham </p>
					<p>B5 5SU </p>
				</div> 
				<div class="mapouter"><div class="gmap_canvas">
					<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=B5%205SU&t=&z=13&ie=UTF8&iwloc=&output=embed" >
					</iframe></div>
				</div>
```
                            
### CSS - 
```css
#map-cont{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;   
    padding: 0 10%;
    height: 100%;
    max-width:100% ;
    overflow: hidden;
}
iframe{
    position: relative;
	border: 0;	
	margin: 0;
	height:600px;
    width: 800px;
    max-width:100%;
}
.company-address p{
    display: flex;
    letter-spacing: 3px;
    font-size: 2rem; 
    padding-bottom: 20px;
}
```
# Week 8
## ONLY javascript
1. login page
2. Popup forms
3. slide show


## 1. javascript
### java - login

```javascript
//login
		let loginn = document.getElementById('login');
        let singupp = document.getElementById('signup');
        let logbtn = document.getElementById('btn');
        let logform = document.getElementById('bc-login-form');

function signup()
{
        logform.style.display="block",
        loginn.style.left='-400px';
        singupp.style.left='50px';
        logbtn.style.left='110px';
}
function login()
{
        logform.style.display="block",
        loginn.style.left='50px';
        singupp.style.left='450px';
        logbtn.style.left='0px';
};
```
### javascript - Popup forms
```javascript
/closing Log In Form
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
```
# Week 9
## Api

1. Api
### Api is found in the index file
### HTML -API
```html
                            <div id="api-cont">
								<div class="weather loading weather-info">
								<h2 class="city">Weather in Birmingham </h2>
								<h1 class="temp">11°C</h1>
								<div class="humidity">Humidity: 76%</div>
								</div>
								<div class="description-icon">
								<img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
								<div class="description">Partly cloudy</div>
								</div>
								<div class="search">
								<input type="text" class="search-bar" placeholder="Search your city">
								<button class="inside-btn"><img src="icons/search.png" alt=""></button>
								</div>
							</div>
```
                            
### CSS - API
```css 
/* API */
#api-cont {
    position: relative;
    background-color: #a55c1b;
    background-image: linear-gradient(315deg, #a55c1b 0%, #000000 74%);
    display: flex;
    flex-direction: row;
    color: white;
    height: 300px;
    width: 100%;
    max-width: 600px;
    max-height: 150px;
    /* margin: 1em; */
    justify-content: space-around;
    align-items: center;
    
  }
  
  .search {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .inside-btn {
    border-radius: 50%;
    border: none;
    height: 23px;
    width: 23px;
    outline: none;
    background-color: rgba(201, 76, 76, 0.01);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  
  input.search-bar {
    border: none;
    outline: none;
    padding: 0.4em 1em;
    border-radius: 24px;
    background:'' ;
    color: black;
    font-family: inherit;
    font-size: 105%;
    width: 100%;
  }
  
  .inside-btn:hover {
    transform: scale(1.2);
  }
  
  .tempreture{
   
    font-size: 1.4rem;
  }
  .weather-info h1,h2{
    margin:0 ;
    font-size: 1.4rem;

  }
  .weather-info{
    position: relative;
    display: flex;
    flex-direction: column;
    
  }
  .description {
    text-transform: capitalize;
    margin-left: 8px;
  }
  .description-icon{
    position: relative;
  }
  .inside-btn{
    position: absolute;   
    right: 12px ;
  }
  .weather.loading {
    visibility: hidden;
    max-height: 20px;
    position: relative;
  }
  
  .weather.loading:after {
    visibility: visible;
    content: "Loading...";
    color: white;
    position: absolute;
    top: 0;
    left: 20px;
  } 
/* End of API */

}
```
### java - API
```javascript
//login
let weather = {
    apiKey: "9bb533e8d27a0afe13ee7c1684e02cb9",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("birmingham");
  
```

1.1. For all page frameworks is based on this format:
``` html
<!DOCTYPE html>
	<html lang="en">	
	<HEAD>
		<title>ERI Fashion</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<link rel="stylesheet" href="css/styleforallpages.css">
		
        <link rel="icon" href="icons/logo.png" >  <!-- favicon-->
	</HEAD>
		<BODY>
				<div id="container">
					<div id="navigaionbar" class="navhover"></div>

					<div id="bc-login-form"></div>
					
                    </div>	<div id="midcontainer" ></div> 
                    
                    <div id="blfooter"></div>

		        </div>
		<script src="js/script.js"></script>
	</BODY>
</html> 
```


## 1.2. styleforallpages.css framework is based on this format:
The css file link in the html fin
```css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body{
    max-width: 100%;
}
html{
    height:100% ;
    scroll-behavior: smooth;
}
body{
    position: relative;
    min-height: 100%;   
    font-family: RocknRollOne;  
}
::-webkit-scrollbar {
    display: none;
}

#container{
    position: relative; 
    max-width: 100%; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
    #navigaionbar{
    position: sticky;
    top: 0;
	font-family: RocknRollOne;
	font-style: none;
	width: 100%; 
	height:6.25rem; 
	z-index: 2;
    overflow: hidden  ;
    border-bottom:2px solid #fdbb2d;
}
#navtop{
    width: 100%;
    height: 35%;
    background-color: #000;
    border: none;
    }
#navtop{
    width: 100%;
    height: 35%;
    background-color: #000;
    border: none;
}
.middle-con{
position: relative;
display: flex;
flex-direction: row;
}

#blfooter{
    position: relative;
    overflow: hidden;
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:15rem; ;
    background-color: #000;
    flex-flow: row wrap;
    border-top: 2px solid #ffffff;
}
```
## 1.3. script.js framework is based on this format:
###  The login and singup javascrip is in all the pages
```javascript
//login
		let loginn = document.getElementById('login');
        let singupp = document.getElementById('signup');
        let logbtn = document.getElementById('btn');
        let logform = document.getElementById('bc-login-form');

function signup()
{
        logform.style.display="block",
        loginn.style.left='-400px';
        singupp.style.left='50px';
        logbtn.style.left='110px';
}
function login()
{
        logform.style.display="block",
        loginn.style.left='50px';
        singupp.style.left='450px';
        logbtn.style.left='0px';
};
```
