<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbWJ1cmd1ZXJ8ZW58MHx8MHx8fDA%3D"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h2 text-weight-bold text-white">
          Hamburguesas
        </div>
      </div>
    </q-img>


    <!-- INFORMACIÓN -->
    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold text-primary">
        Hamburguesas 🍔
      </div>

      <p class="text-grey-8">
        Disfruta nuestras hamburguesas preparadas con carne de calidad,
        ingredientes frescos y combinaciones especiales para todos los gustos.
      </p>


      <!-- RECOMENDACIÓN DEL CHEF -->
      <q-card class="q-mb-xl bg-primary text-white">

        <q-card-section>

          <div class="text-h5 text-weight-bold">
            👨‍🍳 Recomendación del chef
          </div>

          <div class="text-h6 q-mt-sm">
            Hamburguesa Especial de la Casa
          </div>

          <p>
            Carne de res, queso cheddar, tocineta, lechuga,
            tomate, cebolla caramelizada y salsa especial.
          </p>

          <div class="text-h6">
            $28.500
          </div>

        </q-card-section>

      </q-card>


      <!-- PRODUCTOS -->
      <div class="row q-col-gutter-lg">


        <!-- PRODUCTO 1 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Hamburguesa Clásica
              </div>

              <p>
                Carne de res, queso cheddar, lechuga,
                tomate, cebolla y salsa de la casa.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $18.500
              </div>

              <q-badge color="orange">
                Más pedida
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PRODUCTO 2 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Hamburguesa BBQ
              </div>

              <p>
                Carne de res, queso, tocineta,
                cebolla caramelizada y salsa BBQ.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $22.000
              </div>

              <q-badge color="red">
                Nuevo
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PRODUCTO 3 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Hamburguesa Picante
              </div>

              <p>
                Carne de res, queso cheddar,
                jalapeños, cebolla y salsa picante.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $21.500
              </div>

              <q-badge color="negative">
                Picante
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PRODUCTO 4 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Hamburguesa Vegetariana
              </div>

              <p>
                Hamburguesa vegetal, lechuga,
                tomate, aguacate y salsa especial.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $19.500
              </div>

              <q-badge color="green">
                Vegetariano
              </q-badge>

            </q-card-section>

          </q-card>

        </div>

      </div>

    </div>

  </q-page>
</template>


<style scoped>

.banner {
  height: 300px;
}

</style>