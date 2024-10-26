        const recipes = {
            1: {
                title: "Nasi Goreng",
                ingredients: ["Nasi putih", "Bawang merah", "Bawang putih", "Kecap manis", "Telur", "Sayuran"],
                instructions: "Tumis bawang, masukkan nasi dan bumbu. Aduk rata, sajikan hangat.",
                category: "tradisional",
                image: "https://cdn.rri.co.id/berita/Cirebon/o/1719201132146-ILUSTRASI_NASGOR/8w83zosucbx67ts.jpeg"
            },
            2: {
                title: "Ayam Penyet",
                ingredients: ["Daging ayam", "Bumbu penyet", "Minyak goreng", "Sambal", "Lalapan"],
                instructions: "Penyet ayam yang sudah digoreng. Goreng hingga matang. Sajikan dengan sambal dan lalapan.",
                category: "ayam",
                image: "https://asset.kompas.com/crops/cPwn7KBDXN7ALxhegAeT5jxyz80=/0x0:1000x667/750x500/data/photo/2023/05/07/6457763e0470a.jpg"
            },
            3: {
                title: "Sop Buntut",
                ingredients: ["Buntut sapi", "Sayuran", "Bumbu sop"],
                instructions: "Rebus buntut dengan bumbu dan sayuran hingga matang. Sajikan hangat.",
                category: "daging",
                image: "https://asset.kompas.com/crops/4lfNYrSA_CWYWm09D1NkXo6tOfI=/139x96:939x629/750x500/data/photo/2022/09/27/63329597320d8.jpg"
            },
            4: {
                title: "Sayur Lodeh",
                ingredients: ["Sayuran campur", "Santan", "Bawang merah", "Bawang putih", "Garam"],
                instructions: "Rebus semua bahan hingga sayuran matang. Sajikan hangat.",
                category: "sayuran",
                image: "https://cdn0-production-images-kly.akamaized.net/T4tDFe-jxXFum351v5knwSrG7rg=/0x374:793x821/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3271140/original/046275500_1603078585-shutterstock_1830141524.jpg"
            },
            5: {
                title: "Sayur Asem",
                ingredients: ["Kacang panjang", "Melinjo", "Asam jawa", "Bumbu halus"],
                instructions: "Rebus semua bahan dengan bumbu halus. Tambahkan asam jawa untuk memberikan rasa asam yang segar.",
                category: "sayuran",
                image: "https://www.olx.co.id/news/wp-content/uploads/2024/07/resep-sayur-asem_1.webp"
            },
            6: {
                title: "Rendang Daging",
                ingredients: ["Daging sapi", "Santan", "Serai", "Daun salam", "Lengkuas", "Bumbu rendang"],
                instructions: "Masak daging dengan santan dan bumbu hingga bumbu meresap dan daging empuk. Sajikan dengan nasi hangat.",
                category: "daging",
                image: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat.jpg"
            },
            7: {
                title: "Capcay",
                ingredients: ["Sayuran campur", "Bawang putih", "Kecap asin", "Minyak goreng"],
                instructions: "Tumis bawang putih, masukkan sayuran, aduk rata. Tambahkan kecap asin, masak hingga sayuran matang.",
                category: "sayuran",
                image: "https://asset.kompas.com/crops/2sjLUUCqOhsi36M0pxYbbqz7vtM=/100x67:900x600/750x500/data/photo/2021/01/01/5fee5925f248d.jpg"
            },
            8: {
                title: "Sate Ayam",
                ingredients: ["Daging ayam", "Tusuk sate", "Bumbu sate", "Kecap manis"],
                instructions: "Marinasi daging ayam dengan bumbu, tusuk pada tusuk sate, dan bakar hingga matang. Sajikan dengan kecap manis.",
                category: "ayam",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihGO7Vl3Y_72mTysi_G-IO1sRJeUoynGA0A&s"
            },
            9: {
                title: "Kwetiau Goreng",
                ingredients: ["Kwetiau", "Telur", "Sayuran", "Kecap manis", "Bawang merah"],
                instructions: "Tumis bawang merah, tambahkan kwetiau dan sayuran, aduk rata. Tambahkan telur, masak hingga matang.",
                category: "tradisional",
                image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/08/07032610/Praktis-dan-Enak-Ini-Resep-Kwetiau-Goreng-Telur-yang-Lezat-.jpg.webp"
            },
            10: {
                title: "Udang Bakar",
                ingredients: ["Udang segar", "Bumbu bakar", "Lemon", "Minyak zaitun"],
                instructions: "Lumuri udang dengan bumbu bakar, panggang hingga matang. Sajikan dengan perasan lemon.",
                category: "seafood",
                image: "https://www.masakapahariini.com/wp-content/uploads/2019/01/udang-bakar-kecap.jpg"
            },
            11: {
                title: "Nasi Uduk",
                ingredients: ["Beras", "Santan", "Daun pandan", "Garam"],
                instructions: "Masak beras dengan santan dan daun pandan. Sajikan dengan lauk pelengkap.",
                category: "tradisional",
                image: "https://cdn.idntimes.com/content-images/community/2023/05/usu-505165762f52a892b2e35583ac6b3746-e7e2601261e842f60d89f609d188264d_600x400.jpg"
            },
            12: {
                title: "Pepes Tahu",
                ingredients: ["Tahu", "Daun pisang", "Bumbu pepes"],
                instructions: "Campurkan tahu dengan bumbu, bungkus dengan daun pisang, kukus hingga matang.",
                category: "sayuran",
                image: "https://images.tokopedia.net/img/JFrBQq/2022/8/5/186fcb24-18f6-46b7-b943-ac04a629601d.jpg"
            },
            13: {
                title: "Bubur Ayam",
                ingredients: ["Beras", "Ayam suwir", "Bawang goreng", "Kecap manis"],
                instructions: "Masak beras hingga lembut, sajikan dengan ayam suwir dan taburan bawang goreng.",
                category: "ayam",
                image: "https://www.masakapahariini.com/wp-content/uploads/2023/06/shutterstock_1927030937.jpg"
            },
            14: {
                title: "Gado-Gado",
                ingredients: ["Sayuran rebus", "Tahu", "Telur", "Saus kacang"],
                instructions: "Campurkan sayuran, tahu, dan telur, siram dengan saus kacang.",
                category: "sayuran",
                image: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/08/29/1093597743.jpg"
            },
            15: {
                title: "Mie Goreng",
                ingredients: ["Mie", "Sayuran", "Kecap manis", "Telur"],
                instructions: "Tumis semua bahan, tambahkan mie dan kecap, aduk rata hingga matang.",
                category: "tradisional",
                image: "https://www.masakapahariini.com/wp-content/uploads/2023/11/Resep-Mie-Goreng-Telur-Untuk-Tanggal-Tua.jpg"
            }
        };

        let favoriteRecipes = [];

