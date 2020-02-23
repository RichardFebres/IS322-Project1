// Product data here which will be used to create cards
const mockData = [
    {
      title: "Retro Bred 4's",
      image: "img/Bred_Retro4.jpg",
      type: ['high-top', 'basketball'],
      price: 250.00
    },

    {
        title: "Killshots",
        image: "img/Killshots.jpg",
        type: ['low-top', 'walking'],
        price: 90.00
    },

    {
        title: "Air Hurache's",
        image: "img/Air_Hurache.jpg",
        type: ['high-top', 'running'],
        price: 110.00
    },

    {
        title: "LeBron 11 Silver-Wolf Grey",
        image: "img/Silver_Wolf_Gray_Lebron11.jpg",
        type: ['high-top', 'basketball'],
        price: 81.00
    },

    {
        title: "Puma Axelion Breathe",
        image: "img/Puma_Axelion_Breathe.jpg",
        type: ['low-top', 'running'],
        price: 60.00
    },

    {
        title: "Adidas Ultraboosts ATR",
        image: "img/Adidas_Ultraboosts_ATR.jpg",
        type: ['high-top', 'walking'],
        price: 139.00
    },

    {
        title: "Kevin Durant 11 Grey",
        image: "img/Kevin_Durant_11_Grey.jpg",
        type: ['high-top', 'basketball'],
        price: 93.00
    },

    {
        title: "Kyrie Three Samurai",
        image: "img/Kyrie_Three_Samurai.jpg",
        type: ['low-top', 'basketball'],
        price: 120.00
    },
];

// Categories to sort by
const filterableCategories = ['high-top', 'low-top', 'basketball', 'running', 'walking'];

// Constructor used to create objects to store cards and access root level element
function ProductsFromDB (_element, products) {
    let self = Object.create(ProductsFromDB);

    // Generates cards and populates it with content from
    let createCardFromData = ({title, image, price}) => {
        let _card = document.createElement('div');
        let _content = document.createElement('div');
        let _title = document.createElement('div');
        let _image = document.createElement('img');
        let _price = document.createElement('div');

        _card.className = 'card';
        _content.className = 'card-content';
        _title.className = 'title';
        _title.textContent = title;
        _image.className = 'image';
        _image.src = `img/${_image}`;
        _price.textContent = `${_price}`;

        _content.appendChild(_title);
        _content.appendChild(_image);
        _content.appendChild(_price);

        _card.appendChild(_content);

        return _card;
    };

    // Renders product cards from newly constructed objects to be consumed by callbacks
    function renderProductCards(callback) {

        _element.innerHTML='';

        callback(products).forEach((products) => {
            let _card = createCardFromData(products);
            _element.appendChild(_card);
        });
    }

    // Define callbacks to be used for event listener


}




/* Event listener which hooks to select menus
document.addEventListener('DOMContentLoaded', function(event) {
    let byMenuOption =
}

 */






