<template>
  <div id="patnar-logo" class="pt-40 pb-80 gray-bg">
    <div class="container">
      <div class="row patnar-slied" ref="partnerSlider">
        <div class="col-lg-12">
          <div class="singel-patnar text-center mt-40">
            <img src="assets/images/patnar-logo/p-1.png" alt="Logo" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="singel-patnar text-center mt-40">
            <img src="assets/images/patnar-logo/p-2.png" alt="Logo" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="singel-patnar text-center mt-40">
            <img src="assets/images/patnar-logo/p-3.png" alt="Logo" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="singel-patnar text-center mt-40">
            <img src="assets/images/patnar-logo/p-4.png" alt="Logo" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="singel-patnar text-center mt-40">
            <img src="assets/images/patnar-logo/p-2.png" alt="Logo" />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="singel-patnar text-center mt-40">
            <img src="assets/images/patnar-logo/p-3.png" alt="Logo" />
          </div>
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel'; // Import Slick Carousel JS
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS

export default {
  name: "PartnerComponent",
  setup() {
    const partnerSlider = ref(null);

    onMounted(() => {
      if (partnerSlider.value) {
        $(partnerSlider.value).slick({
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 800,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    });

    return {
      partnerSlider,
    };
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