function filterRecipes(category) {
    const recipeList = document.querySelector('.recipe-list');
    recipeList.innerHTML = '';
    const headingElement = document.getElementById('recipe-heading');
    
    // Set heading based on category
    const headings = {
        all: 'Semua Resep',
        ayam: 'Resep Ayam',
        daging: 'Resep Daging',
        sayuran: 'Resep Sayuran',
        seafood: 'Resep Seafood',
        tradisional: 'Masakan Tradisional',
        favorites: 'Resep Favorit'
    };
    
    headingElement.textContent = headings[category] || 'Semua Resep';

    for (const [id, recipe] of Object.entries(recipes)) {
        if (category === 'all' || recipe.category === category || (category === 'favorites' && favoriteRecipes.includes(id))) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h2>${recipe.title}</h2>
                <p>${recipe.ingredients.join(', ')}</p>
            `;
            recipeDiv.onclick = () => showModal(id);
            recipeList.appendChild(recipeDiv);
        }
    }
    updateFavoritesCount();
}

function showModal(id) {
    const recipe = recipes[id];
    document.getElementById('modal-recipe-title').textContent = recipe.title;
    document.getElementById('modal-recipe-ingredients').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    document.getElementById('modal-recipe-instructions').textContent = recipe.instructions;

    const addFavoriteButton = document.getElementById('add-favorite');
    addFavoriteButton.onclick = () => addFavorite(id);

    document.getElementById('recipe-modal').style.display = "block";
}

function addFavorite(id) {
    if (!favoriteRecipes.includes(id)) {
        favoriteRecipes.push(id);
        alert('Resep ditambahkan ke favorit!');
        updateFavoritesCount();
    } else {
        alert('Resep sudah ada di favorit!');
    }
}

function updateFavoritesCount() {
    document.getElementById('favorites-count').textContent = `Resep Favorit: ${favoriteRecipes.length}`;
}

function searchRecipes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const recipeList = document.querySelector('.recipe-list');
    recipeList.innerHTML = '';

    for (const [id, recipe] of Object.entries(recipes)) {
        if (recipe.title.toLowerCase().includes(searchInput) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h2>${recipe.title}</h2>
                <p>${recipe.ingredients.join(', ')}</p>
            `;
            recipeDiv.onclick = () => showModal(id);
            recipeList.appendChild(recipeDiv);
        }
    }
    updateFavoritesCount();
}

document.getElementById('close-modal').onclick = function() {
    document.getElementById('recipe-modal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target === document.getElementById('recipe-modal')) {
        document.getElementById('recipe-modal').style.display = "none";
    }
};

// Initial load of all recipes
filterRecipes('all');