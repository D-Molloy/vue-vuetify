<template>
  <div class="projects">
    <h1 class="subheading grey--text py-3">My Projects</h1>

    <v-expansion-panels>
      <v-expansion-panel v-for="project in myProjects" :key="project.id">
        <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
        <v-expansion-panel-content class="grey--text">
          <div class="font-weight-bold">due by {{ project.due }}</div>
          <div>{{ project.description }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import db from '@/firebase';

export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person.includes('Denis') && project.status != 'complete';
      });
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>
