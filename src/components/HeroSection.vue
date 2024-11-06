<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          POLICARBONATO CONFIABLE<br />PARA LA CONSTRUCCIÓN PRIVADA
        </h1>
        <RouterLink to="/shop" class="catalog-btn">Ir al catálogo</RouterLink>
      </div>
    </div>

    <!-- Brands Section -->
    <div class="brands-section">
      <div v-for="brand in brands" :key="brand.id" class="brand-logo">
        <img :src="brand.image" :alt="brand.name" />
      </div>
    </div>

    <!-- Products Section -->
    <div class="products-section">
      <div class="products-header">
        <h2 class="section-title">
          El policarbonato Stroyplast es su asistente confiable - en equipar tu casa de campo<br />
          llame ya!! BARA BARA BARA BARA
        </h2>
      </div>

      <div class="products-grid">
        <div class="products-left">
          <RouterLink v-for="product in products" 
                    :key="product.id" 
                    :to="product.link" 
                    class="product-card">
            <div class="card-content">
              <img :src="product.image" :alt="product.title" />
              <h3>{{ product.title }}</h3>
              <div class="arrow-icon">→</div>
            </div>
          </RouterLink>
        </div>

        <RouterLink :to="featuredProduct.link" class="featured-product">
          <div class="card-content">
            <img :src="featuredProduct.image" :alt="featuredProduct.title" />
            <h3>{{ featuredProduct.title }}</h3>
            <div class="arrow-icon">→</div>
          </div>
        </RouterLink>
      </div>

      <div class="catalog-button-container">
        <RouterLink to="/shop" class="full-catalog-btn">Catálogo completo</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const products = [
  {
    id: 1,
    image: 'https://placehold.co/400x300/e2e2e2/808080',
    title: 'POLICARBONATO MONOLÍTICO',
    link: '/shop'
  },
  {
    id: 2,
    image: 'https://placehold.co/400x300/e2e2e2/808080',
    title: 'ПРОФИЛИРОВАННЫЙ ПОЛИКАРБОНАТ',
    link: '/shop'
  },
  {
    id: 3,
    image: 'https://placehold.co/400x300/e2e2e2/808080',
    title: 'КОМПЛЕКТУЮЩИЕ ДЛЯ ПОЛИКАРБОНАТА',
    link: '/shop'
  }
]

const featuredProduct = {
  image: 'https://placehold.co/500x400/e2e2e2/808080',
  title: 'СОТОВЫЙ ПОЛИКАРБОНАТ',
  link: '/shop'
}

const brands = [
  { id: 1, image: 'https://placehold.co/120x40/e2e2e2/808080', name: 'GOLDEN PLAST' },
  { id: 2, image: 'https://placehold.co/120x40/e2e2e2/808080', name: 'WOGGEL' },
  { id: 3, image: 'https://placehold.co/120x40/e2e2e2/808080', name: 'SKYGLASS' },
  { id: 4, image: 'https://placehold.co/120x40/e2e2e2/808080', name: 'СПЕЦИАЛЬНО' },
  { id: 5, image: 'https://placehold.co/120x40/e2e2e2/808080', name: 'КИНПЛАСТ' }
]
</script>

<style scoped>
.hero-container {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 4rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  color: white;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.catalog-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #45755e;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.catalog-btn:hover {
  background-color: #385f4c;
}

.brands-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #fff;
}

.brand-logo img {
  height: 40px;
  object-fit: contain;
}

.products-section {
  padding: 4rem;
  background-color: #f5f5f5;
}

.products-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  color: #333;
  line-height: 1.4;
}

.products-grid {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.products-left {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.product-card, .featured-product {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.product-card:hover, .featured-product:hover {
  transform: translateY(-5px);
}

.featured-product {
  flex: 1;
}

.card-content {
  position: relative;
  padding: 1rem;
}

.card-content img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.card-content h3 {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #333;
}

.arrow-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #45755e;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.catalog-button-container {
  text-align: center;
}

.full-catalog-btn {
  display: inline-block;
  padding: 1rem 3rem;
  border: 2px solid #333;
  border-radius: 30px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.full-catalog-btn:hover {
  background: #333;
  color: white;
}

@media (max-width: 1024px) {
  .products-grid {
    flex-direction: column;
  }

  .products-left {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products-left {
    grid-template-columns: 1fr;
  }

  .brands-section {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>