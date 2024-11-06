<template>
  <div class="shop">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb">
      <RouterLink to="/">HOME</RouterLink>
      <span>/</span>
      <RouterLink to="/shop">SHOP</RouterLink>
      <span>/</span>
      <span>FLORERIA</span>
    </div>

    <!-- Main Title -->
    <h1 class="main-title">FLORERÍA<br/></h1>

    <!-- Product Description -->
    <p class="product-description">
     Descubra nuestra hermosa colección de flores y plantas. Desde rosas clásicas hasta orquídeas exóticas, tenemos todo lo  - que necesitas para crear el ramo perfecto.
    </p>

    <!-- Product Filter Section -->
    <div class="filter-section">
      <h2>Categorías de color</h2>
      <div class="sort-button">
        <span>Clasificar</span>
        <img src="https://placehold.co/24x24" alt="Sort" />
      </div>
    </div>

    <!-- Product Categories List -->
    <div class="categories-list">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <span class="category-name">{{ item.name }}</span>
        <span class="category-count">({{ item.count }})</span>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
        <button class="favorite-btn">
          <img src="https://placehold.co/24x24" alt="Favorite" />
        </button>
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p class="product-price">{{ product.price }} ₽</p>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-actions">
            <div class="quantity-control">
              <button @click="decreaseQuantity(product)">-</button>
              <span>{{ product.quantity }}</span>
              <button @click="increaseQuantity(product)">+</button>
            </div>
            <button @click="addToCart(product)" class="add-to-cart-btn">
              Añadir a la cesta
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Product Modal -->
  <div v-if="selectedProduct" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-modal" @click="closeModal">&times;</button>
      <div class="modal-product">
        <img :src="selectedProduct.image" :alt="selectedProduct.title" />
        <div class="modal-product-info">
          <h2>{{ selectedProduct.title }}</h2>
          <p class="modal-price">{{ selectedProduct.price }} ₽</p>
          <p class="modal-description">{{ selectedProduct.description }}</p>
          <div class="modal-actions">
            <div class="quantity-control">
              <button @click="decreaseQuantity(selectedProduct)">-</button>
              <span>{{ selectedProduct.quantity }}</span>
              <button @click="increaseQuantity(selectedProduct)">+</button>
            </div>
            <button @click="addToCart(selectedProduct)" class="add-to-cart-btn">
              JOTOTOTOTOT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const selectedProduct = ref(null)

const categoryList = [
  { id: 1, name: 'rosas', count: 15 },
  { id: 2, name: 'tulipanes', count: 8 },
  { id: 3, name: 'orquídeas', count: 12 },
  { id: 4, name: 'lirios', count: 6 },
  { id: 5, name: 'Ramos', count: 20 }
]

const products = ref([
  {
    id: 1,
    title: 'Ramo "Amanecer de primavera""',
    image: 'https://placehold.co/300x400',
    price: 2990,
    description: 'Delicado ramo de rosas frescas, tulipanes y fresias. Ideal para cualquier ocasión.',
    badge: 'NUEVO',
    quantity: 1
  },
  {
    id: 2,
    title: 'Orquídea Phalaenopsis',
    image: 'https://placehold.co/300x400',
    price: 3490,
    description: 'Orquídea elegante en una vasija de cerámica. Larga floración garantizada.',
    badge: 'NUEVO',
    quantity: 1
  },
  {
    id: 3,
    title: 'Ramo "Sueño de Verano"',
    image: 'https://placehold.co/300x400',
    price: 4290,
    description: 'Ramo brillante de flores de verano: gerberas, rosas y crisantemos..',
    quantity: 1
  }
])

const increaseQuantity = (product) => {
  product.quantity++
}

const decreaseQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity--
  }
}

const addToCart = (product) => {
  // Here you would typically dispatch to a store or emit an event
  console.log(`Added to cart: ${product.title} (${product.quantity} items)`)
  alert(`${product.title} добавлен в корзину`)
}

const showProductDetails = (product) => {
  selectedProduct.value = { ...product }
}

const closeModal = () => {
  selectedProduct.value = null
}
</script>

<style scoped>
.shop {
  padding: 2rem 4rem;
}

.breadcrumb {
  display: flex;
  gap: 0.5rem;
  color: #666;
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: #666;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: #45755e;
}

.main-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.product-description {
  max-width: 800px;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.category-item:hover {
  color: #45755e;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  position: relative;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #45755e;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
}

.favorite-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #45755e;
  margin-bottom: 1rem;
}

.product-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.25rem;
}

.quantity-control button {
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 1.2rem;
}

.quantity-control span {
  min-width: 24px;
  text-align: center;
}

.add-to-cart-btn {
  flex: 1;
  background: #45755e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #385f4c;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
}

.modal-product {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.modal-product img {
  width: 50%;
  object-fit: cover;
  border-radius: 4px;
}

.modal-product-info {
  flex: 1;
}

.modal-price {
  font-size: 1.6rem;
  font-weight: bold;
  color: #45755e;
  margin: 1rem 0;
}

.modal-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .shop {
    padding: 1rem;
  }

  .modal-product {
    flex-direction: column;
  }

  .modal-product img {
    width: 100%;
  }
}
</style>