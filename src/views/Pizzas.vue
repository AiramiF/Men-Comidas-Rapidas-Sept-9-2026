<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1600&q=80"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h2 text-weight-bold text-white text-center">
          Pizzas 🍕
        </div>
      </div>
    </q-img>


    <div class="q-pa-lg">

      <!-- TITULO -->
      <div class="text-h4 text-weight-bold text-primary">
        Nuestras Pizzas 🍕
      </div>

      <p class="text-grey-8">
        Pizzas preparadas con masa fresca, salsa de tomate,
        queso mozzarella e ingredientes seleccionados para ofrecerte
        el mejor sabor.
      </p>


      <!-- RECOMENDACION DEL CHEF -->
      <q-card class="q-mb-xl bg-primary text-white">

        <q-card-section>

          <div class="text-h5 text-weight-bold">
            👨‍🍳 Recomendación del chef
          </div>

          <div class="text-h6 q-mt-sm">
            Pizza Especial de la Casa
          </div>

          <p>
            Salsa de tomate, mozzarella, pepperoni, jamón, champiñones,
            cebolla, pimentón y aceitunas.
          </p>

          <div class="text-h6">
            $32.000
          </div>

        </q-card-section>

      </q-card>


      <!-- PRODUCTOS -->
      <div class="row q-col-gutter-lg">


        <!-- PIZZA 1 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Pizza Pepperoni
              </div>

              <p>
                Salsa de tomate, queso mozzarella y abundante
                pepperoni.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $24.000
              </div>

              <q-badge color="orange">
                Más pedida
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PIZZA 2 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Pizza Hawaiana
              </div>

              <p>
                Salsa de tomate, mozzarella, jamón y trozos
                de piña.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $25.000
              </div>

              <q-badge color="red">
                Favorita
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PIZZA 3 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Pizza Carnes
              </div>

              <p>
                Salsa de tomate, mozzarella, pepperoni, jamón,
                salchicha y carne de res.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $29.000
              </div>

              <q-badge color="deep-orange">
                Especial
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PIZZA 4 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Pizza Vegetariana
              </div>

              <p>
                Salsa de tomate, mozzarella, champiñones,
                pimentón, cebolla, tomate y aceitunas.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $26.000
              </div>

              <q-badge color="green">
                Vegetariana
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
          <q-icon name="local_pizza" />
        </template>

        <div class="text-weight-bold">
          ¡Comparte una pizza!
        </div>

        <div>
          Elige tu pizza favorita y disfruta con familia y amigos.
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