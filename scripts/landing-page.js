/* NAVIGATION BAR */
/* Get nav element from id */
let navbar = document.getElementById("navlist");

/* Create anchor elements for each section */
let 
a1 = document.createElement("a"), 
a2 = document.createElement("a"), 
a3 = document.createElement("a"), 
a4 = document.createElement("a"), 
a5 = document.createElement("a"), 
a6 = document.createElement("a"), 
a7 = document.createElement("a"), 
a8 = document.createElement("a");

/* Create text node for the links */
let 
link1 = document.createTextNode("Home"), 
link2 = document.createTextNode("Features"), 
link3 = document.createTextNode("About Us"), 
link4 = document.createTextNode("Our Clients"), 
link5 = document.createTextNode("Plans & Pricing"), 
link6 = document.createTextNode("FAQs"), 
link7 = document.createTextNode("Contact Us"), 
link8 = document.createTextNode("Terms");

/* Append the link names to each anchor element */
a1.appendChild(link1);
a2.appendChild(link2);
a3.appendChild(link3);
a4.appendChild(link4);
a5.appendChild(link5);
a6.appendChild(link6);
a7.appendChild(link7);
a8.appendChild(link8);

/* Link all anchor elements to each section */
a1.href = "#home";
a2.href = "#feat";
a3.href = "#about";
a4.href = "#clients";
a5.href = "#plans";
a6.href = "#faqs";
a7.href = "#contact";
a8.href = "#terms";

/* Create list elements for unordered navigation list */
let 
ele1 = document.createElement("li"), 
ele2 = document.createElement("li"), 
ele3 = document.createElement("li"), 
ele4 = document.createElement("li"), 
ele5 = document.createElement("li"), 
ele6 = document.createElement("li"), 
ele7 = document.createElement("li"), 
ele8 = document.createElement("li");

/* Append anchor elements to the list elements */
ele1.appendChild(a1);
ele2.appendChild(a2);
ele3.appendChild(a3);
ele4.appendChild(a4);
ele5.appendChild(a5);
ele6.appendChild(a6);
ele7.appendChild(a7);
ele8.appendChild(a8);

/* Append the list elements to the navigation bar */
navbar.appendChild(ele1);
navbar.appendChild(ele2);
navbar.appendChild(ele3);
navbar.appendChild(ele4);
navbar.appendChild(ele5);
navbar.appendChild(ele6);
navbar.appendChild(ele7);
navbar.appendChild(ele8);

/* Get all the navigation anchor elements */
let navHref = document.querySelectorAll("nav a");
/* Get all the collapsible sections from the classname: accordian */
let sections = document.querySelectorAll(".accordian");

/* Add scrolling event to the window to scroll to the respective section */
window.addEventListener("scroll", () => {
	let current = "";
	sections.forEach(section => {
		let sectionTop = -100 + section.offsetTop;
		if (scrollY >= sectionTop){
			current = section.getAttribute("id");
		}
	});
	/* Add an active class to the section in the viewport */
	navHref.forEach(li => {
		li.classList.remove("active");
		document.querySelector("nav a[href*= "+ current +"]").classList.add("active");
	});
});

/* Get element for adding Company Logo */
let logo = document.querySelector(".logo");
/* Add text to the logo block */
let logoTxt = document.createTextNode("Apps4u");
logo.appendChild(logoTxt);
/* Create button element for menu */
let btn = document.createElement("button");
btn.className = "menu-btn"
/* Add font awesome icon for button */
let icon = document.createElement("i");
icon.className = "fa-solid fa-bars";
btn.appendChild(icon);
/* Append menu icon to the button */
let menuBtn = document.querySelector(".menu");
menuBtn.appendChild(btn);

/* Toggle between different menu bar icons */
btn.onmouseover = () => {
	icon.className = "fa-solid fa-burger";
};
btn.onmouseout = () => {
	icon.className = "fa-solid fa-bars";
};

/* Replace navigation bar class from horizontal to vertical */
btn.onclick = () => {
	navbar.classList.toggle("responsive");	
};

/* Hide navigation bar on scroll down and reappear on scroll up with fade animation*/
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
	const container = document.getElementById("rect");
	const elem = document.querySelector("body");
	const rect = elem.getBoundingClientRect();
	
	/* function to get the position and dimensions of an element with respect to the viewport */
	container.innerHTML = "";
	for (const key in rect) {
		if (typeof rect[key] !== "function") {
			let para = document.createElement("p");
			para.textContent = `| ${key} : ${rect[key]} |`;
			container.appendChild(para);
		}
	}
	container.style.display = "flex";
	if (screen.width <= 500){
			container.style.display = "block";
	}
	setTimeout(function(){container.style.display = "none";}, 10000); // Hide the statistics after 10s
	let currentScrollPos = window.pageYOffset;
	if(currentScrollPos > prevScrollPos){
		document.querySelector("nav").classList.add("fadeOut");
	}
	else{		
		document.querySelector("nav").classList.replace("fadeOut","fadeIn");		
	}
	prevScrollPos = currentScrollPos;
};

