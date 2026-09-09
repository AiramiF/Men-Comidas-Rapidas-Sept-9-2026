<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=80"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h2 text-weight-bold text-white text-center">
          Bebidas 🥤
        </div>
      </div>
    </q-img>


    <div class="q-pa-lg">

      <!-- TITULO -->
      <div class="text-h4 text-weight-bold text-primary">
        Nuestras bebidas 🥤
      </div>

      <p class="text-grey-8">
        Refresca tu día con nuestras bebidas. Tenemos opciones frías,
        naturales y deliciosas para acompañar cualquiera de nuestros platos.
      </p>


      <!-- RECOMENDACION DEL CHEF -->
      <q-card class="q-mb-xl bg-primary text-white">

        <q-card-section>

          <div class="text-h5 text-weight-bold">
            👨‍🍳 Recomendación del chef
          </div>

          <div class="text-h6 q-mt-sm">
            Limonada de Coco
          </div>

          <p>
            Refrescante limonada preparada con jugo de limón,
            leche de coco, hielo y un toque de azúcar.
          </p>

          <div class="text-h6">
            $9.500
          </div>

        </q-card-section>

      </q-card>


      <!-- BEBIDAS -->
      <div class="row q-col-gutter-lg">


        <!-- BEBIDA 1 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Limonada Natural
              </div>

              <p>
                Limonada preparada con jugo de limón natural,
                agua, hielo y azúcar.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $6.500
              </div>

              <q-badge color="green">
                Natural
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- BEBIDA 2 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Gaseosa
              </div>

              <p>
                Gaseosa fría disponible en diferentes sabores
                para acompañar tu comida favorita.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $5.000
              </div>

              <q-badge color="blue">
                Refrescante
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- BEBIDA 3 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Jugo Natural
              </div>

              <p>
                Jugo preparado con fruta fresca, agua o leche,
                hielo y azúcar al gusto.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $8.000
              </div>

              <q-badge color="green">
                Natural
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- BEBIDA 4 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
              height="220px"
            />

            <q-card-section>

              <div class="text-h6 text-weight-bold">
                Malteada de Chocolate
              </div>

              <p>
                Cremosa malteada preparada con helado de vainilla,
                leche, chocolate y crema chantilly.
              </p>

              <div class="text-subtitle1 text-primary text-weight-bold">
                $12.500
              </div>

              <q-badge color="purple">
                Más pedida
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
          <q-icon name="local_drink" />
        </template>

        <div class="text-weight-bold">
          ¡Refresca tu comida!
        </div>

        <div>
          Elige tu bebida favorita y acompaña cualquiera de nuestros platos.
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