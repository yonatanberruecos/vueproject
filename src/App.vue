<template>
  <div id="app">
    <!--Main Navigation-->
    
    <header>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
        <a class="navbar-brand" href="/"><img with="100px" src="http://sunnlatam.co/wp-content/uploads/2018/06/logo-sunn.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Retos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary sunn-button" href="#" @click="clogin">Ingresar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary sunn-button" href="#">Registrarse</a>
            </li>
          </ul>
        </div>
      </nav>

    </header>
    <!--Main Navigation-->
  <div class="maincontainer" v-show="mainview">
    <div class="row">
      <div class="col-md-12 intro-text">
        <div class="row"><div class="col-md-6"><h1 class="title">Comunidad Virtual de Innovaciòn Tecnólogica</h1></div></div>
        <div class="row"><div class="col-md-4"><p>Conectamos las ofertas con las demandas .Star up, inversionistas, empresas y grupos de investigación y desarrollo en un mismo lugar, Registra tu empresa.</p></div></div>
        <div class="row"><div class="col-md-2"><a class="nav-link btn btn-primary sunn-button" href="#">Regístrate</a></div></div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 section2">
        <h1 class="title2">Que es Sunn?</h1>
        <p class="subtitle">
          SUNN, una COMUNIDAD DE INNOVACIÓN VIRTUAL que permite a los usuarios comunicarse con otros </br>ACTORES afines a sus capacidades o necesidades tecnológicas para generar conexiones estratégicas basadas en 5 grandes ecosistemas: </br>Materiales Avanzados, Tecnologías Limpias, Energía, TIC´s, Ciencias de la Vida.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 section3">
        <h1 style="text-align:center" class="title3">Beneficios</h1>
        <p class="text3">tenemos ideas enfocadas para cada público</p>
      </div>
    </div>

    <div class="row">
        <div class="col-md-12 section4">
            <div class="row">
              <div class="col-md-3">
                <a href="http://sunnlatam.co/"  class="icon-link"><img src="http://sunnlatam.co/wp-content/uploads/2018/06/ic2.png" alt="Grupo de investigacióny desarrollo"></a>
                  <div class="content-wrap">
                    <div class="content-center with-full">
                        <div class="wrap">
                          <a href="http://sunnlatam.co/" class="icon-link"><h3 class="title4">Grupo de investigacióny desarrollo</h3></a>
                                    <p class="text3">
                              Si haces parte de un grupo de investigación y desarrollo: Convierte tus desarrollos en productos y servicios rentables. SUNN tiene para ti aliados estratégicos para ayudarte a potenciar tus investigaciones.          </p>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-3">
                 <a href="http://sunnlatam.co/" class="icon-link"><img src="http://sunnlatam.co/wp-content/uploads/2018/06/ic4.png" alt="Startup"></a>
                  <div class="content-wrap">
                    <div class="content-center with-full">
                        <div class="wrap">
                          <a href="http://sunnlatam.co/" class="icon-link"><h3 class="title4">Startup</h3></a>
                              
                                    <p class="text3">
            Si haces parte de una startup: Promociona y escala tus tecnologías en SUNN, accede a inversionistas y empresas locales y globales y promueve tus capacidades o soluciones innovadoras y móntalas a bordo de un proyecto.           </p>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-3">
               <a href="http://sunnlatam.co/" class="icon-link"><img src="http://sunnlatam.co/wp-content/uploads/2018/06/ic3.png" alt="Inversionista"></a>
                  <div class="content-wrap">
                    <div class="content-center with-full">
                        <div class="wrap">
                          <a href="http://sunnlatam.co/" class="icon-link"><h3 class="title4">Inversionista</h3></a>
                                    <p class="text3">
                             
            Si eres un inversionista: Te ofrecemos acceso acelerado al flujo de oportunidades de inversiones rentables en tecnologías disruptivas.                   </p>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-3">
               <a href="http://sunnlatam.co/" class="icon-link"><img src="http://sunnlatam.co/wp-content/uploads/2018/06/ic1.png" alt="Empresa"></a>
                  <div class="content-wrap">
                    <div class="content-center with-full">
                        <div class="wrap">
                          <a href="http://sunnlatam.co/" class="icon-link"><h3 class="title4">Empresa</h3></a>
                                    <p class="text3">
                              
            Si perteneces a una empresa: Encuentra tendencias y tecnologías para impulsar tu productividad y competitividad.                   </p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>

    <div class="row section5">
        <div class="col-md-5">
            <img src="https://images.vexels.com/media/users/3/150030/isolated/preview/21f6aa2ebb5547cb55eab996913e3007-ilustraci--n-de-nave-espacial-by-vexels.png" alt="">
          </div>
      <div class="col-md-7">
         <div class="row">
           <div class="col-md-12">
             <h1 class="title3">Sunn pone a tu disposición excelentes opciones para compartir en comunidad</h1>
           </div>
         </div>
         <div class="row">
           <div class="col-md-6">
             <h1 class="title5">Radar de Scouting</h1>
             <p class="text4">Explora, identifica y conecta con actores de innovación y necesidades de empresas.</p>
           </div>
           <div class="col-md-6">
             <h1 class="title5">Salas de Innovación</h1>
             <p class="text4">Interactúa con potenciales aliados a través de mesajes.</p>
           </div>
         </div>
         <div class="row">
           <div class="col-md-6">
             <h1 class="title5">Referidos</h1>
             <p class="text4">Recomienda perfiles de empresas y requerimientos a otros amigos.</p>
           </div>
           <div class="col-md-6">
             <h1 class="title5">Retos</h1>
             <p class="text4">Pública necesidades y retos específicos o realiza propuestas de solución a retos existentes.</p>
           </div>
         </div>

         <div class="row">
            <div class="col-md-12">
                <p style="text-align:center;" class="title3">Haz Parte de la comunidad Sunn</p>
              </div>
        </div>

        <div class="row"><div style="margin: 0 auto;" class="col-md-2"><a class="nav-link btn btn-primary sunn-button" href="#">Regístrate</a></div></div>
      </div>
    </div>

      <div class="row">
        <div class="col-md-12">
              <div class="Retos">
                <div>
                  <div class="row">
                      <div class="col-md-1"></div>
                    <div class="col-md-3 col-md-offset-1 reto-box">
                        <img class="img-fluid" style="width:450px; height:200px" src="http://sunnlatam.co/images/challenge/690/734/690734146" title="Challenge">
                        <h1 class="retotitle">Prosche Colombia S.A.S.</h1>
                        <p class="retotext">
                            Identificar las oportunidades de cautivar, conocer y activar al cliente durante su visita a la tienda, teniendo en cuenta el conocimiento previo del mismo y su posición relativa en el punto de venta.
                        </p>

                    </div>
                  
                      <div class="col-md-3 reto-box">
                          <img class="img-fluid" style="width:450px; height:200px" src="http://sunnlatam.co/images/challenge/690/734/690734146" title="Challenge">
                          <h1 class="retotitle">Prosche Colombia S.A.S.</h1>
                          <p class="retotext">
                              Identificar las oportunidades de cautivar, conocer y activar al cliente durante su visita a la tienda, teniendo en cuenta el conocimiento previo del mismo y su posición relativa en el punto de venta.
                          </p>
  
                      </div>
                    
                        <div class="col-md-3 reto-box">
                            <img class="img-fluid" style="width:450px; height:200px" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_750/https://www.elcarrocolombiano.com/wp-content/uploads/2019/05/20190516-PORSCHE-911-2020-COLOMBIA-PRECIO-VERSIONES-CARACTERISTICAS-01A-750x460.jpg" title="Challenge">
                            <h1 class="retotitle">Prosche Colombia S.A.S.</h1>
                            <p class="retotext">
                                Identificar las oportunidades de cautivar, conocer y activar al cliente durante su visita a la tienda, teniendo en cuenta el conocimiento previo del mismo y su posición relativa en el punto de venta.
                            </p>
    
                        </div>
                      </div>
                      <div class="col-md-1"></div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-3 reto-box">
                            <img class="img-fluid" style="width:450px; height:200px" src="https://c.pxhere.com/photos/c5/fa/person_behind_standing_holding_bag-1329682.jpg!d" title="Challenge">
                            <h1 class="retotitle">Prosche Colombia S.A.S.</h1>
                            <p class="retotext">
                                Identificar las oportunidades de cautivar, conocer y activar al cliente durante su visita a la tienda, teniendo en cuenta el conocimiento previo del mismo y su posición relativa en el punto de venta.
                            </p>
    
                        </div>
                      
                          <div class="col-md-3 reto-box">
                              <img class="img-fluid" style="width:450px; height:200px" src="https://www.maderea.es/imagenes/2015/12/madera-legal.jpg" title="Challenge">
                              <h1 class="retotitle">Prosche Colombia S.A.S.</h1>
                              <p class="retotext">
                                  Identificar las oportunidades de cautivar, conocer y activar al cliente durante su visita a la tienda, teniendo en cuenta el conocimiento previo del mismo y su posición relativa en el punto de venta.
                              </p>
      
                          </div>
                        
                            <div class="col-md-3 reto-box">
                                <img class="img-fluid" style="width:450px; height:200px" src="http://sunnlatam.co/images/challenge/690/734/690734146" title="Challenge">
                                <h1 class="retotitle">Prosche Colombia S.A.S.</h1>
                                <p class="retotext">
                                    Identificar las oportunidades de cautivar, conocer y activar al cliente durante su visita a la tienda, teniendo en cuenta el conocimiento previo del mismo y su posición relativa en el punto de venta.
                                </p>
        
                            </div>
                            <div class="col-md-1"></div>
                      </div>
                </div>
              </div>
            </div>
        </div>
