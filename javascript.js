
/* ==========================================
   VELOCITY — CAR SHOWROOM
   Main JavaScript File
========================================== */


/* ==========================================
   1. CAR DATA
========================================== */

const cars = [
    {
        brand: 'PORSCHE',
        name: '911 GT3 RS',
        type: 'supercar',
        tag: 'TRACK ICON',
        hp: '518 HP',
        speed: '296 KM/H',
        zero: '3.2 S',
        engine: '4.0L Flat-Six',
        description:
            'A naturally aspirated track-focused masterpiece built to turn every corner into an unforgettable moment.',
        image:
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85'
    },

    {
        brand: 'LAMBORGHINI',
        name: 'Huracán EVO',
        type: 'supercar',
        tag: 'PURE ADRENALINE',
        hp: '631 HP',
        speed: '325 KM/H',
        zero: '2.9 S',
        engine: '5.2L V10',
        description:
            'Italian drama meets breathtaking response. A celebration of the naturally aspirated V10.',
        image:
            'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1100&q=85'
    },

    {
        brand: 'FERRARI',
        name: 'F8 Tributo',
        type: 'supercar',
        tag: 'ITALIAN LEGEND',
        hp: '710 HP',
        speed: '340 KM/H',
        zero: '2.9 S',
        engine: '3.9L Twin-Turbo V8',
        description:
            'An unforgettable expression of Ferrari performance, sculpted around speed and precision.',
        image:
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1100&q=85'
    },

    {
        brand: 'ASTON MARTIN',
        name: 'DB11',
        type: 'grand-tourer',
        tag: 'TIMELESS LUXURY',
        hp: '528 HP',
        speed: '309 KM/H',
        zero: '4.0 S',
        engine: '4.0L Twin-Turbo V8',
        description:
            'Effortless grand touring with the unmistakable presence of British craftsmanship.',
        image:
            'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1100&q=85'
    },

    {
        brand: 'MCLAREN',
        name: '720S',
        type: 'supercar',
        tag: 'AERODYNAMIC ART',
        hp: '710 HP',
        speed: '341 KM/H',
        zero: '2.9 S',
        engine: '4.0L Twin-Turbo V8',
        description:
            'A lightweight supercar where sculptural beauty and extraordinary performance become one.',
        image:
            'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1100&q=85'
    },

    {
        brand: 'PORSCHE',
        name: 'Taycan Turbo S',
        type: 'electric',
        tag: 'ELECTRIC FUTURE',
        hp: '750 HP',
        speed: '260 KM/H',
        zero: '2.8 S',
        engine: 'Dual Electric Motors',
        description:
            'Instant electric response meets Porsche soul. The future does not wait.',
        image:
            'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=1100&q=85'
    }
];


/* ==========================================
   2. DOM ELEMENTS
========================================== */

const grid = document.querySelector('#carGrid');

const modal = document.querySelector('#carModal');

const modalContent = document.querySelector('#modalContent');


/* ==========================================
   3. DISPLAY CAR COLLECTION
========================================== */

function renderCars(filter = 'all') {

    // Filter cars based on category
    const chosen = cars.filter(car =>
        filter === 'all' || car.type === filter
    );

    // Generate car cards
    grid.innerHTML = chosen.map(car => `

        <article class="car-card">

            <div class="car-image">

                <img
                    loading="lazy"
                    src="${car.image}"
                    alt="Automotive photograph representing ${car.brand} ${car.name}"
                >

                <span class="car-tag">
                    ${car.tag}
                </span>

            </div>

            <div class="car-info">

                <span class="car-brand">
                    ${car.brand}
                </span>

                <h3>${car.name}</h3>

                <div class="car-specs">

                    <div>
                        <strong>${car.hp}</strong>
                        <small>POWER</small>
                    </div>

                    <div>
                        <strong>${car.speed}</strong>
                        <small>TOP SPEED</small>
                    </div>

                    <div>
                        <strong>${car.zero}</strong>
                        <small>0–100 KM/H</small>
                    </div>

                </div>

                <button
                    class="card-action"
                    data-car="${cars.indexOf(car)}"
                    type="button"
                >
                    EXPLORE MACHINE
                    <span>↗</span>
                </button>

            </div>

        </article>

    `).join('');

    // Add click events to car buttons
    grid.querySelectorAll('[data-car]').forEach(button => {

        button.addEventListener('click', () => {

            const carIndex = Number(button.dataset.car);

            showCar(carIndex);

        });

    });

}


/* ==========================================
   4. CAR DETAILS MODAL
========================================== */

