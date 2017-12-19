<template>
  <q-layout
    ref="layout"
  >
      <q-toolbar slot="header">
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Pruefungen
      <span slot="subtitle">HTW Dresden</span>
    </q-toolbar-title>   
  </q-toolbar>   

  <!-- Left Side Panel -->
  <div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-side-link item to="/pruef">
        <q-item-side icon="school"/>
        <q-item-main label="Pruefungsapi" />
      </q-side-link>         
    </q-list>
  </div>

     <router-view />
  </q-layout>
</template>

<script>
/*eslint-disable*/
import {openURL,QLayout,QToolbar,QSideLink,QToolbarTitle,QList,QListHeader,QBtn,QIcon,QItem,QItemSide,QItemMain} from 'quasar'
export default {
  components: {
    QLayout,
    QToolbar,
    QSideLink,
    QToolbarTitle,
    QBtn,
    QIcon,
    QItem,
    QItemSide,
    QItemMain,
    QList,
    QListHeader
  },
  data () {
    return {}
  },
  methods:{
   launch(url){
     openURL(url)
   },
  }
}
</script>

<style>
</style>
