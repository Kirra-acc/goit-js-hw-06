const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector(".gallery");

// const template = `
//   <li class="image">
//     <img src="${image.url}" alt="${image.alt}">
//   </li>
// `;

// images.forEach((image) => {
//   const html = template.replace(/{{image}}/g, JSON.stringify(image));
//   gallery.insertAdjacentHTML("afterbegin", html);
// });

// gallery.classList.add("flex");
// gallery.querySelectorAll(".image").forEach((image) => {
//   image.classList.add("w-full");
// });


const gallery = document.querySelector(".gallery");

const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("w-full");
  fragment.appendChild(img);
});

gallery.appendChild(fragment);

gallery.classList.add("flex");