<template>
  <div>
    <div id="hasil" :style="{backgroundColor: bgcol}" class="outer-tray">
      <transition name="pudar" appear mode="out-in">
        <div class="inner-tray" :style="{borderColor: bdcol}" style="border-style: dashed; border-width: 2px;">
          <p class="emoji" :style="{color: bdcol}">{{emoji}}</p>
          <p class="sapa jawab">{{what}}</p>
          <p class="kata">{{kata}}</p>
          <div class="button-area" :style="{backgroundColor: bdcol}">
            <button @click="kembali">Kembali</button>
            <a class="sendwa" :href="alamat" v-if="!nyasar">Kirim Jawaban | <img src="../assets/send-button.png" alt=""> </a>
          </div>
          <p class="intro" v-if="!nyasar"><b>NB: </b>Tolong klik kirim jawaban, nanti akan langsung dikirim ke WA aku. Makasih.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hasil',
  data () {
    return {
      emoji: '',
      what: '',
      kata: '',
      nganu: '',
      alamat: '',
      bgcol: '',
      bdcol: '',
      nyasar: false
    }
  },
  created () {
    this.respon()
    this.ambilAlamat()
  },
  methods: {
    respon () {
      this.nganu = this.$route.fullPath
      switch (this.nganu.slice(-1)) {
        case 'y':
          this.emoji = ':\')'
          this.what = 'Yeeey'
          this.kata = 'Jadi selama ini kamu tau? ' +
            'Aku ga pengen ngajak pacaran sih. Aku cuma pengen ngasih tau aja ' +
            'kalo aku suka sama kamu, ga dilarang kan? Haha. ' +
            'Aku harap ini ga merubah pandanganmu ke aku. ' +
            'Maaf belum ngomong langsung, mungkin nanti kalo ada kesempatan.'
          this.bgcol = 'var(--alt-blue)'
          this.bdcol = 'var(--main-blue)'
          this.nyasar = false
          break

        case 'n':
          this.emoji = ':\'('
          this.what = 'Yahhh'
          this.kata = 'Masih ga keliatan ya kalo aku suka sama kamu? ' +
            'Mungkin akunya juga sih yang payah, belum pernah ngomong langsung. ' +
            'Jadi sekarang udah tau kan? Jangan berubah ya :-)'
          this.bgcol = 'var(--main-red)'
          this.bdcol = 'var(--alt-red)'
          this.nyasar = false
          break

        case 'c':
          this.emoji = ':-S'
          this.what = 'Hmm...'
          this.kata = 'Jadi sebenernya aku mau menanyakan apakah kamu udah tau kalo ' +
            'aku suka sama kamu. Silakan klik tombol [ kembali ] dan pilih jawaban yang tersedia ' +
            'ya ;-)'
          this.bgcol = 'var(--main-yellow)'
          this.bdcol = 'var(--alt-yellow)'
          this.nyasar = false
          break

        default:
          this.emoji = 'X-('
          this.what = 'Nyasarrr'
          this.kata = 'Klik tombol [ kembali ] dan pilih jawaban yang tersedia.'
          this.bgcol = 'var(--main-black)'
          this.bdcol = 'var(--main-grey)'
          this.nyasar = true
          break
      }
    },
    ambilAlamat () {
      this.alamat = 'https://api.whatsapp.com/send?phone=6282328067393&text=Lihat%20jawabanku%20di:%20' + window.location.href
    },
    kembali () {
      window.history.back()
    }
  }
}
</script>

<style>
.emoji {
  font-family: sans-serif;
  font-size: 10em;
  margin: 0.2em auto;
}
.kata {
  font-family: var(--med-font);
  color: var(--main-white);
}
.sendwa {
  background-color: #2ecc71;
  font-family: var(--med-font);
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3em;
  filter: contrast(80%);
  margin: 0.8em;
  animation: denyut 2s forwards infinite;
  display: inline-block;
}
.sendwa:hover {
  transform: scale(1.2);
  filter: none;
  transition: all .2s ease-in-out;
}
.sendwa:active {
  filter: contrast(110%);
}
.sendwa img {
  vertical-align: text-bottom;
}
.jawab {
  color: #fff;
}

/* animasi */
@keyframes denyut {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>
