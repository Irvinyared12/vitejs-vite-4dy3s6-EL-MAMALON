<template>
  <div class="account">
    <h1>Mi Cuenta</h1>
    <div class="account-content">
      <!-- Profile Section with User Image -->
      <section class="profile-section">
        <img src="https://placehold.co/100x100" alt="User Image" class="profile-image" />
        <div class="profile-info">
          <h2>Juan Pérez</h2>
          <p>juanperez@example.com</p>
          <button class="edit-btn" @click="editProfile">Editar Perfil</button>
        </div>
      </section>

      <!-- Tab Navigation -->
      <div class="tab-navigation">
        <button @click="activeTab = 'orders'" :class="{ active: activeTab === 'orders' }">Historial de Pedidos</button>
        <button @click="activeTab = 'address'" :class="{ active: activeTab === 'address' }">Dirección de Envío</button>
        <button @click="activeTab = 'settings'" :class="{ active: activeTab === 'settings' }">Ajustes de Cuenta</button>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Order History -->
        <div v-if="activeTab === 'orders'" class="order-history">
          <h3>Historial de Pedidos</h3>
          <ul>
            <li v-for="order in orders" :key="order.id">
              <span>Pedido #{{ order.id }} - {{ order.date }} - ${{ order.total }}</span>
            </li>
          </ul>
        </div>

        <!-- Shipping Address -->
        <div v-if="activeTab === 'address'" class="shipping-address">
          <h3>Dirección de Envío</h3>
          <p>{{ shippingAddress }}</p>
          <button @click="editAddress" class="edit-address-btn">Editar Dirección</button>
        </div>

        <!-- Account Settings -->
        <div v-if="activeTab === 'settings'" class="account-settings">
          <h3>Ajustes de Cuenta</h3>
          <ul>
            <li><button @click="changePassword" class="change-password-btn">Cambiar Contraseña</button></li>
            <li><button @click="configureNotifications" class="notifications-btn">Configuración de Notificaciones</button></li>
            <li><button @click="deleteAccount" class="delete-account-btn">Eliminar Cuenta</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('orders')

const orders = [
  { id: 1234, date: '01/10/2024', total: 45.99 },
  { id: 1233, date: '15/09/2024', total: 79.50 },
  { id: 1232, date: '01/08/2024', total: 22.35 }
]

const shippingAddress = ref('123 Calle Principal, Ciudad, País')

const editProfile = () => {
  alert('Editar perfil')
}

const editAddress = () => {
  alert('Editar dirección')
}

const changePassword = () => {
  alert('Cambiar contraseña')
}

const configureNotifications = () => {
  alert('Configurar notificaciones')
}

const deleteAccount = () => {
  alert('Eliminar cuenta')
}
</script>

<style scoped>
.account {
  padding: 4rem;
}

.account-content {
  max-width: 700px;
  margin: 2rem auto;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h2 {
  font-size: 1.5rem;
  margin: 0;
}

.tab-navigation {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-navigation button {
  flex: 1;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  transition: color 0.3s ease;
}

.tab-navigation button.active {
  color: #45755e;
  font-weight: bold;
  border-bottom: 2px solid #45755e;
}

.tab-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.order-history ul, .account-settings ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.order-history li, .account-settings li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.shipping-address p {
  color: #333;
  margin-bottom: 1rem;
}

button {
  background: #45755e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background: #385f4c;
}
</style>
