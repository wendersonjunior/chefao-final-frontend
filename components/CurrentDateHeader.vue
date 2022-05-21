<template>
  <div class="d-flex flex-column">
    <span class="body-1 black09--text text-capitalize">
      {{ $moment().format('dddd') }}
    </span>
    <span class="text-h5 font-weight-bold black11--text mt-1">
      {{ $moment().format('D') }} de {{ $moment().format('MMMM') }}
    </span>
  </div>
</template>