import worksList from "./modules/work.js";

const works = [
  {
    name: "Academia Studio Energy",
    description: "Projeto realizado para a academia studio energy",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "Academia Studio Energy 2",
    description: "Projeto realizado para a academia studio energy",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "Academia Studio Energy 3",
    description: "Projeto realizado para a academia studio energy",
    image: "https://source.unsplash.com/random",
  },
];

worksList(works, document.querySelector(".am-work__list"));
