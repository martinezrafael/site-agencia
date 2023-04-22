export default function worksList(arr, rootElement) {
  let root = rootElement;

  arr.forEach((item) => {
    root.innerHTML += `
      <a href='htttp://www.google.com.br' target='_blank'>
        <div class='am-work__item'>
        </div>
      </a>
    `;
  });
}

// arr.forEach((item) => {
//   root.innerHTML += `
//     <div class='am-work__item'>
//       <img class='am-work__image' src='${item.image}' />
//       <h3 class='am-work__title'>${item.name}</h3>
//       <p class='am-work__description'>${item.description}</p>
//     </div>
//   `;
// });
