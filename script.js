const animals = [
  {
    id: 1,
    name: "Corgi",
    price: "$" + 500,
    description:
      "A small, fluffy dog breed with a friendly and outgoing personality.",
    image:
      "https://images.theconversation.com/files/438138/original/file-20211216-25-1hu3e65.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
    category: "Dogs",
  },
  {
    id: 2,
    name: "Persian Cat",
    price: "$" + 800,
    description:
      "A beautiful, long-haired cat breed known for their sweet and gentle personalities.",
    image:
      "https://cdn.pixabay.com/photo/2020/06/04/15/52/kitten-5259329__340.jpg",
    category: "Cats",
  },
  {
    id: 3,
    name: "African Grey Parrot",
    price: "$" + 1200,
    description:
      "A highly intelligent and talkative bird species that make great companions.",
    image: "https://i.ytimg.com/vi/RfXxh0Eff_w/maxresdefault.jpg",
    category: "Birds",
  },
  {
    id: 4,
    name: "Bearded Dragon",
    price: "$" + 150,
    description:
      "A reptile species that are easy to care for and make great pets for beginners.",
    image:
      "http://cdn.shopify.com/s/files/1/0127/7486/7034/articles/aw_bearded_dragon_1024x.jpg?v=1582158799",
    category: "Reptiles",
  },
  {
    id: 5,
    name: "Goldfish",
    price: "$" + 10,
    description:
      "A popular freshwater fish species that are easy to care for and make great pets for kids.",
    image:
      "https://image.petmd.com/files/styles/863x625/public/goldfish-swimmingtoward_285011336_0.jpg",
    category: "Fish",
  },
  {
    id: 6,
    name: "Rabbit",
    price: "$" + 200,
    description:
      "A cute and cuddly small animal species that make great indoor pets.",
    image:
      "https://www.thesprucepets.com/thmb/PYJiButDwZb4JNzGE1gwfsI6YYs=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txp14acff329Kw100_Medium_1360769-5aec7baefa6bcc00373c6cb7.jpg",
    category: "Small Animals",
  },
  {
    id: 7,
    name: "Bengal Cat",
    price: "$" + 1000,
    description:
      "A beautiful, spotted cat breed known for their energetic and playful personalities.",
    image:
      "https://www.purina.com.au/-/media/project/purina/main/breeds/cat/cat_bengal-cat_desktop.jpg?h=475&la=en&w=825&hash=4F7E4F869B11FE60B9501C39EC4DA046",
    category: "Cats",
  },
  {
    id: 8,
    name: "French Bulldog",
    price: "$" + 1500,
    description:
      "A small, muscular dog breed known for their affectionate and playful personalities.",
    image:
      "https://cdn-6212c8e2c1ac198840e9c663.closte.com/wp-content/uploads/2022/08/arlene-tomkings-puppies-3-1024x683.jpg",
    category: "Dogs",
  },
  {
    id: 9,
    name: "Hamster",
    price: "$" + 20,
    description:
      "A small, furry rodent species that are easy to care for and make great pets for kids.",
    image:
      "https://petkeen.com/wp-content/uploads/2021/04/hamster-eating4-pixabay-760x506.jpg",
    category: "Small Animals",
  },
  {
    id: 10,
    name: "Siamese Fighting Fish",
    price: "$" + 15,
    description:
      "A beautiful freshwater fish species that are easy to care for and come in a variety of colors.",
    image: "https://cdn.mos.cms.futurecdn.net/RY2EpSo74hvYXyAVpTN2Gg.jpg",
    category: "Fish",
  },
];

animals.forEach(function (animal) {
  const card = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = animal.name;

  const price = document.createElement("p");
  price.textContent = animal.price;

  const description = document.createElement("p");
  description.textContent = animal.description;

  const image = new Image(400, 200);
  image.src = animal.image;

  const addToCardBtn = document.createElement("button");
  addToCardBtn.textContent = "Add to Cart";

  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(image);
  card.appendChild(addToCardBtn);

  document.body.appendChild(card);
});
