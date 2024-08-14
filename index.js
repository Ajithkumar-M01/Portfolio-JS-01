const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
document.head.appendChild(link);

const icon1 = document.createElement('span');
icon1.className = `material-symbols-outlined`;
icon1.innerText = 'close'; 
// document.body.appendChild(icon1); 

const icon2 = document.createElement('span');
icon2.className = `material-symbols-outlined`;
icon2.innerText = 'close_small'; 
// document.body.appendChild(icon2); 

const main = document.getElementById("main")
const aboutBtn = document.getElementById("about")
const projectBtn = document.getElementById("projects")
const contactBtn = document.getElementById("contact")
const footer = document.getElementById("foot")

aboutBtn.addEventListener("click",aboutWindow)
projectBtn.addEventListener("click",projectWindow)
contactBtn.addEventListener("click",contactWindow)

let aboutPageVisible = false
let projectPageVisible = false
let contactPageVisible = false

// const localTime = document.createElement("div")
// footer.appendChild(localTime)

const localTime = document.getElementById("localTime")

function updateTime() {
    const now = new Date()
    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()
    localTime.innerHTML = `${time} <br> ${date}`
}

setInterval(updateTime, 1000);

function aboutWindow() {
    const aboutPage = document.createElement("div")

    
        main.innerHTML = ""

        aboutPage.classList.add("about-page", "fadeIn")
        const deleteBtn1 = document.createElement("button")
        deleteBtn1.appendChild(icon1)
        // deleteBtn1.innerText = "X"
        deleteBtn1.classList.add("delete-btn")

        deleteBtn1.addEventListener("click", () => {
            main.removeChild(aboutPage)
            // aboutPageVisible = false
        })
        // --------------------------------------------------------
        const aboutMeBtn = document.createElement("div")
        aboutMeBtn.classList.add("aboutme-btn")
        const aboutTitle = document.createElement("p")
        aboutTitle.classList.add("folder-title")
        aboutTitle.innerText = "About Me"

        const aboutFolder = document.createElement("div")
        aboutFolder.classList.add("folder")
        aboutFolder.appendChild(aboutMeBtn)
        aboutFolder.appendChild(aboutTitle)
        // --------------------------------------------------
        const educationBtn = document.createElement("div")
        educationBtn.classList.add("education-btn")
        const eduTitle = document.createElement("p")
        eduTitle.classList.add("folder-title")
        eduTitle.innerText = "Education"

        const eduFolder = document.createElement("div")
        eduFolder.classList.add("folder")
        eduFolder.appendChild(educationBtn)
        eduFolder.appendChild(eduTitle)
        // ------------------------------------------------------------
        const experienceBtn = document.createElement("div")
        experienceBtn.classList.add("education-btn")
        const expTitle = document.createElement("p")
        expTitle.classList.add("folder-title")
        expTitle.innerText = "Experience"

        const expFolder = document.createElement("div")
        expFolder.classList.add("folder")
        expFolder.appendChild(experienceBtn)
        expFolder.appendChild(expTitle)

        const aboutBody = document.createElement("div")
        aboutBody.classList.add("about-body")

        main.appendChild(aboutPage)
        aboutPage.appendChild(deleteBtn1)
        aboutPage.appendChild(aboutBody)

        aboutBody.appendChild(aboutFolder)
        aboutBody.appendChild(expFolder)
        aboutBody.appendChild(eduFolder)

        
        // about page visible
        aboutMeBtn.addEventListener("click", ()=>{
            const aboutMePage = document.createElement("div")
            aboutMePage.classList.add("page0", "fadeIn")
            aboutPage.appendChild(aboutMePage)

            const deleteBtn2 = document.createElement("button")
            deleteBtn2.appendChild(icon2)
            // deleteBtn2.innerText = "X"
            deleteBtn2.classList.add("delete-btn")
            aboutMePage.appendChild(deleteBtn2)

            deleteBtn2.addEventListener("click", () => {
                aboutPage.removeChild(aboutMePage)
            })
            
            const aboutName = document.createElement("h1")
            // aboutName.classList.add("my-name")
            aboutName.innerText = "About Me"
            const aboutText2 = document.createElement("p")
            aboutText2.innerHTML = `I am an emerging Front-End Developer who is on a misson to become the Full-Stack Developer and learned the fundamentals of HTML, CSS and JavaScript so far.`
            aboutText2.classList.add("about-text2")
            const aboutText3 = document.createElement("h2")
            aboutText3.innerText = "My Skills"
            const aboutText4 = document.createElement("img")
            aboutText4.classList.add("tools-img")
            aboutText4.src = "tools.png"

            aboutMePage.appendChild(aboutName)
            aboutMePage.appendChild(aboutText2)
            aboutMePage.appendChild(aboutText3)
            aboutMePage.appendChild(aboutText4)

        })
        // experience page visible
        experienceBtn.addEventListener("click", ()=>{
            const experiencePage = document.createElement("div")
            experiencePage.classList.add("page0", "fadeIn")
            aboutPage.appendChild(experiencePage)

            const deleteBtn3 = document.createElement("button")
            deleteBtn3.appendChild(icon2)
            // deleteBtn3.innerText = "X"
            deleteBtn3.classList.add("delete-btn")
            experiencePage.appendChild(deleteBtn3)

            deleteBtn3.addEventListener("click", () => {
                aboutPage.removeChild(experiencePage)
            })
            
            const aboutText1 = document.createElement("h2")
            aboutText1.innerText = "Work Experience"
            const aboutText2 = document.createElement("h4")
            aboutText2.innerText = `Subject Matter Expert (2021-2023)`
            const aboutText3 = document.createElement("p")
            aboutText3.innerText = `Amazon Development Center`
            const aboutText4 = document.createElement("h4")
            aboutText4.innerText = `Customer Service Associate (2018-2021)`
            const aboutText5 = document.createElement("p")
            aboutText5.innerText = `Amazon Development Center`
            const aboutText6 = document.createElement("h2")

            experiencePage.appendChild(aboutText1)
            experiencePage.appendChild(aboutText2)
            experiencePage.appendChild(aboutText3)
            experiencePage.appendChild(aboutText4)
            experiencePage.appendChild(aboutText5)          

        })


        // education page visible
        educationBtn.addEventListener("click", ()=>{
            const educationPage = document.createElement("div")
            educationPage.classList.add("page0", "fadeIn")
            aboutPage.appendChild(educationPage)

            const deleteBtn4 = document.createElement("button")
            deleteBtn4.appendChild(icon2)
            // deleteBtn4.innerText = "X"
            deleteBtn4.classList.add("delete-btn")
            educationPage.appendChild(deleteBtn4)

            deleteBtn4.addEventListener("click", () => {
                aboutPage.removeChild(educationPage)
            })
            
            const aboutText1 = document.createElement("h2")
            aboutText1.innerText = "Education"
            const aboutText2 = document.createElement("h4")
            aboutText2.innerText = `Bachelor of Engineering`
            const aboutText03 = document.createElement("p")
            aboutText03.classList.add("edu-p")
            aboutText03.innerText = `Score: 7.67 CGPA | Academic Year: 2013-2017`
            const aboutText4 = document.createElement("p")
            aboutText4.innerText = `(Awarded as 'The Best Student' in co-curricular activities)`
            const aboutText5 = document.createElement("h4")
            aboutText5.innerText = `Higher Secondary`
            const aboutText06 = document.createElement("p")
            aboutText06.classList.add("edu-p")
            aboutText06.innerText = `Score: 88% | Academic Year: 2012-2013`
            const aboutText7 = document.createElement("h4")
            aboutText7.innerText = `SSLC`
            const aboutText08 = document.createElement("p")
            aboutText08.classList.add("edu-p")
            aboutText08.innerText = `Score: 88% | Academic Year: 2010-2011`
            
            educationPage.appendChild(aboutText1)
            educationPage.appendChild(aboutText2)
            educationPage.appendChild(aboutText03)
            educationPage.appendChild(aboutText4) 
            educationPage.appendChild(aboutText5)
            educationPage.appendChild(aboutText06)
            educationPage.appendChild(aboutText7)
            educationPage.appendChild(aboutText08)          

        })

        aboutPageVisible = true
    
}



