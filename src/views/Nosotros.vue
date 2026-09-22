<template>
  <q-page class="restaurant-page">

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

      <q-card class="q-mb-xl warm-card">
        <q-card-section>
          <div class="section-title q-mb-md">
            Nuestra historia
          </div>

          <p class="content-text">
            Fast & Delicious nació con la idea de ofrecer comidas rápidas
            deliciosas, preparadas con ingredientes frescos y de excelente
            calidad. Comenzamos como un pequeño restaurante familiar y,
            gracias a nuestros clientes, hemos crecido hasta convertirnos
            en un lugar donde todos pueden disfrutar de una buena comida
            y pasar un momento agradable.
          </p>

          <p class="content-text">
            Nuestro objetivo es brindar productos deliciosos, un excelente
            servicio y una experiencia agradable en cada visita.
          </p>
        </q-card-section>
      </q-card>

      <div class="section-title q-mb-md">
        Información del restaurante
      </div>

      <div class="row q-col-gutter-lg q-mb-xl">

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height warm-card">
            <q-card-section class="text-center">
              <q-icon name="location_on" size="50px" color="amber-8" />
              <div class="card-title q-mt-sm">Dirección</div>
              <p class="content-text">
                Calle 12 # 10-25<br>
                San Gil, Santander
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height warm-card">
            <q-card-section class="text-center">
              <q-icon name="schedule" size="50px" color="amber-8" />
              <div class="card-title q-mt-sm">Horarios</div>
              <p class="content-text">
                Lunes a domingo<br>
                11:00 AM - 10:00 PM
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height warm-card">
            <q-card-section class="text-center">
              <q-icon name="phone" size="50px" color="amber-8" />
              <div class="card-title q-mt-sm">Teléfono</div>
              <p class="content-text">300 123 4567</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height warm-card">
            <q-card-section class="text-center">
              <q-icon name="chat" size="50px" color="amber-8" />
              <div class="card-title q-mt-sm">WhatsApp</div>
              <p class="content-text">300 123 4567</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="section-title q-mb-md">
        Nuestro equipo 👨‍🍳
      </div>

      <p class="content-text q-mb-lg">
        Conoce a las personas que hacen posible que cada pedido
        llegue con la mejor calidad y atención.
      </p>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="warm-card">
            <q-img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" height="300px" />
            <q-card-section class="text-center">
              <div class="text-h6 text-weight-bold">Carlos Martínez</div>
              <div class="role-tag">👨‍🍳 Chef</div>
              <p class="content-text">
                Encargado de preparar nuestros platos y crear
                nuevas recetas para nuestros clientes.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="warm-card">
            <q-img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" height="300px" />
            <q-card-section class="text-center">
              <div class="text-h6 text-weight-bold">María López</div>
              <div class="role-tag">👩‍💼 Cajera</div>
              <p class="content-text">
                Encargada de recibir a nuestros clientes y gestionar
                los pedidos con la mejor atención.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="warm-card">
            <q-img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80" height="300px" />
            <q-card-section class="text-center">
              <div class="text-h6 text-weight-bold">Juan Rodríguez</div>
              <div class="role-tag">🛵 Domiciliario</div>
              <p class="content-text">
                Responsable de llevar nuestros pedidos hasta la puerta de nuestros clientes.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-banner class="q-mt-xl warm-banner" rounded>
        <template v-slot:avatar>
          <q-icon name="favorite" color="red-7" />
        </template>

        <div class="text-weight-bold">¡Gracias por elegir Fast & Delicious!</div>
        <div>Trabajamos cada día para ofrecerte la mejor experiencia.</div>
      </q-banner>
    </div>
  </q-page>
</template>

<style scoped>
.restaurant-page {
  background: linear-gradient(180deg, #fffaf3 0%, #fff2e2 100%);
}

.banner {
  height: 300px;
}

.section-title {
  color: #7a2d00;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
}

.card-title {
  color: #5b2c16;
  font-size: 1.15rem;
  font-weight: 700;
}

.content-text {
  color: #5f4530 !important;
  line-height: 1.7;
}

.warm-card {
  background: #fffaf3;
  border: 1px solid #f0d7b8;
  border-radius: 18px;
  box-shadow: 0 10px 22px rgba(111, 68, 40, 0.08);
}

.role-tag {
  margin: 8px 0 10px;
  color: #b45309;
  font-weight: 700;
}

.warm-banner {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
  color: #fffaf3 !important;
  border: 1px solid #f0d7b8;
}
</style>