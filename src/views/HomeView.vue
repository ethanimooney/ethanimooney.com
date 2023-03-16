<script>
export default {
  data: function () {
    return {
      headerFace: "/../assets/face-blue-bg-2.png",
    };
  },
};
</script>

<script setup></script>

<template>
  <v-container fluid>
    <v-spacer></v-spacer>
    <v-col cols="4">
      <v-row>
        <v-container>
          <v-col>
            <v-img :src="headerFace" />
          </v-col>
          <v-col> </v-col>
        </v-container>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
  </v-container>
</template>