</div>
        <login v-show="loginview"></login>
        
    <div class="container">
        <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  import login from './components/Login.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: '',
      loginview: false,
      mainview:true
    }
  },
  components: {
      login
  },
  methods: {
    clogin: function () {
        const self = this
        self.mainview = false,
        self.loginview=true
      },
    },
  beforeMount() {
    console.log("prueba")
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* header ---nav bar ---------*/
nav {
  background: #f8f9fa3d;
}

p {
  color: #ffffff;
}

.navbar-brand img {
  WIDTH: 180PX;
}

.nav-link,.title3, .title4,.title5 {
  color: #145c8b !important;
      font-weight: 700;
}

.title4{
    font-size: 20px;

}

.title5{
    text-align: left;
    font-size: 25px;
}

.title3{
    font-size: 30px;
        text-align: left;
}

.title {
  font-weight: 700;
  font-size: 45px;
}

.navbar {
    background: #f8f9fa9c;
    height: 80px;
}

.navbar-nav {
    margin: 0 auto;
    margin-right: 0 !important;
}

.sunn-button {
      background-color: #ec820e;
    border-color: #ec820e;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 40px;
    color: #ffffff !important;
    font-size: 14px;
    font-weight: 700;
}

.sunn-button:hover,.sunn-button:active  {
    background-color: transparent !important;
    border-color: #ec820e !important;
    color: #145c8b !important;

}

.sunn-button:focus {
    outline: 0;
    box-shadow: none;
    color: #145c8b !important;
}

.intro-text {
  text-align: left;
  padding-top: 150px;
  padding-bottom: 150px;
  color: #ffffff;
  padding-left: 215px;
      background: url(https://c1.sfdcstatic.com/content/dam/blogs/us/Jan2018/sftower4.png);
    background-position-y: -346px;
    background: cover;
    background-repeat: no-repeat;
    background-size: auto;
}

/*------------------------*/

.section2 {
  background-color: #145c8b;
  padding-top: 90px;
  padding-bottom: 90px;
}

.title2 {
  color: #ec820e;
}

.text3,.text4 {
  color: #145c8b !important;
}

.text4 {
  text-align:left;
}

.section3 {
  padding-top: 70px;
}

.section4 {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 60px;
}

.icon-link, .icon-link:hover  {
  text-decoration: none;
}

.icon-link img:hover {
  text-decoration: none;
  width: 120px;
}

.retotitle {
  font-size: 24px;
  margin-top: 10px;
}

.retotext {
  color: #2d2c2c;
}

.reto-box {
  box-shadow: 1px 4px 32px 0px rgba(0,0,0,0.75);
  border-radius: 10px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.slick-next:before {
    content: "\f2b9";
    font-family: FontAwesome;
    color: #00c3f3;
    font-size: 53px;
}

.slick-prev:after {
    content: "\f2b9";
    font-family: FontAwesome;
    color: #00c3f3;
    font-size: 53px;
}

.slick-prev, .slick-next{
    background: #ffffff;
    border: none;
    color: #ffffff;
}

.slick-next,.slick-next:active {
    position: absolute;
    right: 35px;
    top: 35%;
    background: white;
    border: none;
}

.slick-prev {
    position: absolute;
    left: -25px;
    top: 35%;
    background: white;
    z-index: 1000;
}

.section5 {
  margin-top: 60px;
  margin-bottom: 60px;
}

</style>
