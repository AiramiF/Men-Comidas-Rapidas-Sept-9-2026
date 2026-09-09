<template>
  <q-layout view="hHh lpR fFf">

    <!-- ENCABEZADO -->
    <q-header elevated class="bg-primary text-white">

      <q-toolbar>

        <!-- Botón para abrir menú -->
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          🍔 Fast & Delicious
        </q-toolbar-title>

      </q-toolbar>

    </q-header>


    <!-- MENÚ LATERAL -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
    >

      <div class="q-pa-md">

        <div class="text-h6 text-primary q-mb-md">
          Menú Digital
        </div>

        <q-btn
          class="full-width q-mb-sm"
          color="primary"
          icon="lunch_dining"
          label="Hamburguesas"
          to="/"
          @click="cerrarMenu"
        />

        <q-btn
          class="full-width q-mb-sm"
          color="primary"
          icon="fastfood"
          label="Perros"
          to="/perros"
          @click="cerrarMenu"
        />

        <q-btn
          class="full-width q-mb-sm"
          color="primary"
          icon="local_pizza"
          label="Pizzas"
          to="/pizzas"
          @click="cerrarMenu"
        />

        <q-btn
          class="full-width q-mb-sm"
          color="primary"
          icon="local_drink"
          label="Bebidas"
          to="/bebidas"
          @click="cerrarMenu"
        />

        <q-btn
          class="full-width q-mb-sm"
          color="primary"
          icon="cake"
          label="Postres"
          to="/postres"
          @click="cerrarMenu"
        />

        <q-btn
          class="full-width q-mb-sm"
          color="negative"
          icon="local_offer"
          label="Promociones"
          to="/promociones"
          @click="cerrarMenu"
        />

        <q-btn
          class="full-width q-mb-sm"
          color="secondary"
          icon="restaurant"
          label="Nosotros"
          to="/nosotros"
          @click="cerrarMenu"
        />

      </div>

    </q-drawer>


    <!-- CONTENIDO DE LAS VISTAS -->
    <q-page-container>

      <router-view />

    </q-page-container>


    <!-- PIE DE PÁGINA -->
    <q-footer elevated class="bg-grey-9 text-white">

      <q-toolbar>

        <q-toolbar-title class="text-center">
          Fast & Delicious 🍔
        </q-toolbar-title>

      </q-toolbar>

    </q-footer>

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