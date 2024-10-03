<script setup>

const props = defineProps({
  empData: {
    type: Object,
    required: true,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['submit']);

const handleSubmit = () => {
  emit('submit', props.empData);
};

</script>


<template>
  <div>
    <form @submit.prevent="handleSubmit" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.employee_id" required :disabled="isEditing">
          <label class="active">Employee ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.name" required>
          <label class="active">Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.dept" required>
          <label class="active">Department</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="empData.position" required>
          <label class="active">Position</label>
        </div>
      </div>

      <button type="submit" class="btn orange darken-4">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
</template>
