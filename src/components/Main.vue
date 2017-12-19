<template>
  <div>
      <q-data-table
      :data="tarefas"
      :config="tableConfig"
      :columns="taskColumns">
      </q-data-table>

    <q-btn icon="add" @click="carregarTask" />
  </div>
</template>

<script>
import {
  QBtn,
  QIcon,
  QDataTable
} from 'quasar'

export default {
  components: {
    QIcon,
    QBtn,
    QDataTable
  },
  data () {
    return {
      tableConfig: {
        rowHeight: '50px',
        title: 'Tarefas',
        columnPicker: true
      },
      taskColumns: [
        {label: 'Título', field: 'title', width: '100px'},
        {label: 'Vencimento', field: 'due', width: '100px'},
        {
          label: 'Hora',
          field: 'due',
          width: '50px',
          format (value, row) {
            return new Date(value).getHours() + ':' + new Date(value).getMinutes()
          }
        }
      ]
    }
  },
  computed: {
    tarefas () {
      return this.$store.state.tasks
    }
  },
  methods: {
    carregarTask () {
      this.$store.dispatch('fetch_task')
    }
  }
}
</script>

<style>
</style>
