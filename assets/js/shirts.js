document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const brandFiltersContainer = document.getElementById('brand-filters');

    // Vercel dosya uzantısı hatası almamak için veriyi direkt JS içine aldık:
    const data = {
      "shirts": [
        {
          "id": 1,
          "brand": "Lacoste",
          "name": "Short Sleeve Button-Down",
          "price": 1399.99,
          "colors": [
            {"name": "Black", "imageUrlFront": "b.jpeg", "imageUrlBack": "WhatsApp Image 2026-04-05 at 23.11.58 (1).jpeg"},
            {"name": "Beige", "imageUrlFront": "22.jpeg", "imageUrlBack": null},
            {"name": "Yellow", "imageUrlFront": "11.jpeg", "imageUrlBack": null},
            {"name": "White", "imageUrlFront": "WhatsApp Image 2026-04-05 at 23.11.58.jpeg", "imageUrlBack": null}
          ],
          "defaultColorIndex": 0
        },
        {
          "id": 2,
          "brand": "Lacoste",
          "name": "Long Sleeve Oxford",
          "price": 1599.99,
          "colors": [
            {"name": "White", "imageUrlFront": "WhatsApp Image 2026-04-05 at 23.11.58 (2).jpeg", "imageUrlBack": null}
          ],
          "defaultColorIndex": 0
        },
        {
          "id": 3,
          "brand": "Tommy Hilfiger",
          "name": "Short Sleeve Shirt",
          "price": 1299.99,
          "colors": [
            {"name": "Navy Blue", "imageUrlFront": "ee.jpeg", "imageUrlBack": null},
            {"name": "White", "imageUrlFront": "s.jpeg", "imageUrlBack": null},
            {"name": "Dark Navy", "imageUrlFront": "t.jpeg", "imageUrlBack": null}
          ],
          "defaultColorIndex": 0
        },
        {
          "id": 4,
          "brand": "Tommy Hilfiger",
          "name": "Long Sleeve Shirt",
          "price": 1499.99,
          "colors": [
            {"name": "Light Blue", "imageUrlFront": "4.jpeg", "imageUrlBack": null},
            {"name": "Beige", "imageUrlFront": "3.jpeg", "imageUrlBack": null},
            {"name": "Black", "imageUrlFront": "g.jpeg", "imageUrlBack": null},
            {"name": "White", "imageUrlFront": "v.jpeg", "imageUrlBack": null}
          ],
          "defaultColorIndex": 0
        },
        {
          "id": 5,
          "brand": "Ralph Lauren",
          "name": "Polo Button-Down",
          "price": 1899.99,
          "colors": [
            {"name": "Grey", "imageUrlFront": "asdfg.jpeg", "imageUrlBack": null},
            {"name": "Dark Blue", "imageUrlFront": "fsd.jpeg", "imageUrlBack": null},
            {"name": "Light Blue", "imageUrlFront": "re.jpeg", "imageUrlBack": null},
            {"name": "Pink", "imageUrlFront": "as.jpeg", "imageUrlBack": null},
            {"name": "Beige", "imageUrlFront": "222221.jpeg", "imageUrlBack": null},
            {"name": "White", "imageUrlFront": "WhatsApp Image 2026-04-05 at 23.12.02.jpeg", "imageUrlBack": null}
          ],
          "defaultColorIndex": 0
        },
        {
          "id": 6,
          "brand": "Gant",
          "name": "Broadcloth Oxford",
          "price": 1199.99,
          "colors": [
            {"name": "Beige", "imageUrlFront": "ddddd.jpeg", "imageUrlBack": null},
            {"name": "Light Blue", "imageUrlFront": "dd.jpeg", "imageUrlBack": null},
            {"name": "Royal Blue", "imageUrlFront": "d.jpeg", "imageUrlBack": null},
            {"name": "White", "imageUrlFront": "33.jpeg", "imageUrlBack": "3333.jpeg"}
          ],
          "defaultColorIndex": 0
        }
      ]
    };

    let allShirts = data.shirts;

    // Fetch işlemini iptal ettik, veriler doğrudan ekrana basılıyor
    if (productGrid) {
        renderProductGrid(allShirts);
        renderBrandFilters(allShirts);
    }

    // 2. Ürünleri Grid Yapısında Ekrana Basma
    function renderProductGrid(shirts) {
        let htmlContent = '';
        shirts.forEach(shirt => {
            const defaultColor = shirt.colors[shirt.defaultColorIndex];
            const frontImg = `assets/images/${defaultColor.imageUrlFront}`;
            const backImg = defaultColor.imageUrlBack ? `assets/images/${defaultColor.imageUrlBack}` : null;
            
            htmlContent += `
                <div class="product-card group reveal p-4 border border-gray-100 hover:border-black transition-all duration-300 bg-white">
                    <div class="aspect-[3/4] overflow-hidden mb-6 bg-gray-50 relative">
                        <img src="${frontImg}" alt="${shirt.brand}" class="main-image w-full h-full object-cover transition-opacity duration-500 ${backImg ? 'group-hover:opacity-0' : ''}">
                        ${backImg ? `<img src="${backImg}" class="back-image absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500">` : ''}
                    </div>
                    <div class="flex flex-col space-y-2 text-center">
                        <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">${shirt.brand}</span>
                        <h3 class="text-sm font-medium tracking-tight text-gray-800">${shirt.name}</h3>
                        <p class="text-sm font-bold text-black">${shirt.price.toFixed(2)} TL</p>
                    </div>
                </div>
            `;
        });
        productGrid.innerHTML = htmlContent;
        setupRevealOnScroll();
    }

    // 3. Marka Filtre Menüsünü Otomatik Oluşturma
    function renderBrandFilters(shirts) {
        const uniqueBrands = [...new Set(shirts.map(shirt => shirt.brand))];
        let brandFiltersHtml = `
            <button onclick="filterProducts('all')" class="brand-filter-btn text-left py-2 px-3 hover:bg-gray-50 transition-colors w-full font-bold border-b border-gray-100">
                All Brands
            </button>
        `;
        
        uniqueBrands.forEach(brand => {
            brandFiltersHtml += `
                <button onclick="filterProducts('${brand}')" class="brand-filter-btn text-left py-2 px-3 hover:bg-gray-50 transition-colors w-full text-gray-600 border-b border-gray-100">
                    ${brand}
                </button>
            `;
        });
        
        brandFiltersContainer.innerHTML = brandFiltersHtml;
    }

    // 4. Filtreleme Fonksiyonu
    window.filterProducts = function(brandName) {
        const filtered = (brandName === 'all') 
            ? allShirts 
            : allShirts.filter(s => s.brand === brandName);
        renderProductGrid(filtered);
    }
    
    // Scroll Animasyonu Tetikleyici
    function setupRevealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        reveals.forEach(r => observer.observe(r));
    }
});
