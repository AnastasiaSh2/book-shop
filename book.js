'use strict';

  const rootBlock = document.querySelector('body');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const sectionFirst = document.createElement('section');
  const sectionSecond = document.createElement('section');
  const footer = document.createElement('footer');
  const cartTitle = document.createElement('h2');
  const catalogTitle = document.createElement('h2');
  const cardsDiv = document.createElement('div');
  const cardsOrder = document.createElement('div');
  const hr = document.createElement('hr');
  const bookFooter = document.createElement('img');
  const buttonOrder = document.createElement('button');
  let total = document.createElement('h5');
  let counter = 0;

  let fragmentBody = new DocumentFragment();
  fragmentBody.appendChild(header);
  fragmentBody.appendChild(main);
  main.append(sectionSecond);
  sectionSecond.append(cartTitle);
  sectionSecond.appendChild(cardsOrder);
  sectionSecond.appendChild(hr);
  sectionSecond.appendChild(total);
  sectionSecond.appendChild(buttonOrder);
  sectionSecond.appendChild(bookFooter);
  main.prepend(sectionFirst);
  sectionFirst.append(catalogTitle);
  sectionFirst.appendChild(cardsDiv);
  fragmentBody.appendChild(footer);
  rootBlock.appendChild(fragmentBody);

  header.classList.add('header');
  main.className = 'main main-page';
  footer.classList.add('footer');
  sectionFirst.className = "section section__catalog";
  sectionSecond.className = "section section__order";
  cartTitle.className = 'cart-title';
  cartTitle.innerHTML = 'Your order';
  catalogTitle.className = 'cart-title';
  catalogTitle.innerHTML = 'Catalog';
  cardsDiv.className = 'cards';
  cardsOrder.className = 'cards';
  hr.className = 'hr';
  buttonOrder.className = 'order__button';
  buttonOrder.innerText = 'Add card';

  let headerContainer = document.createElement('div');
  headerContainer.className = 'container header__container';
  let titleMain = document.createElement('h1');
  titleMain.className = 'title';
  titleMain.innerText = 'Welcome to amazing book-hop';
  let logoMain = document.createElement('div');
  logoMain.className = 'logo';

let fragmentHeader = new DocumentFragment();
fragmentHeader.appendChild(headerContainer);
headerContainer.appendChild(logoMain);
logoMain.appendChild(titleMain);
header.appendChild(fragmentHeader);

  let copyright = document.createElement('div');
  copyright.className = 'copyright';
  let copyrightText = document.createElement('p');
  copyrightText.className = 'copyright__text';
  copyrightText.innerText = `Author`;
  let copyrightLink = document.createElement('a');
  copyrightLink.className = 'link';
  copyrightLink.href = 'https://github.com/AnastasiaSh2';
  copyrightLink.innerText = 'AnastasiaSh';
  let copyrightMark = document.createElement('p');
  copyrightMark.className = 'copyright__text';
  copyrightMark.innerText = `© 2022`;

  let fragmentFooter = new DocumentFragment();
  fragmentFooter.appendChild(copyright);
  copyright.appendChild(copyrightText);
  copyright.appendChild(copyrightLink);
  copyright.appendChild(copyrightMark);
  footer.appendChild(fragmentFooter);

