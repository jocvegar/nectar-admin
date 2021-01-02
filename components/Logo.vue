<template>
  <img class="NectarLogo" alt="Nectar Logo" src="/templo_blanco.png" />
</template>

<style>
.NectarLogo {
  height: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
