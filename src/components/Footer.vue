<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo and Cards Section -->
      <div class="footer-section">
        <img src="https://placehold.co/120x40/45755e/ffffff" alt="Logo" class="footer-logo" />
        <div class="payment-cards">
          <img src="https://placehold.co/40x25/888/fff" alt="Visa" />
          <img src="https://placehold.co/40x25/888/fff" alt="Mastercard" />
          <img src="https://placehold.co/40x25/888/fff" alt="Mir" />
        </div>
        <p class="copyright">© 2024 Todos los derechos reservados</p>
      </div>

      <!-- Navigation Links -->
      <div class="footer-section">
        <h3>Navegación</h3>
        <ul>
          <li><RouterLink to="/catalog">Catalogar</RouterLink></li>
          <li><RouterLink to="/services">Servicios</RouterLink></li>
          <li><RouterLink to="/delivery">Entrega y pago</RouterLink></li>
          <li><RouterLink to="/bonus">Programa de bonificación</RouterLink></li>
          <li><RouterLink to="/contacts">Contactos</RouterLink></li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="footer-section">
        <div class="social-icons">
          <a href="https://telegram.me/username" target="_blank" class="social-icon">
            <img src="https://placehold.co/24x24/fff/45755e" alt="Telegram" />
          </a>
          <a href="https://wa.me/phone" target="_blank" class="social-icon">
            <img src="https://placehold.co/24x24/fff/45755e" alt="WhatsApp" />
          </a>
        </div>
        <div class="contact-info">
          <a href="tel:+74959499-27-59">+7 (495) 499-27-59</a>
          <a href="tel:+79851573638">+7 (985) 157-36-38</a>
          <a href="mailto:polikarbonate.stroyplast@mail.ru">polikarbonate.stroyplast@mail.ru</a>
        </div>
        <p class="address">MO, Distrito de la ciudad de Istra,<br />Carretera Volokolamskoe 44 km ow 3</p>
      </div>

      <!-- Legal Information -->
      <div class="footer-section">
        <p class="legal-info">
          IP Demeshkin Alexey Alexandrovich<br />
          OGRNIP 320502900045568<br />
          POSADA 691203352902
        </p>
        <div class="developer-info">
          <span>Diseño del sitio - </span>
          <a href="https://t.me/study" target="_blank">t.me/study</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 3rem 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  max-width: 120px;
  height: auto;
}

.payment-cards {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.payment-cards img {
  width: 40px;
  height: 25px;
  object-fit: contain;
}

.copyright {
  font-size: 0.8rem;
  color: #888;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #45755e;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  background-color: #45755e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: #385f4c;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.address {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.4;
}

.legal-info {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.4;
}

.developer-info {
  margin-top: auto;
  font-size: 0.9rem;
}

.developer-info a {
  color: #45755e;
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-container {
    grid-template-columns: 1fr;
  }

  .footer-section {
    text-align: center;
    align-items: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>