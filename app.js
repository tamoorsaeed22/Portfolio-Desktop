const nav = document.querySelector('.nav-open');
const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.nav-open .link ');
const html = document.querySelector('html');
const workSection = document.querySelector('.works-section');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const holding = document.querySelector('.holding');
const headline = document.querySelector('.headline');
const modalTitle = document.querySelector('.headline h3');
const closeImg = document.querySelector('.headline img');
const modalTags = document.querySelector('.holding .tags-holder');
const modalImgHolder = document.querySelector('.modal-img');
const modalImg = document.querySelector('.modal-img img');
const modalInfo = document.querySelector('.modal-info');
const modalDesc = modalInfo.querySelector('p');
const modalSkills = document.querySelector('.modal-skills');
const children = modalSkills.querySelectorAll('li');
const submit = document.querySelector('form');
const resultMsg = document.querySelector('.msg');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const msgInput = document.getElementById('message');
const inputs = document.querySelectorAll('.koko');
const handelNavClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

burgerMenu.addEventListener('click', handelNavClick);

const handelLinkClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

links.forEach((lin) => {
  lin.addEventListener('click', handelLinkClick);
});

// data
const cardsData = [
  {
    className: ['tonic', 'order1'],
    imgSrcMob: 'images/Screenshot (58).png',
    imgSrcDesk: 'images/budget_app_screenshot.png',
    skills: ['Ruby', 'Rails', 'PostgreSQL'],
    modalSkills: new Set([
      'ruby ',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'Budget-App',
    canopy: 'CANOPY',
    koko: 'girl',
    desc: 'Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking.',
    breif:
          'The Ruby on Rails capstone project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
  },
  {
    className: ['tonic', 'order1'],
    imgSrcMob: 'images/KanBan.png',
    imgSrcDesk: 'images/KanBan.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'Collaborative KanBan board Project',
    canopy: 'CANOPY',
    koko: 'girl',
    desc: 'The collaborative Kanban board project is designed to foster teamwork and enhance communication within a group or organization. It allows team members to easily collaborate on tasks, share updates, and delegate responsibilities in real time. By providing a centralized platform where team members can contribute, discuss, and coordinate their work, the collaborative Kanban board promotes synergy, productivity, and effective project management.',
    breif:
      'The Kanban board project, supervised by the Microverse platform, encompasses various aspects of web development. It focuses on testing the descriptiveness and clarity of the repository instructions, including pull request descriptions, the README file, and the HTML, CSS, and JavaScript code. Additionally, the project incorporates linters to ensure clean and error-free code. It covers key technologies such as Git, GitHub, Bootstrap, JavaScript, the Document Object Model (DOM), Webpack, and JEST. With a focus on TV shows and movies, this project merges both functionality and visual appeal to create an interactive and engaging user experience.',
  },
  {
    className: ['tonic', 'order2'],
    imgSrcMob: 'images/To-Do.png',
    imgSrcDesk: 'images/To-Do.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'To-Do list project',
    canopy: 'CANOPY',
    koko: 'woman',
    desc: 'A to-do list is a helpful tool for organizing tasks and managing your time effectively. By jotting down your tasks and prioritizing them, you can stay focused, avoid forgetting important responsibilities, and experience a sense of accomplishment as you tick off completed items.',
    breif:
      'When creating a project, utilizing tools like WebHint, Stylelint, ESlint, Node Package Manager (NPM), ES6, and Webpack can enhance the development process. WebHint aids in identifying and resolving web accessibility, performance, and security issues. Stylelint ensures consistent and error-free CSS coding practices. ESlint helps catch JavaScript code errors and enforce coding standards. NPM facilitates package management and dependency tracking. ES6 introduces modern JavaScript features, improving code readability and efficiency. Webpack simplifies module bundling and asset management. By incorporating these tools into the project workflow, developers can enhance code quality, optimize performance, and streamline the development process.',
  },
  {
    className: ['tonic', 'order3'],
    imgSrcMob: 'images/Awsome Books.png',
    imgSrcDesk: 'images/Awsome Books.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    koko: 'man',
    title: 'Awsome-books Project',
    canopy: 'CANOPY',
    desc: 'The "Awsome-books-ES6" project is a JavaScript application that focuses on demonstrating and exploring the features and capabilities of ES6. It provides a simple and intuitive interface for managing a collection of books, allowing users to add, remove, and update book details such as title, author, and ISBN. ',
    breif:
      'The "Awsome-books-ES6" project was meticulously crafted with the goal of showcasing the power and versatility of ES6 (ECMAScript 2015) in the realm of JavaScript development. The project began with a thoughtful analysis of the features and improvements introduced in ES6, including arrow functions, template literals, classes, and modules. With a clear understanding of these enhancements, the development team embarked on architecting an application that leverages these features to their fullest potential.Furthermore, modern JavaScript practices such as arrow functions and template literals were employed extensively throughout the codebase. Arrow functions offered concise and expressive syntax, improving code readability and reducing the verbosity of traditional function expressions. Template literals, on the other hand, provided a convenient way to create dynamic strings, enabling the seamless integration of variables and expressions within text.The "Awsome-books-ES6" project also made use of ES6 classes, allowing for object-oriented programming paradigms to be implemented with elegance and clarity. Classes served as blueprints for creating book objects, with encapsulated properties and methods that simplified the manipulation and management of book data. This approach resulted in a more intuitive and structured codebase, making it easier to understand and maintain.',
  },
  {
    className: ['tonic', 'order4'],
    imgSrcMob: 'images/mobile.png',
    imgSrcDesk: 'images/desktop.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'Creative commons global summit project ',
    canopy: 'CANOPY',
    koko: 'boy',
    desc: 'The Creative Commons Global Summit is an annual gathering that brings together a diverse community of creators, activists, and advocates of open content and open licensing. It serves as a platform for sharing knowledge, discussing emerging trends, and fostering collaborations that aim to promote the principles of open access and creative commons licensing worldwide..',
    breif:
      'I demonstrated proficiency in creating web pages by utilizing semantic HTML tags and adhering to best practices in HTML code. Furthermore, I employed CSS selectors correctly and implemented the CSS box model effectively. To structure and position elements on the page, I utilized Flexbox, ensuring a responsive design that adapts to various screen sizes through the use of media queries.In addition to this, I leveraged GitHub Pages for deploying web pages, showcasing my ability to make projects accessible and easily shareable. When it came to JavaScript, I followed best practices and language style guides, ensuring clean and maintainable code. I utilized JavaScript to manipulate DOM elements and handle events, allowing for dynamic interactions on the webpage.To store and access data, I effectively utilized objects, enabling efficient data management. Lastly, I effectively communicated technical concepts to other technical individuals, demonstrating my ability to convey complex ideas and information to fellow professionals in a clear and concise manner.By combining these skills and practices, I was able to create a cohesive and well-rounded web development project. ',
  },
];

// Creating cards dynamicly
cardsData.forEach((card) => {
  // holders
  const parent = document.createElement('div');
  const group = document.createElement('div');
  const image = document.createElement('div');
  const tagsHolder = document.createElement('div');
  const skills = document.createElement('ul');

  // children
  const mobileImg = document.createElement('img');
  const desktopImg = document.createElement('img');
  const button = document.createElement('button');

  // text
  const title = document.createElement('h2');
  const canopy = document.createElement('h3');
  const desc = document.createElement('p');

  // tags
  const dot = document.createElement('div');
  const dot2 = document.createElement('div');
  const tag = document.createElement('span');
  const tag2 = document.createElement('span');

  // set classes
  parent.classList.add(...card.className);
  group.classList.add('group');
  image.classList.add('image');
  mobileImg.classList.add('mobile-img');
  desktopImg.classList.add('desktop-img');
  tagsHolder.classList.add('tags-holder');
  skills.classList.add('skills');
  button.classList.add('view-project');
  canopy.classList.add('canopy');
  tag.classList.add('tag');
  tag2.classList.add('tag');
  dot2.classList.add('dot');
  dot.classList.add('dot');

  // set inner text values
  desc.innerText = card.desc;
  title.innerText = card.title;
  canopy.innerText = card.canopy;
  tag.innerText = 'Back End Dev';
  tag2.innerText = '2022';
  button.innerText = 'See project';

  // set img src
  mobileImg.src = card.imgSrcMob;
  desktopImg.src = card.imgSrcDesk;

  // append children
  image.append(mobileImg, desktopImg);
  tagsHolder.append(canopy, dot, tag, dot2, tag2);
  let contet = '';
  card.skills.forEach((skl) => {
    contet += `<li class='btn-skill'>${skl}</li>`;
    skills.innerHTML = contet;
  });

  group.append(title, tagsHolder, desc, skills, button);
  parent.append(image, group);
  workSection.appendChild(parent);

  // handel click event
  button.addEventListener('click', () => {
    modal.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // set classes
    modal.classList.add('modal');
    holding.classList.add('holding');
    headline.classList.add('headline');
    overlay.classList.add('active-modal');
    html.classList.add('modal-noscroll');

    // set text value
    modalTitle.textContent = card.title;
    modalImg.src = card.imgSrcDesk;
    modalDesc.textContent = card.breif;
    let skillContetnt = '';
    card.modalSkills.forEach((skl) => {
      skillContetnt += `<li class='btn-skill'>${skl}</li>`;
      modalSkills.innerHTML = skillContetnt;
    });
    skillContetnt = '';
  });
});

overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('overlay')) {
    overlay.classList.remove('active-modal');
    html.classList.remove('modal-noscroll');
  }
});

closeImg.addEventListener('click', (e) => {
  overlay.classList.remove('active-modal');
  html.classList.remove('modal-noscroll');
});

// handel form validation
submit.addEventListener('submit', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    resultMsg.textContent = 'Email must be in lower case';
    resultMsg.style.color = 'red';
    return false;
  }
  return true;
});

const { inputName, email, message } = JSON.parse(
  localStorage.getItem('formData'),
);

const formData = {
  inputName,
  email,
  message,
};

// localstorage part

inputs.forEach((inp) => {
  inp.addEventListener('keyup', (e) => {
    const { name, value } = e.target;
    formData[name] = value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const { inputName, email, message } = JSON.parse(
    localStorage.getItem('formData'),
  );
  nameInput.value = inputName;
  emailInput.value = email;
  msgInput.value = message;
});