function projectWindow() {
    const projectPage = document.createElement("div")


        main.innerText = ""
        projectPage.classList.add("project-page","fadeIn")
        const deleteBtn5 = document.createElement("button")
        deleteBtn5.appendChild(icon1)
        // deleteBtn5.innerText = "X"
        deleteBtn5.classList.add("delete-btn")
        main.appendChild(projectPage)
        projectPage.appendChild(deleteBtn5)

        deleteBtn5.addEventListener("click", () => {
            main.removeChild(projectPage)
            // projectPageVisible = false
        })

        // --------------------------------------------------------
        const projectsBtn1 = document.createElement("div")
        projectsBtn1.classList.add("aboutme-btn")
        const projectsTitle1 = document.createElement("p")
        projectsTitle1.classList.add("folder-title")
        projectsTitle1.innerText = "HTML + CSS Projects"

        const projectsFolder1 = document.createElement("div")
        projectsFolder1.classList.add("folder")
        projectsFolder1.appendChild(projectsBtn1)
        projectsFolder1.appendChild(projectsTitle1)
        // --------------------------------------------------
        const projectsBtn2 = document.createElement("div")
        projectsBtn2.classList.add("education-btn")
        const projectsTitle2 = document.createElement("p")
        projectsTitle2.classList.add("folder-title")
        projectsTitle2.innerText = "JS Projects"

        const projectsFolder2 = document.createElement("div")
        projectsFolder2.classList.add("folder")
        projectsFolder2.appendChild(projectsBtn2)
        projectsFolder2.appendChild(projectsTitle2)

        // --------------------------------------------------

        const projectsBody = document.createElement("div")
        projectsBody.classList.add("about-body")

        main.appendChild(projectPage)
        projectPage.appendChild(deleteBtn5)
        projectPage.appendChild(projectsBody)

        projectsBody.appendChild(projectsFolder1)
        projectsBody.appendChild(projectsFolder2)

        
        // project page 1 visible
        projectsBtn1.addEventListener("click", ()=>{
            const projectsPage1 = document.createElement("div")
            projectsPage1.classList.add("page", "fadeIn")
            projectPage.appendChild(projectsPage1)

            const deleteBtn6 = document.createElement("button")
            deleteBtn6.appendChild(icon2)
            // deleteBtn6.innerText = "X"
            deleteBtn6.classList.add("delete-btn")
            projectsPage1.appendChild(deleteBtn6)

            deleteBtn6.addEventListener("click", () => {
                projectPage.removeChild(projectsPage1)
            })
            
            const projectText1 = document.createElement("h2")
            projectText1.innerText = "Projects (HTML + CSS)"
            const projectText2 = document.createElement("p")
            projectText2.classList.add("project-titles")
            projectText2.innerHTML = `<a href="https://rad-daifuku-665679.netlify.app" target="_blank">Tokyo Foods</a>`
            const projectText3 = document.createElement("p")
            projectText3.classList.add("project-titles")
            projectText3.innerHTML = `<a href="https://glowing-kulfi-9c0b79.netlify.app" target="_blank">DC Heroes</a>`
            const projectText4 = document.createElement("p")
            projectText4.classList.add("project-titles")
            projectText4.innerHTML = `<a href="https://scintillating-puppy-99a842.netlify.app" target="_blank">Downloading Animation</a>`
            const projectText5 = document.createElement("p")
            projectText5.classList.add("project-titles")
            projectText5.innerHTML = `<a href="https://cosmic-creponne-2c2eb9.netlify.app" target="_blank">Election Blog</a>`
            const projectText6 = document.createElement("p")
            projectText6.classList.add("project-titles")
            projectText6.innerHTML = `<a href="https://celebrated-sunburst-795e24.netlify.app" target="_blank">Blog Website</a>`

            document.body.appendChild(projectText2);
            const anchorTag1 = projectText2.querySelector("a");
            anchorTag1.style.textDecoration = "none";
            anchorTag1.style.color = "white"
            anchorTag1.style.display = "block"
            document.body.appendChild(projectText3);
            const anchorTag2 = projectText3.querySelector("a");
            anchorTag2.style.textDecoration = "none";
            anchorTag2.style.color = "white"
            anchorTag2.style.display = "block"
            document.body.appendChild(projectText4);
            const anchorTag3 = projectText4.querySelector("a");
            anchorTag3.style.textDecoration = "none";
            anchorTag3.style.color = "white"
            anchorTag3.style.display = "block"
            document.body.appendChild(projectText5);
            const anchorTag4 = projectText5.querySelector("a");
            anchorTag4.style.textDecoration = "none";
            anchorTag4.style.color = "white"
            anchorTag4.style.display = "block"
            document.body.appendChild(projectText6);
            const anchorTag5 = projectText6.querySelector("a");
            anchorTag5.style.textDecoration = "none";
            anchorTag5.style.color = "white"
            anchorTag5.style.display = "block"

            projectsPage1.appendChild(projectText1)
            projectsPage1.appendChild(projectText2)
            projectsPage1.appendChild(projectText3)
            projectsPage1.appendChild(projectText4)
            projectsPage1.appendChild(projectText5)
            projectsPage1.appendChild(projectText6)


        })

        // project page 2 visible
        projectsBtn2.addEventListener("click", ()=>{
            const projectsPage2 = document.createElement("div")
            projectsPage2.classList.add("page", "fadeIn")
            projectPage.appendChild(projectsPage2)

            const deleteBtn7 = document.createElement("button")
            deleteBtn7.appendChild(icon2)
            // deleteBtn7.innerText = "X"
            deleteBtn7.classList.add("delete-btn")
            projectsPage2.appendChild(deleteBtn7)

            deleteBtn7.addEventListener("click", () => {
                projectPage.removeChild(projectsPage2)
            })
            
            const projectText1 = document.createElement("h2")
            projectText1.innerText = "Projects (HTML + CSS + JS)"
            const projectText2 = document.createElement("p")
            projectText2.classList.add("project-titles")
            projectText2.innerHTML = `<a href="https://fluffy-capybara-e76ff2.netlify.app" target="_blank">Games Sorter</a>`
            const projectText3 = document.createElement("p")
            projectText3.classList.add("project-titles")
            projectText3.innerHTML = `<a href="https://elaborate-gingersnap-daad95.netlify.app" target="_blank">Color Generator</a>`
            const projectText4 = document.createElement("p")
            projectText4.classList.add("project-titles")
            projectText4.innerHTML = `<a href="https://celebrated-alpaca-f3332f.netlify.app" target="_blank">Battery Animation</a>`
            const projectText5 = document.createElement("p")
            projectText5.classList.add("project-titles")
            projectText5.innerHTML = `<a href="https://capable-pasca-c16451.netlify.app" target="_blank">Traffic Lights</a>`
            const projectText6 = document.createElement("p")
            projectText6.classList.add("project-titles")
            projectText6.innerHTML = `<a href="https://chipper-melomakarona-ffbfdb.netlify.app" target="_blank">Photo Fetcher</a>`

            document.body.appendChild(projectText2);
            const anchorTag1 = projectText2.querySelector("a");
            anchorTag1.style.textDecoration = "none";
            anchorTag1.style.color = "white"
            anchorTag1.style.display = "block"
            document.body.appendChild(projectText3);
            const anchorTag2 = projectText3.querySelector("a");
            anchorTag2.style.textDecoration = "none";
            anchorTag2.style.color = "white"
            anchorTag2.style.display = "block"
            document.body.appendChild(projectText4);
            const anchorTag3 = projectText4.querySelector("a");
            anchorTag3.style.textDecoration = "none";
            anchorTag3.style.color = "white"
            anchorTag3.style.display = "block"
            document.body.appendChild(projectText5);
            const anchorTag4 = projectText5.querySelector("a");
            anchorTag4.style.textDecoration = "none";
            anchorTag4.style.color = "white"
            anchorTag4.style.display = "block"
            document.body.appendChild(projectText6);
            const anchorTag5 = projectText6.querySelector("a");
            anchorTag5.style.textDecoration = "none";
            anchorTag5.style.color = "white"
            anchorTag5.style.display = "block"

            projectsPage2.appendChild(projectText1)
            projectsPage2.appendChild(projectText2)
            projectsPage2.appendChild(projectText3)
            projectsPage2.appendChild(projectText4)
            projectsPage2.appendChild(projectText5)
            projectsPage2.appendChild(projectText6)          

        })

        projectPageVisible = true
      
}