/* Set the Date of App Launch */
let countDownDate = new Date("Oct 20, 2023 12:00:00").getTime();

/* Updation of countdown timer for each second */
let x = setInterval(function(){
	
	/* Get the present date and time */
	let now = new Date().getTime();
	
	/* Calculate the difference between launch time and present time */
	let difference = countDownDate - now;
	
	/* Calculation for days, hours, minutes and seconds */
	let days = Math.floor(difference / (1000 * 60 * 60 * 24));
	let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((difference % (1000 * 60)) / 1000);
	
	/* Display Countdown timer in the Header section */
	document.getElementById("dayNo").innerHTML = `${days}`; // Days Number
	document.getElementById("dayTxt").style.fontSize = "14px"; // set font size for text
	document.getElementById("dayTxt").innerHTML = 'DAYS'; // 'DAYS' Text
	document.getElementById("hrNo").innerHTML = `${hours}`; // Hours Number
	document.getElementById("hrTxt").style.fontSize = "14px";
	document.getElementById("hrTxt").innerHTML = 'HOURS'; // 'HOURS' Text
	document.getElementById("minNo").innerHTML = `${minutes}`; // Minutes Number
	document.getElementById("minTxt").style.fontSize = "14px";
	document.getElementById("minTxt").innerHTML = 'MINUTES'; // 'MINUTES' text
	document.getElementById("secNo").innerHTML = `${seconds}`; // Seconds Number
	document.getElementById("secTxt").style.fontSize = "14px";	
	document.getElementById("secTxt").innerHTML = 'SECONDS'; // Seconds Text
	
	/* Change text size for smaller displays */
	if (screen.availWidth <= 500){
		document.getElementById("dayTxt").style.fontSize = "10px";
		document.getElementById("hrTxt").style.fontSize = "10px";
		document.getElementById("minTxt").style.fontSize = "10px";
		document.getElementById("secTxt").style.fontSize = "10px";
	}
	
	/* Display message once countdown is over */
	if (difference < 0){
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "Product has been launched";
	}
}, 1000);

/* Get all collapsible sections from class name: 'accordian' */
let accBtn = document.getElementsByClassName("accordian");
for (let i of accBtn){
	i.addEventListener("click", function(){
		/* Add active class to open section */
		this.classList.toggle("accordian-active");
		/* Open and Close the contents of the section */
		let accContent = this.nextElementSibling;
		if (accContent.style.maxHeight){
			accContent.style.maxHeight = null; // hide content
		}
		else{
			accContent.style.maxHeight = 1000 + accContent.scrollHeight + "px"; // show content
		}
		/* Change the icon from plus to minus when section is open */
		let accIcon = this.childNodes[3].childNodes[1];
		if (accIcon.className === "fa-solid fa-circle-plus"){
			accIcon.className = "fa-solid fa-circle-minus";
		}
		else{
			accIcon.className = "fa-solid fa-circle-plus";
		}
	});
}


/* Slideshow for client testimonial section */
var slideIndex = 1;
showSlides(slideIndex);

/* next and previous slides */
function plusSlides(n) {
	showSlides(slideIndex += n); 
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Function to show the selected slide and hide the rest */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var bullets = document.getElementsByClassName("bullet");
	/* Reiterate to the first slide once the last slide is reached */
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	/* Hide other slides */
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	/* Highlight the active bullet */
	for (i = 0; i < bullets.length; i++) {
		bullets[i].className = bullets[i].className.replace(" active-bullet", "");
	}
	/* Display the current slide */
	slides[slideIndex-1].style.display = "block";  
	bullets[slideIndex-1].className += " active-bullet";
}	

/* Function to create collapsible Question and Answers */
let faqBtn = document.getElementsByClassName("faq-btn");
for (let q of faqBtn){
	q.addEventListener("click", function(){
		this.childNodes[1].classList.toggle("faq-active"); // Hightlight open question
		let faqAns = this.nextElementSibling;
		if (faqAns.style.maxHeight){
			faqAns.style.maxHeight = null; // hide answer
		}
		else{
			faqAns.style.maxHeight = faqAns.scrollHeight + "px"; // Reveal answer
		}
		/* Change icons from plus to minus while answer is shown */
		let faqIcon = this.childNodes[3];
		if (faqIcon.className === "fa-regular fa-square-plus"){
			faqIcon.className = "fa-regular fa-square-minus";
		}
		else{
			faqIcon.className = "fa-regular fa-square-plus";
		}
	});
}


/* Show terms overlay */
function showTerms(){
	document.getElementById("overlay").style.display = "block";
}

/* Close terms overlay */
function closeTerms(){
	document.getElementById("overlay").style.display = "none";
}


/* Set all elements to device width for responsiveness in smaller devices */
if(screen.availWidth <= 500){
	for(docEle of document.querySelectorAll("*")){
		docEle.style.maxWidth = screen.availWidth+"px";
	}
}

if(screen.availWidth <= 300){
	for(docEle of document.querySelectorAll("*")){
		docEle.style.maxWidth = screen.availWidth+"px";
		docEle.style.fontSize = "100%";
	}
}
