<template>
  <div class="dashboard">
    <h1 class="subheading grey--text py-3">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3 pl-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small outlined color="grey" class="ma-2" v-on="on" @click="sortBy('title')">
              <v-icon left small color="grey">mdi-folder</v-icon>
              <span class="grey--text caption text-lowercase">Order By Project</span>
            </v-btn>
          </template>
          <span>Sort the projects by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small outlined color="grey" class="ma-2" v-on="on"  @click="sortBy('person')">
              <v-icon left small color="grey">mdi-account-group</v-icon>
              <span class="grey--text caption text-lowercase">Order By Person</span>
            </v-btn>
          </template>
          <span>Order projects by first name</span>
        </v-tooltip>
      </v-row>
      <v-card flat class="px-2" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <v-chip
              small
              class="v-chip--active white--text caption my-2"
              :color="project.status"
            >{{ project.status }}</v-chip>
          </v-flex>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/firebase'

export default {
  name: "Dashboard",
  data: () => ({
    projects: []
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created() {
    db.collection('projects').onSnapshot(res=>{
      const changes = res.docChanges();

      changes.forEach(change=>{
        if(change.type === 'added'){
          console.log(change.doc.data())
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },  
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  justify-content: center;
  display: flex;
  background-color: #3cd1c2;
}

.v-chip.ongoing {
  justify-content: center;
  display: flex;
  background: orange;
}
.v-chip.overdue {
  justify-content: center;
  display: flex;
  background: tomato;
}
</style>
