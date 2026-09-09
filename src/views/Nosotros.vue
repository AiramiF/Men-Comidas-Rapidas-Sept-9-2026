<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h2 text-weight-bold text-white text-center">
          Nosotros
        </div>
      </div>
    </q-img>


    <div class="q-pa-lg">

      <!-- HISTORIA -->
      <q-card class="q-mb-xl">

        <q-card-section>

          <div class="text-h4 text-primary text-weight-bold q-mb-md">
            Nuestra historia
          </div>

          <p class="text-grey-8">
            Fast & Delicious nació con la idea de ofrecer comidas rápidas
            deliciosas, preparadas con ingredientes frescos y de excelente
            calidad. Comenzamos como un pequeño restaurante familiar y,
            gracias a nuestros clientes, hemos crecido hasta convertirnos
            en un lugar donde todos pueden disfrutar de una buena comida
            y pasar un momento agradable.
          </p>

          <p class="text-grey-8">
            Nuestro objetivo es brindar productos deliciosos, un excelente
            servicio y una experiencia agradable en cada visita.
          </p>

        </q-card-section>

      </q-card>


      <!-- INFORMACIÓN DEL RESTAURANTE -->
      <div class="text-h4 text-primary text-weight-bold q-mb-md">
        Información del restaurante
      </div>

      <div class="row q-col-gutter-lg q-mb-xl">

        <!-- DIRECCIÓN -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-card-section class="text-center">

              <q-icon
                name="location_on"
                size="50px"
                color="primary"
              />

              <div class="text-h6 text-weight-bold q-mt-sm">
                Dirección
              </div>

              <p class="text-grey-8">
                Calle 12 # 10-25<br>
                San Gil, Santander
              </p>

            </q-card-section>

          </q-card>

        </div>


        <!-- HORARIOS -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-card-section class="text-center">

              <q-icon
                name="schedule"
                size="50px"
                color="primary"
              />

              <div class="text-h6 text-weight-bold q-mt-sm">
                Horarios
              </div>

              <p class="text-grey-8">
                Lunes a domingo<br>
                11:00 AM - 10:00 PM
              </p>

            </q-card-section>

          </q-card>

        </div>


        <!-- TELÉFONO -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-card-section class="text-center">

              <q-icon
                name="phone"
                size="50px"
                color="primary"
              />

              <div class="text-h6 text-weight-bold q-mt-sm">
                Teléfono
              </div>

              <p class="text-grey-8">
                300 123 4567
              </p>

            </q-card-section>

          </q-card>

        </div>


        <!-- WHATSAPP -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-card-section class="text-center">

              <q-icon
                name="chat"
                size="50px"
                color="primary"
              />

              <div class="text-h6 text-weight-bold q-mt-sm">
                WhatsApp
              </div>

              <p class="text-grey-8">
                300 123 4567
              </p>

            </q-card-section>

          </q-card>

        </div>

      </div>


      <!-- EQUIPO -->
      <div class="text-h4 text-primary text-weight-bold q-mb-md">
        Nuestro equipo 👨‍🍳
      </div>

      <p class="text-grey-8 q-mb-lg">
        Conoce a las personas que hacen posible que cada pedido
        llegue con la mejor calidad y atención.
      </p>


      <div class="row q-col-gutter-lg">


        <!-- CHEF -->
        <div class="col-12 col-sm-6 col-md-4">

          <q-card>

            <q-img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              height="300px"
            />

            <q-card-section class="text-center">

              <div class="text-h6 text-weight-bold">
                Carlos Martínez
              </div>

              <div class="text-primary">
                👨‍🍳 Chef
              </div>

              <p class="text-grey-8">
                Encargado de preparar nuestros platos y crear
                nuevas recetas para nuestros clientes.
              </p>

            </q-card-section>

          </q-card>

        </div>


        <!-- CAJERA -->
        <div class="col-12 col-sm-6 col-md-4">

          <q-card>

            <q-img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              height="300px"
            />

            <q-card-section class="text-center">

              <div class="text-h6 text-weight-bold">
                María López
              </div>

              <div class="text-primary">
                👩‍💼 Cajera
              </div>

              <p class="text-grey-8">
                Encargada de recibir a nuestros clientes y gestionar
                los pedidos con la mejor atención.
              </p>

            </q-card-section>

          </q-card>

        </div>


        <!-- DOMICILIARIO -->
        <div class="col-12 col-sm-6 col-md-4">

          <q-card>

            <q-img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
              height="300px"
            />

            <q-card-section class="text-center">

              <div class="text-h6 text-weight-bold">
                Juan Rodríguez
              </div>

              <div class="text-primary">
                🛵 Domiciliario
              </div>

              <p class="text-grey-8">
                Responsable de llevar nuestros pedidos hasta
                la puerta de nuestros clientes.
              </p>

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
          <q-icon name="favorite" />
        </template>

        <div class="text-weight-bold">
          ¡Gracias por elegir Fast & Delicious!
        </div>

        <div>
          Trabajamos cada día para ofrecerte la mejor experiencia.
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