function contactWindow() {
    const contactPage = document.createElement("div")
   
        main.innerText = ""
        contactPage.classList.add("contact-page","fadeIn")
        const deleteBtn8 = document.createElement("button")
        deleteBtn8.appendChild(icon1)
        // deleteBtn8.innerText = "X"
        deleteBtn8.classList.add("delete-btn")
        main.appendChild(contactPage)
        contactPage.appendChild(deleteBtn8)

        deleteBtn8.addEventListener("click", () => {
            main.removeChild(contactPage)
            // contactPageVisible = false
        })

        // --------------------------------------------------------
        const contactMeBtn = document.createElement("div")
        contactMeBtn.classList.add("education-btn")
        const contactTitle = document.createElement("p")
        contactTitle.classList.add("folder-title")
        contactTitle.innerText = "Contact Me"

        const contactFolder = document.createElement("div")
        contactFolder.classList.add("folder")
        contactFolder.appendChild(contactMeBtn)
        contactFolder.appendChild(contactTitle)
        // --------------------------------------------------
        const hireMeBtn = document.createElement("div")
        hireMeBtn.classList.add("education-btn")
        const hireTitle = document.createElement("p")
        hireTitle.classList.add("folder-title")
        hireTitle.innerText = "Hire Me"

        const hireFolder = document.createElement("div")
        hireFolder.classList.add("folder")
        hireFolder.appendChild(hireMeBtn)
        hireFolder.appendChild(hireTitle)
        // ------------------------------------------------------------
        const contactBody = document.createElement("div")
        contactBody.classList.add("about-body")

        main.appendChild(contactPage)
        contactPage.appendChild(deleteBtn8)
        contactPage.appendChild(contactBody)

        contactBody.appendChild(contactFolder)
        contactBody.appendChild(hireFolder)

        
        // contact me page visible
        contactMeBtn.addEventListener("click", ()=>{
            const contactMePage = document.createElement("div")
            contactMePage.classList.add("page", "fadeIn")
            contactPage.appendChild(contactMePage)

            const deleteBtn9 = document.createElement("button")
            deleteBtn9.appendChild(icon2)
            // deleteBtn9.innerText = "X"
            deleteBtn9.classList.add("delete-btn")
            contactMePage.appendChild(deleteBtn9)

            deleteBtn9.addEventListener("click", () => {
                contactPage.removeChild(contactMePage)
            })
            
            const contactText1 = document.createElement("h2")
            contactText1.innerText = "Contact Details"
            const contactText2 = document.createElement("h4")
            contactText2.innerHTML = `Mobile`
            const contactText3 = document.createElement("p")
            contactText3.innerText = "96-88-105-456"
            const contactText4 = document.createElement("h4")
            contactText4.innerText = "E-mail"
            const contactText5 = document.createElement("p")
            contactText5.innerText = "ajithkumaran.srk@gmail.com"

            contactMePage.appendChild(contactText1)
            contactMePage.appendChild(contactText2)
            contactMePage.appendChild(contactText3)
            contactMePage.appendChild(contactText4)
            contactMePage.appendChild(contactText5)

        })
        // hire me page visible
        hireMeBtn.addEventListener("click", ()=>{
            const hireMePage = document.createElement("div")
            hireMePage.classList.add("page", "fadeIn")
            contactPage.appendChild(hireMePage)

            const deleteBtn10 = document.createElement("button")
            deleteBtn10.appendChild(icon2)
            // deleteBtn10.innerText = "X"
            deleteBtn10.classList.add("delete-btn")
            hireMePage.appendChild(deleteBtn10)

            deleteBtn10.addEventListener("click", () => {
                contactPage.removeChild(hireMePage)
            })
              
            
        // email js------------------------------------------------------------
        // should go inside hireMePage
        // main div
        const contactContent = document.createElement("div")
        contactContent.classList.add("contact-content")
        // title
        const hireMeTitle = document.createElement("h3")
        hireMeTitle.classList.add("contact-title")
        hireMeTitle.innerText = "Hire Me !"
        // form
        const contactForm = document.createElement("form")
        contactForm.classList.add("contact-form")
        contactForm.id = "contact-form"
        const contactFormDiv1 = document.createElement("div")
        contactFormDiv1.classList.add("contact-form-div")
        const contactFormTag = document.createElement("label")
        contactFormTag.classList.add("contact-form-tag")
        contactFormTag.innerText = "Name"
        const contactFormInput = document.createElement("input")
        contactFormInput.classList.add("contact-form-input")
        contactFormInput.type = "text"
        contactFormInput.name = "user_name"
        contactFormInput.placeholder = "Enter your name"
        contactFormInput.id = "contact-name"
        const contactFormDiv2 = document.createElement("div")
        contactFormDiv2.classList.add("contact-form-div")
        const contactFormTag2 = document.createElement("label")
        contactFormTag2.classList.add("contact-form-tag")
        contactFormTag2.innerText = "Mail"
        const contactFormInput2 = document.createElement("input")
        contactFormInput2.classList.add("contact-form-input")
        contactFormInput2.type = "email"
        contactFormInput2.name = "user_email"
        contactFormInput2.placeholder = "Enter your mail"
        contactFormInput2.id = "contact-email"
        const contactFormDiv3 = document.createElement("div")
        contactFormDiv3.classList.add("contact-form-div", "contact-form-area")
        const contactFormTag3 = document.createElement("label")
        contactFormTag3.classList.add("contact-form-tag")
        contactFormTag3.innerText = "Project/Message"
        const contactFormInput3 = document.createElement("textarea")
        contactFormInput3.classList.add("contact-form-input2")
        contactFormInput3.name = "user_project"
        contactFormInput3.placeholder = "Enter your message"
        contactFormInput3.id = "contact-project"
        const contactButton = document.createElement("button")
        contactButton.classList.add("contact-button")
        contactButton.type = "submit"
        contactButton.innerText = "Submit"
        const contactMessage = document.createElement("p")
        contactMessage.classList.add("contact-message")
        contactMessage.id = "contact-message"

        contactForm.appendChild(contactFormDiv1)
        contactFormDiv1.appendChild(contactFormTag)
        contactFormDiv1.appendChild(contactFormInput)
        contactForm.appendChild(contactFormDiv2)
        contactFormDiv2.appendChild(contactFormTag2)
        contactFormDiv2.appendChild(contactFormInput2)
        contactForm.appendChild(contactFormDiv3)
        contactFormDiv3.appendChild(contactFormTag3)
        contactFormDiv3.appendChild(contactFormInput3)
        contactForm.appendChild(contactButton)
        contactForm.appendChild(contactMessage)

        contactContent.appendChild(hireMeTitle)
        contactContent.appendChild(contactForm)
        hireMePage.appendChild(contactContent)
        
        const sendEmail = (e) =>{
          e.preventDefault()
        
          if(contactFormInput.value === '' || contactFormInput2.value === '' || contactFormInput3.value === ''){
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')
        
            contactMessage.textContent = 'Write all the input fields 📩' 
          }else{
            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_9jvfuvt','template_z3s8kw8','#contact-form','DC_fLFYYwm-yxKlmm')
              .then(() =>{
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent 👍'
        
                setTimeout(() => {
                  contactMessage.textContent = ''
                },2000);
        
              }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
              })
        
            contactFormInput.value = ''
            contactFormInput2.value = ''
            contactFormInput3.value = ''
          }
        }
        contactForm.addEventListener('submit', sendEmail)
        
          })
        contactPageVisible = true
    
}

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form'),
//       contactName = document.getElementById('contact-name'),
//       contactEmail = document.getElementById('contact-email'),
//       contactProject = document.getElementById('contact-project'),
//       contactMessage = document.getElementById('contact-message')
      
