<script setup>
import faceBlueBg from "../assets/face-blue-bg.svg";
</script>

<script>
export default {
  data: () => ({
    faceBlueBgUrl: "",
  }),
  created() {
    this.faceBlueBgUrl = faceBlueBg;
  },
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-spacer></v-spacer>
      <v-col :md="8" :xs="12">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="5">
              <v-img :src="faceBlueBgUrl" cover />
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col :lg="6" :md="6" :sm="12" :xs="12" fluid align-self="center">
              <span class="text-h2 text-lg-h3 font-weight-bold text-darkBlue">
                ethan mooney <br />
              </span>
              <span class="text-h4 text-lg-h4 font-weight-medium text-orange">
                web developer,
              </span>
              <span class="text-h4 text-lg-h4 font-weight-medium text-blueGray">
                designer,
              </span>
              <span class="text-h4 text-lg-h4 font-weight-medium text-green">
                photographer
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
</template>
