document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const brandFiltersContainer = document.getElementById('brand-filters');

    // Yüklediğin tüm fotoğrafları ayrı birer ürün olarak listeliyoruz
    const data = {
      "shirts": [
        // LACOSTE
        { id: 1, brand: "Lacoste", name: "Classic Oxford - Black", price: 59.00, colors: [{"imageUrlFront": "b.jpeg", "imageUrlBack": "bb.jpeg"}], defaultColorIndex: 0 },
        { id: 2, brand: "Lacoste", name: "Classic Oxford - Beige", price: 59.00, colors: [{"imageUrlFront": "22.jpeg", "imageUrlBack": "2.jpeg"}], defaultColorIndex: 0 },
        { id: 3, brand: "Lacoste", name: "Classic Oxford - Yellow", price: 59.00, colors: [{"imageUrlFront": "11.jpeg", "imageUrlBack": "111.jpeg"}], defaultColorIndex: 0 },
        { id: 4, brand: "Lacoste", name: "Classic Oxford - Light Blue", price: 59.00, colors: [{"imageUrlFront": "WhatsApp Image 2026-04-05 at 23.11.58 (1).jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 5, brand: "Lacoste", name: "Classic Oxford - Pink", price: 59.00, colors: [{"imageUrlFront": "WhatsApp Image 2026-04-05 at 23.11.58.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 6, brand: "Lacoste", name: "Classic Oxford - Navy", price: 59.00, colors: [{"imageUrlFront": "WhatsApp Image 2026-04-05 at 23.11.58 (2).jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        
        // TOMMY HILFIGER
        { id: 7, brand: "Tommy Hilfiger", name: "Tailored Fit - Navy Blue", price: 59.00, colors: [{"imageUrlFront": "ee.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 8, brand: "Tommy Hilfiger", name: "Tailored Fit - Yellow", price: 59.00, colors: [{"imageUrlFront": "s.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 9, brand: "Tommy Hilfiger", name: "Tailored Fit - Black", price: 59.00, colors: [{"imageUrlFront": "t.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 10, brand: "Tommy Hilfiger", name: "Tailored Fit - Light Blue", price: 59.00, colors: [{"imageUrlFront": "4.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 11, brand: "Tommy Hilfiger", name: "Tailored Fit - Pink", price: 59.00, colors: [{"imageUrlFront": "g.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 12, brand: "Tommy Hilfiger", name: "Tailored Fit - Classic Blue", price: 59.00, colors: [{"imageUrlFront": "v.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },

        // RALPH LAUREN
        { id: 13, brand: "Ralph Lauren", name: "Polo Button-Down - Grey", price: 59.00, colors: [{"imageUrlFront": "asdfg.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 14, brand: "Ralph Lauren", name: "Polo Button-Down - Dark Blue", price: 59.00, colors: [{"imageUrlFront": "fsd.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 15, brand: "Ralph Lauren", name: "Polo Button-Down - Light Blue", price: 59.00, colors: [{"imageUrlFront": "re.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 16, brand: "Ralph Lauren", name: "Polo Button-Down - Pink", price: 59.00, colors: [{"imageUrlFront": "as.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 17, brand: "Ralph Lauren", name: "Polo Button-Down - Beige", price: 59.00, colors: [{"imageUrlFront": "222221.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 18, brand: "Ralph Lauren", name: "Polo Button-Down - White", price: 59.00, colors: [{"imageUrlFront": "WhatsApp Image 2026-04-05 at 23.12.02.jpeg", "imageUrlBack": "WhatsApp Image 2026-04-05 at 23.12.02 (1).jpeg"}], defaultColorIndex: 0 },

        // GANT
        { id: 19, brand: "Gant", name: "Broadcloth Oxford - Beige", price: 59.00, colors: [{"imageUrlFront": "ddddd.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 20, brand: "Gant", name: "Broadcloth Oxford - Light Blue", price: 59.00, colors: [{"imageUrlFront": "dd.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 21, brand: "Gant", name: "Broadcloth Oxford - Royal Blue", price: 59.00, colors: [{"imageUrlFront": "d.jpeg", "imageUrlBack": null}], defaultColorIndex: 0 },
        { id: 22, brand: "Gant", name: "Broadcloth Oxford - White", price: 59.00, colors: [{"imageUrlFront": "33.jpeg", "imageUrlBack": "3333.jpeg"}], defaultColorIndex: 0 }
      ]
    };

    let allShirts = data.shirts;

    if (productGrid) {
        renderProductGrid(allShirts);
        renderBrandFilters(allShirts);
    }

    // Ürünleri Grid Yapısında Ekrana Basma
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
                        <p class="text-sm font-bold text-black">$${shirt.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
        });
        productGrid.innerHTML = htmlContent;
        setupRevealOnScroll();
    }

    // Marka Filtre Menüsünü Otomatik Oluşturma
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

    // Filtreleme Fonksiyonu
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
