import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Villa Babel</h1>
          <ul className="nav-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#booking">Book</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <header className="hero" id="hero">
        <div className="hero-copy">
          <span className="eyebrow">Villa Babel | Madeira</span>
          <h1>Luxury holiday villa by the Atlantic</h1>
          <p>Experience comfort and relaxation at Villa Babel, nestled near Garajau with panoramic ocean views, a private pool, and a calm island retreat.</p>
          <a href="#booking" className="button">Book Your Stay</a>
        </div>
        <img src="https://villa-babel.com/wp-content/uploads/2022/11/Amazing-seaview.jpg" alt="Ocean view from Villa Babel" />
      </header>

      <section className="about" id="about">
        <div className="section-copy">
          <span className="eyebrow">About the Villa</span>
          <h2>An unforgettable Madeira retreat</h2>
          <p>Villa Babel offers large private terraces, sun-drenched lounges, and an elevated sea view. Relax in exclusive privacy while being a short drive from Garajau, Reis Magos and Madeira’s best hiking paths.</p>
          <ul className="features">
            <li>Private pool with ocean views</li>
            <li>Fully equipped kitchen</li>
            <li>Spacious living areas</li>
            <li>Al fresco dining terrace</li>
          </ul>
        </div>
        <div className="section-image">
          <img src="https://villa-babel.com/wp-content/uploads/2021/06/2M_20210607_165845-2-768x614.jpeg" alt="Villa interior view" />
        </div>
      </section>

      <section className="gallery" id="gallery">
        <span className="eyebrow">Photo Gallery</span>
        <h2>Explore Villa Babel</h2>
        <div className="gallery-grid">
          <img src="https://villa-babel.com/wp-content/uploads/2022/11/Amazing-seaview.jpg" alt="Seaview" />
          <img src="https://villa-babel.com/wp-content/uploads/2021/06/2M_20210607_165845-2-768x614.jpeg" alt="Interior" />
          <img src="https://villa-babel.com/wp-content/uploads/2021/04/flowershow-768x482.jpg" alt="Flower Festival" />
          <img src="https://villa-babel.com/wp-content/uploads/2021/05/2019-04-30-Levada-walk-Madeira-DSC_4452-1200x763-1-768x488.jpg" alt="Levada walk" />
          <img src="https://villa-babel.com/wp-content/uploads/2021/04/scenery1-768x432.jpg" alt="Scenery" />
          <img src="https://villa-babel.com/wp-content/uploads/2021/05/fruit-768x432.jpg" alt="Local food" />
        </div>
      </section>

      <section className="location-activities" id="location">
        <div className="section-copy">
          <span className="eyebrow">Location & Activities</span>
          <h2>Explore Madeira from Villa Babel</h2>
          <p>Discover Madeira’s flower festivals, rich cuisine, scenic levada walks, and dramatic cliffs. The villa is ideally placed for both tranquil island breaks and active excursions.</p>
        </div>
        <div className="activity-grid">
          <article>
            <img src="https://villa-babel.com/wp-content/uploads/2021/04/flowershow-768x482.jpg" alt="Madeira Flower Festival" />
            <h3>Flower Festival</h3>
            <p>Visit the colorful parade and gardens that make Madeira famous.</p>
          </article>
          <article>
            <img src="https://villa-babel.com/wp-content/uploads/2021/05/2019-04-30-Levada-walk-Madeira-DSC_4452-1200x763-1-768x488.jpg" alt="Levada walk in Madeira" />
            <h3>Levada Walks</h3>
            <p>Step into the lush forests and enjoy breathtaking island trails.</p>
          </article>
          <article>
            <img src="https://villa-babel.com/wp-content/uploads/2021/04/scenery1-768x432.jpg" alt="Madeira cultural scenery" />
            <h3>Cultural Sights</h3>
            <p>Discover Madeira’s charming towns, historic villages, and local markets.</p>
          </article>
          <article>
            <img src="https://villa-babel.com/wp-content/uploads/2021/05/fruit-768x432.jpg" alt="Madeira local food" />
            <h3>Local Cuisine</h3>
            <p>Taste authentic Madeira dishes, fresh seafood, and tropical fruits.</p>
          </article>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <span className="eyebrow">Testimonials</span>
        <h2>What guests love</h2>
        <div className="review-grid">
          <article className="review">
            <p>“Amazing villa! Perfect for our family holiday with incredible ocean views and peaceful terraces.”</p>
            <span>⭐⭐⭐⭐⭐</span>
            <strong>Anna R.</strong>
          </article>
          <article className="review">
            <p>“The location was ideal, and the private pool made our stay unforgettable. Highly recommended!”</p>
            <span>⭐⭐⭐⭐⭐</span>
            <strong>Mark T.</strong>
          </article>
          <article className="review">
            <p>“Beautiful property with excellent amenities. The views are stunning and the area is perfect for exploring.”</p>
            <span>⭐⭐⭐⭐⭐</span>
            <strong>Sarah L.</strong>
          </article>
        </div>
      </section>

      <section className="booking-contact" id="booking">
        <article className="booking">
          <span className="eyebrow">Booking</span>
          <h2>Reserve your stay</h2>
          <p>Send your request and we will confirm availability, pricing, and any special arrangements for your Madeira holiday.</p>
          <form
            action="https://formsubmit.co/info@villa-babel.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Villa Babel Booking Request" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="field-row">
              <input name="name" type="text" placeholder="Full name" required />
              <input name="email" type="email" placeholder="Email" required />
            </div>
            <div className="field-row">
              <input name="phone" type="tel" placeholder="Phone number" />
              <input name="guests" type="text" placeholder="Number of guests" />
            </div>
            <div className="field-row">
              <input name="checkin" type="date" placeholder="Check-in" />
              <input name="checkout" type="date" placeholder="Check-out" />
            </div>
            <textarea name="message" placeholder="Special requests or questions" rows={5}></textarea>
            <button type="submit">Submit Booking Request</button>
          </form>
        </article>

        <article className="contact">
          <span className="eyebrow">Contact</span>
          <h2>Get in touch</h2>
          <p>For more information, feel free to contact us directly by phone or email.</p>
          <div className="contact-details">
            <p><strong>Phone:</strong> +351 960 313 712</p>
            <p><strong>Email:</strong> info@villa-babel.com</p>
            <p><strong>Location:</strong> Villa Babel, Madeira Island</p>
          </div>
        </article>
      </section>
      </main>
      <footer className="site-footer">
        <p>Villa Babel Madeira · Luxury holiday villa rental · Built with Vite + React</p>
      </footer>
    </div>
  );
}

export default App;
