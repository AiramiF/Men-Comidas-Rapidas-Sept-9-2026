<template>
  <q-layout view="hHh lpR fFf" class="restaurant-layout">

    <q-header elevated class="restaurant-header text-white">
      <q-toolbar class="toolbar-custom">
        <q-btn
          dense
          flat
          round
          icon="menu"
          color="amber-2"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="title-app">
          Fast & Delicious
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
      class="restaurant-drawer"
    >
      <div class="menu-panel q-pa-md">
        <div class="menu-title q-mb-lg">
          Menú Digital
        </div>

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="amber-8"
          icon="lunch_dining"
          label="Hamburguesas"
          to="/"
          @click="cerrarMenu"
        />

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="amber-7"
          icon="fastfood"
          label="Perros"
          to="/perros"
          @click="cerrarMenu"
        />

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="amber-7"
          icon="local_pizza"
          label="Pizzas"
          to="/pizzas"
          @click="cerrarMenu"
        />

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="amber-7"
          icon="local_drink"
          label="Bebidas"
          to="/bebidas"
          @click="cerrarMenu"
        />

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="amber-7"
          icon="cake"
          label="Postres"
          to="/postres"
          @click="cerrarMenu"
        />

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="red-7"
          icon="local_offer"
          label="Promociones"
          to="/promociones"
          @click="cerrarMenu"
        />

        <q-btn
          class="menu-btn full-width q-mb-sm"
          color="deep-orange-7"
          icon="restaurant"
          label="Nosotros"
          to="/nosotros"
          @click="cerrarMenu"
        />
      </div>
    </q-drawer>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function cerrarMenu() {
  leftDrawerOpen.value = false
}
</script>

<style scoped>
.restaurant-layout {
  background: #fff8f1;
}

.restaurant-header {
  background: linear-gradient(135deg, #d62828 0%, #f77f00 100%);
  box-shadow: 0 4px 12px rgba(122, 56, 0, 0.18);
}

.toolbar-custom {
  min-height: 72px;
}

.title-app {
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #fff9f1;
}

.restaurant-drawer {
  background: #fff4e8;
}

.menu-panel {
  padding-top: 20px;
}

.menu-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #8b1e1e;
  text-align: center;
}

.menu-btn {
  border-radius: 14px;
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(120, 69, 28, 0.12);
  padding: 0 18px;
  min-height: 48px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(120, 69, 28, 0.18);
}

.page-container {
  background: linear-gradient(180deg, #fffaf3 0%, #fef0df 100%);
}
</style>