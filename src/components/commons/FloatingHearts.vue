<template>
  <div class="hearts-bg">
    <img
      v-for="heart in hearts"
      :key="heart.id"
      :src="heart.src"
      class="heart border border-accent rounded-md"
      :style="{
        left: `${heart.left}%`,
        width: `${heart.size}px`,
        animationDuration: `${heart.duration}s`,
        animationDelay: `${heart.delay}s`,
        '--drift': `${heart.drift}px`,
        opacity: heart.opacity
      }"
    />
  </div>
</template>

<script setup>
const modules = import.meta.glob('@/assets/bgImages/*.{png,jpg,jpeg,svg,webp,gif}', {
  eager: true,
  import: 'default'
})

const images = Object.values(modules)

const hearts = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  src: images[Math.floor(Math.random() * images.length)],
  left: Math.random() * 100,
  size: 20 + Math.random() * 40,
  duration: 8 + Math.random() * 8,
  delay: Math.random() * 8,
  drift: (Math.random() - 0.5) * 250,
  opacity: 0.5 + Math.random() * 0.5
}))
</script>

<style scoped>
.hearts-bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.heart {
  position: absolute;
  top: -80px;
  user-select: none;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    transform: translate(0, -100px) rotate(0deg);
  }

  25% {
    transform: translate(calc(var(--drift) * 0.3), 25vh) rotate(90deg);
  }

  50% {
    transform: translate(calc(var(--drift) * -0.2), 50vh) rotate(180deg);
  }

  75% {
    transform: translate(calc(var(--drift) * 0.8), 75vh) rotate(270deg);
  }

  100% {
    transform: translate(var(--drift), calc(100vh + 100px)) rotate(360deg);
  }
}
</style>
