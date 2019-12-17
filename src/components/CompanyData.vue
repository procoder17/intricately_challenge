<template>
  <div class="container">
    <form action="/">
      <label for="name">Company Name</label>
      <input type="text" v-model="name" name="name" placeholder="Ex; Google" required />
      <p v-if="name.length === 0" class="error">Name is required.</p>

      <label for="spend">Company Spend</label>
      <input type="number" v-model="spendValue" name="spend" placeholder="Ex; 5000" />
      <p v-if="spendValue < 0" class="error">Company Spend should be positive.</p>

      <label for="minimum">Company Spend Ability (Min, Max)</label>
      <input type="number" v-model="spendAbilityMin" name="minimum" placeholder="Ex; 1000" />
      <input type="number" v-model="spendAbilityMax" name="maximum" placeholder="Ex; 10000" />
      <p v-if="spendAbilityMin > spendAbilityMax" class="error">Max value is not able to less than Min value.</p>
      
      <label for="note">Additional Note</label>
      <textarea rows="5" readonly multiple @click="showModal = true" :value="additionalNote" />
    </form>
    <note-modal v-if="showModal" v-model="additionalNote" @close="showModal = false"></note-modal>
  </div>
</template>

<script>
import NoteModal from './NoteModal.vue';
export default {
  components: {
    NoteModal,
  },
  data () {
    return {
      name: '',
      spendValue: 0,
      spendAbilityMin: 0,
      spendAbilityMax: 0,
      additionalNote: '',
      showModal: false,
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  padding: 50px 30px;
}
input[type=text],
input[type=number] {
  width: 100%;
  padding: 6px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
}
label {
  margin-top: 10px;
}
textarea {
  width: 100%;
}
.error {
  font-size: 12px;
  color:red;
  margin: 0 0 5px 0;
}
</style>