// const sendEmail = (e) =>{
//   e.preventDefault()

//   // Check if the field has a value
//   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
//     // Add and remove color
//     contactMessage.classList.remove('color-blue')
//     contactMessage.classList.add('color-red')

//     // Show message
//     contactMessage.textContent = 'Write all the input fields 📩' 
//   }else{
//     // serviceID - templateID - #form - publicKey
//     emailjs.sendForm('service_9jvfuvt','template_z3s8kw8','#contact-form','DC_fLFYYwm-yxKlmm')
//       .then(() =>{
//         // Show message and add color
//         contactMessage.classList.add('color-blue')
//         contactMessage.textContent = 'Message sent ✅'

//         // Remove message after three seconds
//         setTimeout(() => {
//           contactMessage.textContent = ''
//         }, 5000);

//       }, (error) =>{
//         alert('OOPS! SOMETHING HAS FAILED...', error)
//       })

//     // To clear the input field
//     contactName.value = ''
//     contactEmail.value = ''
//     contactProject.value = ''
//   }
// }
// contactForm.addEventListener('submit', sendEmail)

// ------------------------------------------------------------------------------------------email js


// document.getElementById('toggleButton').addEventListener('click', function() {
//     var div = document.getElementById('myDiv');
//     if (div.style.display === 'none') {
//         div.style.display = 'block';
//     } else {
//         div.style.display = 'none';
//     }
// });

