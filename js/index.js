const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//Nav
const navList = document.getElementsByTagName("a");
navList[0].innerHTML = "Services";
navList[1].innerHTML = "Product";
navList[2].innerHTML = "Vision";
navList[3].innerHTML = "Features";
navList[4].innerHTML = "About";
navList[5].innerHTML = "Contact";
//Middle text
document.querySelector("h1").innerHTML = "DOM Is Awesome";
document.querySelector("button").innerHTML = "Get Started";

//Boxed content
const header = document.getElementsByTagName("h4");
const text = document.getElementsByTagName("p");

header[0].innerHTML = siteContent["main-content"]["features-h4"];
text[0].innerHTML = siteContent["main-content"]["features-content"];
header[1].innerHTML = siteContent["main-content"]["about-h4"];
text[1].innerHTML = siteContent["main-content"]["about-content"];
header[2].innerHTML = siteContent["main-content"]["services-h4"];
text[2].innerHTML = siteContent["main-content"]["services-content"];

header[3].innerHTML = siteContent["main-content"]["product-h4"];
text[3].innerHTML = siteContent["main-content"]["product-content"];
header[4].innerHTML = siteContent["main-content"]["vision-h4"];
text[4].innerHTML = siteContent["main-content"]["vision-content"];

//Footer
header[5].innerHTML = siteContent["contact"]["contact-h4"];
text[5].innerHTML = siteContent["contact"]["address"];
text[6].innerHTML = siteContent["contact"]["phone"];
text[7].innerHTML = siteContent["contact"]["email"];

text[8].innerHTML = siteContent["footer"]["copyright"];







