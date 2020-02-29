
(function productList() {

    // Product data here which will be used to create cards
    const productData = [
        {
          title: "Retro Bred 4's",
          image: "img/Bred_Retro4.jpg",
          type: 'high-top',
          price: 250.00
        },

        {
            title: "Killshots",
            image: "img/Killshots.jpg",
            type:  'walking',
            price: 90.00
        },

        {
            title: "Air Hurache's",
            image: "img/Air_Hurache.jpg",
            type: 'running',
            price: 110.00
        },

        {
            title: "LeBron 11 Silver-Wolf Grey",
            image: "img/Silver_Wolf_Gray_Lebron11.jpg",
            type:  'basketball',
            price: 81.00
        },

        {
            title: "Puma Axelion Breathe",
            image: "img/Puma_Axelion_Breathe.jpg",
            type:  'running',
            price: 60.00
        },

        {
            title: "Adidas Ultraboosts ATR",
            image: "img/Adidas_Ultraboosts_ATR.jpg",
            type:  'walking',
            price: 139.00
        },

        {
            title: "Kevin Durant 11 Grey",
            image: "img/Kevin_Durant_11_Grey.jpg",
            type:  'basketball',
            price: 93.00
        },

        {
            title: "Kyrie Three Samurai",
            image: "img/Kyrie_Three_Samurai.jpg",
            type:  'basketball',
            price: 120.00
        },
    ];

    // Display products inside of #content-container
    function renderCards(products) {
        let _cardContainer = document.querySelector('#content-container');

        _cardContainer.innerHTML = '';


        let _cards = products.map(function(product) {
            return '<div class="card"><img alt="Product image" src="'+ product.image + '">'
                +  '<div class="card-content"><h3>' + product.title +
                   '</h3><div class="price">' + product.price +
                   '</div></div></div>';

        });

        _cards.forEach(function(_card) {
            _cardContainer.innerHTML += _card;
        });
    }

    renderCards(productData);

    let orderBy = (( sortValue) => {

        let sortedResults = [];

        if (sortValue === 'title') {
            sortedResults = productData.sort((a, b) => {
                a.title.toLowerCase();
                b.title.toLowerCase();
                return a.title > b.title ? -1 : 1;
            });
        } else {
            sortedResults = productData.sort((a,b) => {
                return a[sortValue] - b[sortValue];
            });
        }

        renderCards(sortedResults);
    });

    document.querySelector('#orderBy').addEventListener('change', function (event) {

        orderBy(event.target.value);

    });



    let filterPriceRange = (( priceDescription) => {
        let priceRanges = {cheap: [50, 100], medium: [101, 200], expensive: [201, 100000]};
        let range = priceRanges[priceDescription];

        if (!range) return renderCards(productData);

        let filteredResults = productData.filter(function(_card) {
            return _card.price > range[0] && _card.price < range[1];
        });
        renderCards(filteredResults);
    });

    document.querySelector('#priceRange').addEventListener('change', function(event) {
        filterPriceRange(event.target.value);
    });

    let filterType = (type) => {

        if (!type) return renderCards(productData);

        let filteredResults = productData.filter((_card) => {
            return _card.type === type;
        });
        renderCards(filteredResults);
    };

    document.querySelector('#type').addEventListener('change', function (event) {

        filterType(event.target.value);

    });
})();