// function aboutWindow() {
//     let aboutPage = document.querySelector('.about-page');

//     if (!aboutPage) {
//         aboutPage = document.createElement("div");
//         aboutPage.classList.add("about-page");
//         main.appendChild(aboutPage);
//     }

//     if (aboutPageVisible) {
        
//         aboutPage.classList.remove('fadeIn');
//         aboutPage.classList.add('fadeOut');
        
//         aboutPage.addEventListener('animationend', function handleAnimationEnd() {
//             aboutPage.style.display = 'none';
//             aboutPage.classList.remove('fadeOut');
//             aboutPage.removeEventListener('animationend', handleAnimationEnd);
//         });
        
//         aboutPageVisible = false;
//     } else {
//         // aboutPage.style.display = 'block';
//         aboutPage.classList.remove('fadeOut');
//         void aboutPage.offsetWidth; // Force reflow
//         aboutPage.classList.add('fadeIn');
        
//         aboutPageVisible = true;
//     }
// }


// function projectWindow() {
//     const aboutPage = document.createElement("div")

//     if (projectPageVisible) {
//         main.innerText = ""
//         aboutPage.classList.add("project-page","fadeOut")
//         main.appendChild(aboutPage)
//         projectPageVisible = false;
//     } else {
//         main.innerText = ""
//         aboutPage.classList.add("project-page","fadeIn")
//         main.appendChild(aboutPage)
//         projectPageVisible = true
//     }    
// }


