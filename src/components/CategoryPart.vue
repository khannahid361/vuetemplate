<template>
    <section id="category-part">
        <div class="container">
            <div class="category pt-40 pb-80">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="category-text pt-40">
                            <h2>Best platform to learn everything</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                        <div class="row category-slied mt-40" ref="categorySlider">
                            <div class="col-lg-4">
                                <a href="#">
                                    <span class="singel-category text-center color-1">
                                        <span class="icon">
                                            <img src="assets/images/all-icon/ctg-1.png" alt="Icon">
                                        </span>
                                        <span class="cont">
                                            <span>Language</span>
                                        </span>
                                    </span> <!-- singel category -->
                                </a>
                            </div>
                            <div class="col-lg-4">
                                <a href="#">
                                    <span class="singel-category text-center color-2">
                                        <span class="icon">
                                            <img src="assets/images/all-icon/ctg-2.png" alt="Icon">
                                        </span>
                                        <span class="cont">
                                            <span>Business</span>
                                        </span>
                                    </span> <!-- singel category -->
                                </a>
                            </div>
                            <div class="col-lg-4">
                                <a href="#">
                                    <span class="singel-category text-center color-3">
                                        <span class="icon">
                                            <img src="assets/images/all-icon/ctg-3.png" alt="Icon">
                                        </span>
                                        <span class="cont">
                                            <span>Literature</span>
                                        </span>
                                    </span> <!-- singel category -->
                                </a>
                            </div>
                            <div class="col-lg-4">
                                <a href="#">
                                    <span class="singel-category text-center color-1">
                                        <span class="icon">
                                            <img src="assets/images/all-icon/ctg-1.png" alt="Icon">
                                        </span>
                                        <span class="cont">
                                            <span>Language</span>
                                        </span>
                                    </span> <!-- singel category -->
                                </a>
                            </div>
                            <div class="col-lg-4">
                                <a href="#">
                                    <span class="singel-category text-center color-2">
                                        <span class="icon">
                                            <img src="assets/images/all-icon/ctg-2.png" alt="Icon">
                                        </span>
                                        <span class="cont">
                                            <span>Business</span>
                                        </span>
                                    </span> <!-- singel category -->
                                </a>
                            </div>
                            <div class="col-lg-4">
                                <a href="#">
                                    <span class="singel-category text-center color-3">
                                        <span class="icon">
                                            <img src="assets/images/all-icon/ctg-3.png" alt="Icon">
                                        </span>
                                        <span class="cont">
                                            <span>Literature</span>
                                        </span>
                                    </span> <!-- singel category -->
                                </a>
                            </div>
                        </div> <!-- category slied -->
                    </div>
                </div> <!-- row -->
            </div> <!-- category -->
        </div> <!-- container -->
    </section>
</template>

<script>
    import { onMounted, ref } from 'vue';
    import $ from 'jquery'; // Import jQuery
    import 'slick-carousel'; // Import Slick Carousel JS
    import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS

    export default {
        name: 'CategoryPart',
        setup() {
            const categorySlider = ref(null);

            onMounted(() => {
                $(categorySlider.value).slick({
                    dots: false,
                    infinite: false,
                    speed: 800,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
                    nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 922,
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
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                });
            });

            return {
                categorySlider,
            };
        },
    };
</script>
