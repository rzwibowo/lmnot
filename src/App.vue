<template>
  <div id="app">
    <router-view/>
    <img src="./assets/flower.png"
      alt="bunga"
      class="flw"
      v-for="kembang in kembangs"
      :key="kembang.id"
      :style="{width: kembang.width, top: kembang.top, left: kembang.left}">
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.makeProp()
  },
  data () {
    return {
      n: 0,
      id: '',
      top: '',
      left: '',
      width: '',
      kembangs: []
    }
  },
  methods: {
    makeProp () {
      for (this.n = 0; this.n < 17; this.n++) {
        this.id = this.n
        this.top = Math.floor((Math.random() * 80) + 1) + 'vh'
        this.left = Math.floor((Math.random() * 90) + 1) + 'vw'
        this.width = Math.floor((Math.random() * 5) + 1) + 'em'
        this.kembangs.push({id: this.id, top: this.top, left: this.left, width: this.width})
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
@import url('https://fonts.googleapis.com/css?family=Concert+One');
html {
  background-color: var(--main-white);
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
:root {
  --big-font: 'Pacifico', cursive;
  --med-font: 'Concert One', cursive;
  --main-black: #2c3e50;
  --main-white: #ecf0f1;
  --main-grey: #95a5a6;
  --main-red: #e74c3c;
  --alt-red: #c0392b;
  --main-yellow: #f1c40f;
  --alt-yellow: #e67e22;
  --main-blue: #2980b9;
  --alt-blue: #3498db;
  --box-shd-idle: 0px 3px 0px;
  --box-shd-hover: 0px 5px 0px;
  --border-inner: 2px dashed;
}
button {
  font-family: var(--med-font);
  background-color: var(--main-black);
  color: var(--main-white);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3em;
  box-shadow: var(--box-shd-idle) var(--main-grey);
  filter: contrast(80%);
  margin: 0.8em;
}
button:hover {
  transform: translateY(-2px);
  box-shadow: var(--box-shd-hover) var(--main-grey);
  filter: none;
  transition: all .2s ease-in-out;
}
button:active {
  box-shadow: none;
  transform: translateY(5px);
}
.flw {
  position: absolute;
  animation: muter 15s linear forwards infinite;
  filter: opacity(30%);
  z-index: -1;
}
.outer-tray {
  border-radius: 15px;
  padding: 1em;
  width: 50vw;
  margin: auto;
}
@media (max-width: 768px){
  .outer-tray {
    width: 80vw;
  }
}
.inner-tray {
  border-radius: 10px;
  padding: 0.5em;
  margin: auto;
}
.button-area {
  width: fit-content;
  margin: auto;
  border-radius: 10px;
}

/* transisi, animasi */
.pudar-enter-active, .pudar-leave-active {
  transition: opacity .5s;
}
.pudar-enter, .pudar-leave-to {
  opacity: 0;
}
@keyframes muter {
  0%    {transform: rotate(0deg)}
  100%  {transform: rotate(360deg)}
}
</style>
