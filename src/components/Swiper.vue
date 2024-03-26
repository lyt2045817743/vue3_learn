<template>
  <div class="carousel">
    <div class="imagesBox" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="image">
        <img src="" />
      </div>
    </div>

    <button @click="nextImage" class="nav-button">&lt;</button>
    <button @click="prevImage" class="nav-button">&gt;</button>

    <div class="indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToImage(index)"
        :class="{ active: index === currentIndex }"
        class="indicator"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  autoPlay: Boolean,
  images: String[],
});

const currentIndex = ref(0);
let timer;

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const goToImage = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  timer = setInterval(nextimage, 3000); // 自动播放间隔时间，单位毫秒
};

const stopAutoPlay = () => {
  clearInterval(timer);
  timer = null;
};

watch(() => props.autoPlay, (newVal) => {
  if (newVal) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
});

onMounted(() => {
  if (props.autoPlay) {
    startAutoPlay();
  }
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.imagesBox {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.image {
  flex: 0 0 100%;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicator {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background-color: #333;
}
</style>
