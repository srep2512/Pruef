<template>
  <div style="width: 500px; max-width: 90vw;">
      <q-list  highlight>
        <q-list-header>Prüfungsliste</q-list-header>
        <q-item v-for="item in pruefungen">
          <q-item-side  />
          <q-item-main>
            <q-item-tile label>{{item.Title}}</q-item-tile>
            <q-item-tile sublabel>{{item.Day}}</q-item-tile>
          </q-item-main>          
        </q-item>       
      </q-list>    
  </div>
   
</template>

<script>
/*eslint-disable*/
import {QItemSide,QListHeader,QItemTile,QItem,QList,QItemMain} from 'quasar'
export default {
  components:{QItemSide,QListHeader,QItemTile,QItem,QList,QItemMain},
  data () {
    return {
      data:[]
    }
  },
  mounted() {
        //this.$store.dispatch('fetchPruef')
  },
  computed:{
    pruefungen(){      
        return this.$store.getters.getPruef
    }
  }
}
</script>

<style>
</style>
