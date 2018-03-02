<template>
  <div class="hai outer-tray">
    <transition name="pudar" appear mode="out-in">
      <div class="inner-tray">
        <div v-if="hai" id="image">
          <img id="mick" src="../assets/mick.png" alt="mickey">
        </div>
        <p class="sapa">Hai manis, ketemu lagi...</p>
        <p class="intro">Saat kamu melihat ini, aku sudah mengumpulkan
          keberanian untuk menanyakan suatu hal. Saat siap, klik tombol
          <b>Selanjutnya</b> ya! ;-D
        </p>
        <router-link tag="button" to="/jawab">Selanjutnya</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Hai',
  data () {
    return {
      hai: true,
      halo: true,
      timer: null
    }
  },
  mounted () {
    this.mulai()
  },
  methods: {
    mulai: function () {
      this.timer = setInterval(this.tampilPesan, 2500)
    },
    tampilPesan () {
      this.halo = !this.halo
    }
  }
}
</script>

<style>
/* styling */
.hai {
  background-color: #fff;
}
.hai>.inner-tray {
  border: var(--border-inner) var(--main-grey);
}
.sapa {
  font-family: var(--big-font);
  font-size: 2em;
}
#image {
  width: 12em;
  height: 12em;
  border-radius: 50%;
  background-color: #fff;
  margin: 3em auto;
  border: 2px solid var(--main-red);
  overflow: hidden;
  padding: 2em;
}
#mick {
  width: 10em;
}
.intro {
  font-family: var(--med-font);
  color: var(--main-grey);
}

/* animasi */
#image #mick {
  transform-origin: center center;
  animation: goyangkan 2s ease-in-out forwards infinite;
}
@keyframes goyangkan {
  0%    {transform: rotate(10deg)}
  50%   {transform: rotate(-5deg)}
  100%  {transform: rotate(10deg)}
}
</style>
