<script setup></script>
<template>
  <!-- Main Content -->
  <div class="basis-full">
    <div class="flex flex-col tracking-[.05em]">
      <span class="text-[50pt] font-bold leading-[.3em] text-orange">*</span>
      <span class="text-[25pt]/9 font-bold text-mainText">ethan mooney</span>
      <span class="text-[18pt]/7 font-semibold italic text-orange"
        >software engineer</span
      >
      <span class="font-regular text-[18pt]/7 text-blue">photographer</span>
      <span class="text-[18pt]/7 font-semibold text-mainText">coffee fan</span>
    </div>
    <div class="h-[3rem]"></div>
    <div class="text-[18pt] leading-[1.25em]">
      currently @<span class="text-blue">googlemaps</span>, improving the
      navigation experience one pixel at a time- all to get you where you need
      to go
      <span class="italic text-orange">faster, safer, and more reliably</span>
    </div>
    <div class="h-[3rem]"></div>
    <div class="text-[18pt] leading-[1.25em]">
      find me on the internet
      <span class="font-semibold"> @ethanimooney</span>
    </div>
    <div class="flex flex-row flex-wrap gap-4 sm:flex-nowrap">
      <div class="inline-block text-[16pt] font-bold">
        <span class="align-sub text-[25pt] text-orange">*</span>
        <span class="italic text-orange hover:text-[16pt] hover:text-blue"
          ><a href="https://www.instagram.com/ethanimooney">instagram</a></span
        >
      </div>
      <div class="inline-block text-[16pt] font-bold">
        <span class="align-sub text-[25pt] text-blue">*</span>
        <span class="italic text-blue hover:text-[16pt] hover:text-mainText"
          ><a href="https://www.linkedin.com/in/ethanimooney">linkedin</a></span
        >
      </div>
      <div class="inline-block text-[16pt] font-bold">
        <span class="align-sub text-[25pt]">*</span>
        <span class="italic hover:text-[16pt] hover:text-orange"
          ><a href="https://www.github.com/ethanimooney">github</a></span
        >
      </div>
    </div>
    <div class="h-[3rem]"></div>
    <div class="text-[18pt]">
      take a look at my <span class="text-blue">photography</span>*
    </div>
    <div class="text-[11pt] italic">*please appreciate each photo equally</div>
    <div class="text-[11pt] italic">
      **if you got that reference, we're friends now
    </div>
    <div class="h-[3rem]"></div>
  </div>
  <div class="basis-full">
    <img
      class="h-60 w-full rounded-xl object-cover"
      src="../assets/images/7.jpg" />
    <div
      class="text-right text-[16pt] font-semibold italic text-blue hover:text-mainText">
      <RouterLink to="/images">see more</RouterLink>
    </div>
  </div>
</template>
