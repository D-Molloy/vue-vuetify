<template>
  <div class="text-center">
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">
          <v-icon>mdi-sticker-plus-outline</v-icon>
          <span>Create Project</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline purple white--text" primary-title
          >Add a New Project</v-card-title
        >
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              :rules="inputRules"
              prepend-icon="mdi-folder-account-outline"
            ></v-text-field>
            <v-textarea
              label="Description"
              :rules="inputRules"
              prepend-icon="mdi-circle-edit-outline"
              v-model="description"
            ></v-textarea>

            <v-dialog ref="dialog" v-model="modal" persistent width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="due"
                  label="Due date"
                  :rules="inputRules"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false"
                  >Cancel</v-btn
                >
                <v-btn text color="primary" @click="modal = false">OK</v-btn>
              </v-date-picker>
            </v-dialog>

            <div class="d-flex justify-center">
              <v-btn
                class="success mx-0 mt-2"
                @click="submit"
                :disabled="!title || !description"
                :loading="loading"
                >Create Project</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from '@/firebase';

export default {
  data: () => ({
    title: '',
    description: '',
    due: '',
    modal: false,
    status: "ongoing",
    inputRules: [v => v.length >= 3 || 'Please complete the form.'],
    loading: false,
    dialog: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const newProject = {
          title: this.title,
          description: this.description,
          due: this.due,
          person: 'Denis',
          status:"ongoing",
          dialog: false
        };

        db.collection('projects')
          .add(newProject)
          .then(() => {
            console.log('Added to db');
            this.title = '';
            this.description = '';
            this.due = '';
            this.dialog=false
            this.loading=false
            this.$emit('projectCreated')
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>


<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }