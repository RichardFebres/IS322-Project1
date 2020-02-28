
(function productList() {

    // Product data here which will be used to create cards
    const productData = [
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
    const possibleTypes = ['high-top', 'low-top', 'basketball', 'running', 'walking'];


    // Display products inside of #content-container
    function renderCards(products) {
        let _cardContainer = document.querySelector('#content-container');

        _cardContainer.innerHTML = '';

        let _cards = products.map(function(product) {
            return '<div id="content-container"></div>' +
                   '<div class="card"></div>' +
                   '<div class="card-content"</div>' +
                   '<div class="title"></div>' + product.title +
                   '<img alt="Product Image" src="'+  product.image +'">' +
                   '<div class="price"></div>' + '$' + product.price;
        });

        _cards.forEach(function(_card) {
            _cardContainer.innerHTML += _card;
        });
    }

    renderCards(productData);

    let orderByTitle = ((sortValue) => {

        let sortedResults = (sortValue === 'asc-title') ?
            productData.sort((a, b) => {
                a.title.toLowerCase();
                b.title.toLowerCase();

                return a.title > b.title ? -1 : 1;
            }):
            productData.sort((a, b) => {
                a.title.toLowerCase();
                b.title.toLowerCase();

                return a.title < b.title ? 1 : -1;
            });

        renderCards(sortedResults);
    });

    let orderByPrice = ((sortValue) => {
       let sortedResults = (sortValue === 'asc-price') ?
        productData.sort((a, b) => {
            return a.price - b.price;
        }):
       productData.sort((a,b) => {
             return b.price - a.price;
           });

        renderCards(sortedResults);
    });

    let setPriceRange = ((min, max) => {
        let filteredResults = productData.filter((productData) => {
            return productData.price >= min && productData.price <= max;
        });
        renderCards(filteredResults);
    });

    let setType = (possibleTypes) => {
        let filteredResults = productData.filter((productData) => {
            return productData.type.includes(possibleTypes);
        });
        renderCards(filteredResults);
    };

    // Event Listener to hook onto changes made upon select
    document.querySelector('.orderBy').addEventListener('change', function (event) {

        let orderBy = document.getElementsByClassName('.orderBy');
        let sortValue = orderBy.options[orderBy.selectedIndex].value;

       switch(sortValue) {

          case 'asc-title': orderByTitle('asc-title');
          break;
          case 'desc-title': orderByTitle('desc-title');
          break;
          case 'asc-price': orderByPrice('asc-price');
          break;
          case 'desc-price': orderByPrice('desc-price');
       }


    });
})();



