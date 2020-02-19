<template>
  <div class="dashboard">
    <h1 class="title grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3 pl-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small outlined color="grey" v-on="on" @click="sortBy('title')">
              <v-icon left small color="grey">mdi-folder</v-icon>
              <span class="grey--text caption text-lowercase">Order By Project</span>
            </v-btn>
          </template>
          <span>Sort the projects by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small outlined color="grey" v-on="on" @click="sortBy('person')">
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
export default {
  name: "Dashboard",
  data: () => ({
    projects: [
      {
        title: "Design a new website",
        person: "The Net Ninja",
        due: "1st Jan 2019",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Code up the homepage",
        person: "Chun Li",
        due: "10th Jan 2019",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Design video thumbnails",
        person: "Ryu",
        due: "20th Dec 2018",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Create a community forum",
        person: "Gouken",
        due: "20th Oct 2018",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      }
    ]
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
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
