<template>
<div class="login">
<div class="row">
    <div class="col-md-6">

    </div>

    <div class="col-md-6">
            <div class="row">
        <div class="col-md-6 login-box">
       <div class="row">
          <div class="col-md-12" >Iniciar Sesion</div>
       </div><br>

       <div class="row">
            <div class="col-md-12">
              <input type="text" v-model="user" placeholder="Usuario o Correo Electronico">
            </div>
         </div><br>

         <div class="row">
                <div class="col-md-12">
                        <input v-model="pass" type="password" placeholder="Contraseña">
                </div>
             </div><br>

             <div class="row">
                    <div class="col-md-4 box-button">
                            <a @click="ingresar" class="nav-link btn btn-primary sunn-button" href="#">Ingresar</a>
                    </div>
                 </div><br>

                 <div class="row">
                        <div class="col-md-12">¿Olvidaste tu contraseña?</div>
                     </div><br>

                     <div class="row">
                            <div class="col-md-12">¿Aun no tienes cuenta? <a>Registrate</a></div>
                         </div><br>
                        </div>
                    </div>
    </div>
</div>    

</div>
</template>
  
  <script>
  export default {
    name: 'login',
    data () {
    return {
      user: '',
      pass:''
    }
  },
  methods: {
    ingresar: function () {
        const self = this
         alert(self.user +' '+ self.pass)
      },
    },
  }
  </script>
  
<style>
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

.retotitle {
  font-size: 24px;
  margin-top: 10px;
}

.box-button {
  font-size: 24px;
  margin-top: 10px;
  margin: 0 auto;
}

.login {
    margin-top: 100px;
}

.login-box {
    -webkit-box-shadow: -41px -30px 174px -88px rgba(0,0,0,0.75);
    -moz-box-shadow: -41px -30px 174px -88px rgba(0,0,0,0.75);
    box-shadow: -41px -30px 174px;
}

</style>
  