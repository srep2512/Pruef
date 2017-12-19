<template>
  <div class="container">
   <!-- GanttCard -->
  <div class="card col">

            <div class="card-content">
                    <MaschinGant :tasks="actual"></MaschinGant>
                    <button class="primary" @click="gesamtLauf">Gesamtlauf</button>
                    <button class="primary" @click="weiter">Weiter</button>
                    <button class="primary" @click="reset">Reset</button>
          </div>
      </div>
    <!-- KonsolenCard -->
    <div class="card">
         <div class="card-content">
             <div class="card col">
                <div class="card-content">
                <div class="shell-wrap">
                        <p class="shell-top-bar">MRP Lauf was passiert</p>
                        <ul class="shell-body">
                           <!--<li v-for="item in konsolenListe">
                              {{item.text}}
                           </li>-->
                        </ul>
                      </div>
                </div>
             </div>
            <Giffler></Giffler>
            </div>
    </div>



  </div>
</template>

<script>
/*eslint-disable*/
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import MaschinGant from './CustomComponents/GanttDiagram.vue';

export default {
  data () {
    return {
      
    }
  },
  components:{
   MaschinGant
  },
  mounted(){
    
  
  }
}
</script>


<style>
 @import "./css/console.css";

 .container{
 display:flex;
 }
</style>