fetch('books.json', { mode: 'no-cors' })
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach((element) => {
      let cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      let cardMain = document.createElement('div');
      cardMain.className = 'card__main-block';
      let cardTitle = document.createElement('h2');
      cardTitle.className = 'card-title';
      cardTitle.id = 'author';
      let cardImg = document.createElement('img');
      cardImg.className = 'card-img';
      cardImg.id = 'imageLink';
      cardImg.alt = '';
      let cardSubtitle = document.createElement('h3');
      cardSubtitle.className = 'card-subtitle';
      cardSubtitle.id = 'title';
      let cardLink = document.createElement('a');
      cardLink.className = 'card-link';
      let linkInfo = document.createElement('h5');
      linkInfo.className = 'link-info';
      linkInfo.innerText = 'more...';
      linkInfo.style.textTransform = 'uppercase';
      let priceBlock = document.createElement('div');
      priceBlock.className = 'price-block';
      let cardPrice = document.createElement('p');
      cardPrice.className = 'card-price';
      cardPrice.id = 'price';
      let cardLinkSecond = document.createElement('a');
      cardLinkSecond.className = 'card__link';
      let cardImgSecond = document.createElement('img');
      cardImgSecond.className = 'card-img';
      cardImgSecond.src = '/img/2089348.png';
      cardImgSecond.alt = '';

      let cardTextBlock = document.createElement('div');
      cardTextBlock.className = 'card__text-block';

      let fragmentBook = new DocumentFragment();
      fragmentBook.appendChild(cardDiv);
      cardDiv.appendChild(cardMain);
      cardMain.appendChild(cardImg);
      cardDiv.appendChild(cardTextBlock);
      cardTextBlock.appendChild(cardTitle);
      cardTextBlock.appendChild(cardSubtitle);
      cardDiv.appendChild(cardLink);
      cardLink.appendChild(linkInfo);
      cardDiv.appendChild(priceBlock);
      priceBlock.appendChild(cardLinkSecond);
      cardLinkSecond.appendChild(cardImgSecond);
      cardLinkSecond.appendChild(cardPrice);
      cardsDiv.appendChild(fragmentBook);

      cardTitle.innerText = element.author;
      cardImg.src = element.imageLink;
      cardSubtitle.innerText = element.title;
      cardPrice.innerText = `$${element.price}`;

      let cardOrder = document.createElement('div');
      cardOrder.className = 'card';
      let cardOrderImg = document.createElement('img');
      cardOrderImg.className = 'card-img';
      cardOrderImg.id = 'imageLink';
      cardOrderImg.alt = '';
      let cardOrderMain = document.createElement('div');
      cardOrderMain.className = 'card__main-block';
      let cardOrderTitle = document.createElement('h2');
      cardOrderTitle.className = 'card-title';
      cardOrderTitle.id = 'author';
      let cardOrderDescription = document.createElement('h3');
      cardOrderDescription.className = 'card-description';
      let cardOrderPriceBlock = document.createElement('div');
      cardOrderPriceBlock.className = 'card__price-block';
      let cardOrderPrice = document.createElement('p');
      cardOrderPrice.className = 'card-price';
      let inputOrder = document.createElement('input');
      let inputBlock = document.createElement('div');
      inputBlock.className = 'input-block';
      let buttonMinus = document.createElement('button');
      buttonMinus.className = 'input-minus button';
      let buttonPlus = document.createElement('button');
      buttonPlus.className = 'input-plus button';
      buttonMinus.addEventListener('click', stepDown);
      buttonPlus.addEventListener('click', stepUp);
      inputOrder.className = 'orders';
      inputOrder.type = 'number';
      inputOrder.min = '1';
      inputOrder.max = '99';
      inputOrder.maxLength = '2';
      inputOrder.minLength = '1';
      inputOrder.value = 0;
      inputOrder.innerText = 0;
      inputOrder.readOnly = 'readonly';
      inputOrder.oninput = function() {
        this.value = this.value.substr(0, 2);
      }
      function stepDown() {
        if (inputOrder.value >= 2) {
          inputOrder.value = --inputOrder.value;
          updatePrice();
        }
      }
      function stepUp() {
        if (inputOrder.value <= 2) {
          inputOrder.value = ++inputOrder.value;
          updatePrice();
        }
      }
      function updatePrice() {
        let count = 0;
        const carts = cardsOrder.querySelectorAll('.card');
        carts.forEach(function(element) {
          const priceElement = element.querySelector('.card-price');
          const inputsElement = element.querySelector('.orders');
          const summ = inputsElement.value * Number(priceElement.innerText.slice(1));
          count += summ;
        })
        total.innerText = `Total: ${parseFloat(count).toFixed(2)}$`;
      }

      let fullTrash = document.createElement('img');
      fullTrash.className = 'full-trash';
      fullTrash.src = '/img/close.png';
      fullTrash.alt = '';
      cardLinkSecond.addEventListener('click', addToCart);

      function addToCart() {
        inputOrder.value = ++inputOrder.value;
        let fragmentAddCart = new DocumentFragment();
        fragmentAddCart.appendChild(cardOrder);
        cardOrder.appendChild(cardOrderImg);
        cardOrder.appendChild(cardOrderMain);
        cardOrderMain.appendChild(cardOrderTitle);
        cardOrderMain.appendChild(cardOrderDescription);
        cardOrderMain.appendChild(cardOrderPriceBlock);
        cardOrderPriceBlock.appendChild(inputBlock);
        inputBlock.appendChild(buttonMinus);
        inputBlock.appendChild(inputOrder);
        inputBlock.appendChild(buttonPlus);
        cardOrderPriceBlock.appendChild(cardOrderPrice);
        cardOrderMain.appendChild(fullTrash);
        cardsOrder.appendChild(fragmentAddCart);

        cardOrderTitle.innerText = element.author;
        cardOrderImg.src = element.imageLink;
        cardOrderDescription.innerText = element.title;
        cardOrderPrice.innerText = `$${element.price}`;

        hr.style.visibility = 'visible';
        buttonOrder.style.visibility = 'visible';
        total.style.visibility = 'visible';

        updatePrice();

        fullTrash.addEventListener('click', closeTrash);
        function closeTrash(e) {
          e.target.parentNode.parentNode.remove();
          updatePrice();
          inputOrder.value = 0;
          setTimeout(function() {
            if (cardsOrder.childNodes.length == 0) {
              hr.style.visibility = 'hidden';
              buttonOrder.style.visibility = 'hidden';
              total.style.visibility = 'hidden';
            }
          }, 3000);
        }
      }

      linkInfo.addEventListener('click', openModal);
      function openModal() {
        let shadow = document.createElement('div');
        shadow.className = 'shadow';
        let modalWindow = document.createElement('div');
        modalWindow.className = 'modal';
        setTimeout(function() {
          modalWindow.className = 'modal move';
        }, 10);
        shadow.classList.toggle('visible');
        header.classList.toggle('blur');
        main.classList.toggle('blur');
        footer.classList.toggle('blur');
        let cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.style.textTransform = 'uppercase';
        cardTitle.innerText = element.author;
        let cardImg = document.createElement('img');
        cardImg.className = 'card-img';
        cardImg.id = 'imageLink';
        cardImg.alt = '';
        cardImg.src = element.imageLink;
        let modalBlock = document.createElement('div');
        modalBlock.className = 'modal-block';
        let modalBlockInfo = document.createElement('div');
        modalBlockInfo.className = 'modal-block__info';
        let priceBlock = document.createElement('div');
        priceBlock.className = 'modal__price-block';
        let cardPrice = document.createElement('p');
        cardPrice.className = 'card-price';
        cardPrice.id = 'price';
        cardPrice.innerText = `$${element.price}`;
        let buyCart = document.createElement('p');
        buyCart.className = 'buy-cart ';
        buyCart.innerText = 'Add to cart';
        buyCart.addEventListener('click', addToCart);
        let descriptionInfo = document.createElement('p');
        descriptionInfo.className = 'description';
        descriptionInfo.innerText = element.description;
        let imageCancel = document.createElement('img');
        imageCancel.className = 'cancel';
        imageCancel.src = '/img/close.png';
        rootBlock.style.overflow = 'hidden';
        imageCancel.addEventListener('click', closeModal);
        function closeModal() {
          shadow.remove();
          modalWindow.remove();
          shadow.classList.toggle('visible');
          header.classList.toggle('blur');
          main.classList.toggle('blur');
          footer.classList.toggle('blur');
          rootBlock.style.overflow = 'visible';
        }
      }
    });
   });