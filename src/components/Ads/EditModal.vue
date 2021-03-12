<template>
  <v-dialog width="400px" v-model="modal">
    <template
        v-slot:activator="{ on, attrs }"
    >
      <v-btn
          color="orange"
          v-bind="attrs"
          v-on="on"
      >
        Edit
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Ad</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  label="Title*"
                  v-model="editedTitle"
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                  label="Description*"
                  v-model="editedDescription"
                  rows="1"
                  required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="onCancelModal"
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="onSave"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data() {
    return {
      modal: false,
      editedTitle: this.ad.title,
      editedDescription: this.ad.description,
    }
  },
  methods: {
    onCancelModal () {
      this.editedTitle = this.ad.title
      this.editedDescription = this.ad.description
      this.modal = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.ad.title = this.editedTitle
        this.ad.description = this.editedDescription

        this.modal = false
      }
    }
  }
}
</script>

<style scoped>

</style>
