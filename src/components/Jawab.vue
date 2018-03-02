<template>
  <div class="hai outer-tray">
    <transition name="pudar" appear mode="out-in">
      <div class="inner-tray">
          <div id="lembarjawab">
            <p class="sapa">Sebenernya kamu tau ga?</p>
            <p class="intro">Sebenernya udah pengen nanya sejak lama sih...
              dan lagi, sebenernya aku juga bertanya-tanya, apa perlu aku bertanya.</p>
            <router-link tag="button" to="/hasil?y" id="yes">Tau Kok</router-link>
            <router-link tag="button" to="/hasil?n" id="no">Ga Tau</router-link>
            <router-link tag="button" to="/hasil?c" id="confuse">Ga Paham yang Ditanyain Apa</router-link>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Jawab',
  data () {
    return {
      awal: true
    }
  }
}
</script>

<style>
#yes {
  background-color: var(--main-blue);
}
#no {
  background-color: var(--main-red);
}
#confuse {
  background-color: var(--main-yellow);
}
</style>
