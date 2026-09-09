<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1600&q=80"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h2 text-weight-bold text-white text-center">
          Perros Calientes 🌭
        </div>
      </div>
    </q-img>


    <div class="q-pa-lg">

      <!-- TITULO -->
      <div class="text-h4 text-weight-bold text-primary">
        Perros Calientes 🌭
      </div>

      <p class="text-grey-8">
        Disfruta nuestros perros calientes preparados con ingredientes
        frescos, salsas especiales y diferentes combinaciones para todos
        los gustos.
      </p>


      <!-- RECOMENDACION DEL CHEF -->
      <q-card class="q-mb-xl bg-primary text-white">

        <q-card-section>

          <div class="text-h5 text-weight-bold">
            👨‍🍳 Recomendación del chef
          </div>

          <div class="text-h6 q-mt-sm">
            Perro Especial de la Casa
          </div>

          <p>
            Salchicha, queso mozzarella, tocineta, papas trituradas,
            cebolla caramelizada y salsa especial de la casa.
          </p>

          <div class="text-h6">
            $18.500
          </div>

        </q-card-section>

      </q-card>


      <!-- PRODUCTOS -->
      <div class="row q-col-gutter-lg">


        <!-- PERRO 1 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Perro Clásico
              </div>

              <p>
                Salchicha, queso, papas trituradas, cebolla
                y salsas de la casa.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $12.000
              </div>

              <q-badge color="orange">
                Más pedido
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PERRO 2 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Perro Especial
              </div>

              <p>
                Salchicha, queso mozzarella, tocineta, papas,
                cebolla y salsa especial.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $18.500
              </div>

              <q-badge color="red">
                Recomendado
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PERRO 3 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1613482084286-41f25b486fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwZG9nfGVufDB8fDB8fHww"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Perro BBQ
              </div>

              <p>
                Salchicha, queso cheddar, tocineta,
                cebolla caramelizada y salsa BBQ.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $16.500
              </div>

              <q-badge color="orange">
                Nuevo
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PERRO 4 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1695089028533-c6e9cf1ee3cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Perro Picante
              </div>

              <p>
                Salchicha, queso, jalapeños, papas trituradas,
                cebolla y salsa picante.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $15.500
              </div>

              <q-badge color="negative">
                Picante
              </q-badge>

            </q-card-section>

          </q-card>

        </div>

      </div>


      <!-- MENSAJE FINAL -->
      <q-banner
        class="bg-primary text-white q-mt-xl"
        rounded
      >

        <template v-slot:avatar>
          <q-icon name="fastfood" />
        </template>

        <div class="text-weight-bold">
          ¡Un perro caliente para cualquier momento!
        </div>

        <div>
          Escoge tu combinación favorita y disfruta.
        </div>

      </q-banner>

    </div>

  </q-page>
</template>


<style scoped>

.banner {
  height: 300px;
}

</style>
