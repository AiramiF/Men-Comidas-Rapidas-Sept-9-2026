<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1600&q=80"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h2 text-weight-bold text-white text-center">
          Postres 🍰
        </div>
      </div>
    </q-img>


    <!-- CONTENIDO -->
    <div class="q-pa-lg">

      <!-- TITULO Y DESCRIPCION -->
      <div class="text-h4 text-weight-bold text-primary">
        Nuestros postres 🍰
      </div>

      <p class="text-grey-8">
        Termina tu comida con algo dulce. Tenemos deliciosos postres
        preparados para disfrutar en cualquier momento del día.
      </p>


      <!-- RECOMENDACION DEL CHEF -->
      <q-card class="q-mb-xl bg-primary text-white">

        <q-card-section>

          <div class="text-h5 text-weight-bold">
            👨‍🍳 Recomendación del chef
          </div>

          <div class="text-h6 q-mt-sm">
            Brownie con Helado
          </div>

          <p>
            Brownie de chocolate recién horneado acompañado de helado
            de vainilla, salsa de chocolate y fresas.
          </p>

          <div class="text-h6">
            $14.500
          </div>

        </q-card-section>

      </q-card>


      <!-- PRODUCTOS -->
      <div class="row q-col-gutter-lg">


        <!-- POSTRE 1 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Brownie de Chocolate
              </div>

              <p>
                Brownie de chocolate acompañado de salsa de chocolate
                y crema chantilly.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $10.500
              </div>

              <q-badge color="orange">
                Más pedido
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- POSTRE 2 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Cheesecake
              </div>

              <p>
                Cheesecake cremoso con base de galleta y cobertura
                de frutos rojos.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $13.500
              </div>

              <q-badge color="red">
                Nuevo
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- POSTRE 3 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Helado Especial
              </div>

              <p>
                Tres bolas de helado de vainilla, chocolate y fresa,
                acompañadas de toppings y salsa de chocolate.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $12.000
              </div>

              <q-badge color="purple">
                Especial
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- POSTRE 4 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Waffle con Frutas
              </div>

              <p>
                Waffle recién preparado con fresas, banano,
                helado de vainilla, chocolate y crema chantilly.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $16.000
              </div>

              <q-badge color="green">
                Recomendado
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
          <q-icon name="cake" />
        </template>

        <div class="text-weight-bold">
          ¡Un dulce final para tu comida!
        </div>

        <div>
          Pregunta por nuestros postres disponibles y disfruta
          algo delicioso.
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