async function loadProducts() {
    const url = "https://script.google.com/macros/s/AKfycbykn4T9DlKGmg_PjP1DnIWx5EqfrNtVccKNc0KkrM6V5tY5ftid5Knuu_TdKRfYL63hKQ/exec"; // Reemplaza con tu URL de Apps Script
    try {
        let response = await fetch(url);
        let data = await response.json();
        createGallery(data.productos);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

function createGallery(products) {
    let gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    products.forEach(product => {
        let col = document.createElement('div');
        col.className = 'col';
        let card = document.createElement('div');
        card.className = 'card shadow-sm';
        
        let img = document.createElement('img');
        img.className = 'bd-placeholder-img card-img-top';
        img.src = product.imagen;
        img.onerror = function() {
            img.src = 'https://livetrade-qa.s3.amazonaws.com/IMG2025031715033331_noimage-705x705.jpg';
        };

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = `${product.nombre} - <span>${product.canal}</span><br><strong>Stock:</strong> ${product.stock}`;

        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        gallery.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", loadProducts);
