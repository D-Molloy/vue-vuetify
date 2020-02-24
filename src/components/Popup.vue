<template>
  <div class="text-center">
    <v-dialog width="500">
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

            <v-dialog
              ref="dialog"
              v-model="modal"
              persistent
              width="290px"
            >
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
                <v-btn text color="primary" @click="modal = false"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>

            <div class="d-flex justify-center">
              <v-btn
                class="success mx-0 mt-2"
                @click="submit"
                :disabled="!title || !description"
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
export default {
  data: () => ({
    title: '',
    description: '',
    due: "",
    modal: false,
    inputRules:[
      v => v.length >=3 || "Please complete the form." 
    ]
  }),
  methods: {
    submit() {
      // if(this.$refs.form.validate()){

      console.log(this.title, this.description, this.due);
      // }
    }
  }
};
</script>
