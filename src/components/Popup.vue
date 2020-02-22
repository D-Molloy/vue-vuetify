<template>
  <div class="text-center">
    <v-dialog  width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">
        <v-icon>mdi-sticker-plus-outline</v-icon>
        <span>Create Project</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline purple white--text" primary-title>Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder-account-outline"></v-text-field>
          <v-textarea label="Description" prepend-icon="mdi-circle-edit-outline" v-model="description"></v-textarea>
          <div class="d-flex justify-center">
          <v-btn class="success mx-0 mt-2" @click="submit" :disabled="!title || !description">Create Project</v-btn>
          </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    title:"",
    description:""
  }),
  methods:{
    submit(){
      console.log(this.title, this.description)
    }
  }
};
</script>
