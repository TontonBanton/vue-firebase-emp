<script setup>
  const props = defineProps({
    form: Object,
    submitAction: Function,
    isEditing: { type: Boolean, default: false},
  })
</script>

<template>
  <div>
    <form @submit.prevent="submitAction(form)" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="form.employee_id" required :disabled="isEditing">
          <label class="active">Employee ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="form.name" required>
          <label class="active">Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="form.dept" required>
          <label class="active">Department</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="form.position" required>
          <label class="active">Position</label>
        </div>
      </div>

      <button type="submit" class="btn orange darken-4">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
</template>
