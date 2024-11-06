<template>
  <nav class="nav-container">
    <div class="logo">
      <router-link to="/">
        <img
          src="https://placehold.co/120x40"
          alt="Beauty Logo"
          class="logo-image"
        />
      </router-link>
    </div>
    <div class="nav-links">
      <router-link to="/shop" class="nav-link">SHOP</router-link>
      <router-link to="/about" class="nav-link">ABOUT US</router-link>
      <router-link to="/glass-skin-duo" class="nav-link"
        >GLASS SKIN DUO</router-link
      >
    </div>
    <div class="nav-actions">
      <router-link to="/account" class="nav-link">ACCOUNT</router-link>
      <router-link to="/cart" class="nav-link">CART</router-link>
      <a href="#" class="nav-link">SEARCH</a>
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: var(--light);
  border-bottom: 2px solid var(--secondary);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-links,
.nav-actions {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--dark);
  text-decoration: none;
  font-size: 0.875rem;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--primary);
}

.router-link-active {
  color: var(--primary);
}

.router-link-active::after {
  width: 100%;
}

.logo-image {
  height: 1.5rem;
  width: auto;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem 2rem;
  }

  .nav-links,
  .nav-actions {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.75rem;
  }
}
</style>
