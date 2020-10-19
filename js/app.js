/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionList=document.querySelectorAll("section");
const fragment=document.createDocumentFragment();
const nav=document.querySelector("#navbar__list");
let currentCursor;//for Store active Section
sectionList.forEach(add);
nav.appendChild(fragment);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//append item list for unorderdList (navbar)
function add(list) {
	const listItem=document.createElement("li");
	listItem.innerHTML=`<a href="#${list.getAttribute("id")}">${list.getAttribute("data-nav")}</a>`;
	listItem.style.cssText="list-style:none;text-decoration:none;";

		listItem.addEventListener("click",(evt)=>{evt.preventDefault()});
       
	fragment.appendChild(listItem);
}
const navChild=document.querySelectorAll("#navbar__list li");//Store All list item



// Add class 'active' to section when near top of viewport
//remove all class from itemlist
function remove(active) {
	if(active.className="your-active-class")
		active.classList.remove("your-active-class");

}
sectionList.forEach(remove);

function activeSection(active) {
	
			let data=active.target.textContent;
			sectionList.forEach(remove);
			 //remove active class from item list
            navChild.forEach((element)=>{
            	if(element.className=="activeNav")
            element.classList.remove("activeNav");
            });
			sectionList.forEach((element)=>{
            if(element.getAttribute("data-nav")==data)
            	{element.classList.add("your-active-class");
            currentCursor=element;//store active section

            navChild.forEach(activeLink);
  
            }

			});

		}

nav.addEventListener("click",activeSection);
function activeLink(active){
let navData=currentCursor.getAttribute("data-nav");
if (active.className=="activeNav") {
return;
}
else if(navData==active.textContent){
active.classList.add("activeNav");
}
}

// Scroll to anchor ID using scrollTO event
nav.addEventListener("click",scroll);

function scroll(item){
let scroller=item.target.getAttribute("href");
let element;
sectionList.forEach((sc)=>{
	if(sc.getAttribute("class")=="your-active-class")
	{
		element=sc;
element.scrollIntoView({"behavior":"smooth"});
return;

}

});
}
//Highlighting while Scrolling
window.addEventListener("scroll",()=>{
sectionList.forEach((element)=>{
const data=element.getAttribute("data-nav");
const scrolled=element.getBoundingClientRect();
if(scrolled.top>=0&&scrolled.bottom<window.innerHeight)
{element.classList.add("your-active-class");

navChild.forEach((nav)=>{
if(nav.textContent==data)
{
nav.setAttribute("class","activeNav");
}
else
nav.classList.remove("activeNav");
});
}
else{
element.classList.remove("your-active-class");

}
});
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


