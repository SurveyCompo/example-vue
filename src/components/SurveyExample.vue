<template>
  <div class="main">
    <h1 class="title">Vue.js Integration Example</h1>
    <div class="layout">
      <div class="button-group">
        <h3>Load Survey</h3>
        <button @click="setSurvey('survey1')">Remote JSON 1</button>
        <button @click="setSurvey('survey2')">Remote JSON 2</button>
        <button @click="setLocalSurveyByAttr()" >Local JSON attr</button>
        <button @click="setLocalSurveyByProp()" >Local JSON prop</button>
        <h3>API interactions</h3>
        <button @click="reset()">Reset</button>
        <button @click="goPrev()"> &#8592; Prev</button>
        <button @click="goNext()"> &#8594; Next</button>
      </div>
      <div class="survey-container">
        <survey-compo ref="surveycompo" cache="memory" :src="surveySource" />
      </div>
    </div>
  </div>
</template>

<script>
import {exampleJSON} from './example'
const surveys = {
  survey1: 'https://raw.githubusercontent.com/SurveyCompo/examples/main/examples/inputs/source.json',
  survey2: 'https://raw.githubusercontent.com/SurveyCompo/examples/main/examples/style/source.json',
  local: JSON.stringify(exampleJSON),
};
export default {
  name: 'SurveyExample',
  data() {
    return {
      surveySource: 'https://raw.githubusercontent.com/SurveyCompo/examples/main/examples/basic/source.json',
      memory: true
    }
  },
  methods: {
    setSurvey(surveyName) {
      this.surveySource = surveys[surveyName];
    },
    setLocalSurveyByAttr() {
      this.surveySource = JSON.stringify(exampleJSON);
    },
    setLocalSurveyByProp() {
      this.$refs.surveycompo.src = exampleJSON;
    },
    reset() {
      this.$refs.surveycompo.api.reset();
    },
    goNext() {
      this.$refs.surveycompo.api.goNext();
    },
    goPrev() {
      this.$refs.surveycompo.api.goPrev();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.layout {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 2rem;
  width: fit-content;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

.survey-container {
  border: 1px solid gray;
  width: 320px;
  height: 500px;
  margin-bottom: 1rem;
}

</style>