function showCar(index) {

    const car = cars[index];

    modalContent.innerHTML = `

        <img
            class="modal-image"
            src="${car.image}"
            alt="Automotive photograph representing ${car.brand} ${car.name}"
        >

        <div class="modal-body">

            <div class="overline">
                ${car.brand} — ${car.tag}
            </div>

            <h2>${car.name}</h2>

            <p>${car.description}</p>

            <div class="modal-specs">

                <div>
                    <strong>${car.hp}</strong>
                    <small>POWER</small>
                </div>

                <div>
                    <strong>${car.speed}</strong>
                    <small>TOP SPEED</small>
                </div>

                <div>
                    <strong>${car.zero}</strong>
                    <small>0–100 KM/H</small>
                </div>

                <div>
                    <strong>${car.engine}</strong>
                    <small>POWERTRAIN</small>
                </div>

            </div>

        </div>

    `;

    // Open car details
    modal.showModal();

}


// Display all cars when page loads
renderCars();


/* ==========================================
   5. CAR CATEGORY FILTERS
========================================== */

document.querySelectorAll('.filter').forEach(button => {

    button.addEventListener('click', () => {

        // Remove previous active filter
        document.querySelector('.filter.active')
            ?.classList.remove('active');

        // Set selected filter
        button.classList.add('active');

        // Display matching cars
        renderCars(button.dataset.filter);

    });

});


/* ==========================================
   6. CLOSE CAR MODAL
========================================== */

// Close using X button
document.querySelector('#closeModal')
    .addEventListener('click', () => {

        modal.close();

    });


// Close when clicking outside modal content
modal.addEventListener('click', event => {

    if (event.target === modal) {

        modal.close();

    }

});


/* ==========================================
   7. NAVIGATION SCROLL EFFECT
========================================== */

const nav = document.querySelector('#nav');

window.addEventListener('scroll', () => {

    nav.classList.toggle(
        'scrolled',
        window.scrollY > 30
    );

}, { passive: true });


/* ==========================================
   8. MOBILE NAVIGATION MENU
========================================== */

const menuBtn = document.querySelector('#menuBtn');

const navLinks = document.querySelector('#navLinks');


// Open and close mobile menu
menuBtn.addEventListener('click', () => {

    const open = navLinks.classList.toggle('open');

    menuBtn.setAttribute(
        'aria-expanded',
        String(open)
    );

    menuBtn.textContent = open ? '✕' : '☰';

});


// Close menu after clicking navigation link
navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('open');

        menuBtn.textContent = '☰';

        menuBtn.setAttribute(
            'aria-expanded',
            'false'
        );

    });

});


/* ==========================================
   9. SCROLL REVEAL ANIMATION
========================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


// Observe elements with reveal class
document.querySelectorAll('.reveal').forEach(element => {

    observer.observe(element);

});


/* ==========================================
   10. HERO IMAGE SLIDER
========================================== */

const heroImages = [
    cars[0].image,
    cars[1].image,
    cars[4].image,
    cars[5].image
];

let heroIndex = 0;

const heroBg = document.querySelector('#heroBg');


// Change featured hero image
function changeHero(step) {

    heroIndex = (
        heroIndex + step + heroImages.length
    ) % heroImages.length;

    // Fade out current image
    heroBg.style.opacity = '0.3';

    setTimeout(() => {

        // Update background image
        heroBg.style.backgroundImage = `
            url('${heroImages[heroIndex].replace('w=1100', 'w=2200')}')
        `;

        // Fade in new image
        heroBg.style.opacity = '1';

        // Update slide counter
        document.querySelector('.hero-index').textContent =
            `0${heroIndex + 1} / 04`;

        document.querySelector('.hero-stat strong').innerHTML =
            `0${heroIndex + 1}<span>/</span>04`;

    }, 250);

}


// Previous featured car
document.querySelector('#prevHero')
    .addEventListener('click', () => {

        changeHero(-1);

    });


// Next featured car
document.querySelector('#nextHero')
    .addEventListener('click', () => {

        changeHero(1);

    });


/* ==========================================
   11. AUTOMATIC COPYRIGHT YEAR
========================================== */

document.querySelector('#year').textContent =
    new Date().getFullYear();


/* ==========================================
   12. CUSTOM CURSOR GLOW EFFECT
========================================== */

const glow = document.querySelector('#glow');


// Only enable glow for devices with precise pointers
if (matchMedia('(pointer:fine)').matches) {

    document.addEventListener('pointermove', event => {

        glow.style.left = event.clientX + 'px';

        glow.style.top = event.clientY + 'px';

    }, { passive: true });

}
