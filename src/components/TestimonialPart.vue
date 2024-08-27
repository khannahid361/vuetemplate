<template>
    <section id="testimonial" class="bg_cover pt-115 pb-115" data-overlay="8"
        style="background-image: url(assets/images/bg-2.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title pb-40">
                        <h5>Testimonial</h5>
                        <h2>What they say</h2>
                    </div>
                    <!-- section title -->
                </div>
            </div>
            <!-- row -->
            <div class="row testimonial-slied mt-40" ref="testimonialPart">
                <div class="col-lg-6">
                    <div class="singel-testimonial">
                        <div class="testimonial-thum">
                            <img src="assets/images/testimonial/t-1.jpg" alt="Testimonial" />
                            <div class="quote">
                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="testimonial-cont">
                            <p style="width: 28rem;">
                                Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis
                                sem nibh id elit. Duis sed odio sit amet sem nibh id elit
                                sollicitudirem
                            </p>
                            <h6>Rubina Helen</h6>
                            <span>Bsc, Engineering</span>
                        </div>
                    </div>
                    <!-- singel testimonial -->
                </div>
                <div class="col-lg-6">
                    <div class="singel-testimonial">
                        <div class="testimonial-thum">
                            <img src="assets/images/testimonial/t-2.jpg" alt="Testimonial" />
                            <div class="quote">
                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="testimonial-cont">
                            <p style="width: 28rem;">
                                Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis
                                sem nibh id elit. Duis sed odio sit amet sem nibh id elit
                                sollicitudirem
                            </p>
                            <h6>Rubina Helen</h6>
                            <span>Bsc, Engineering</span>
                        </div>
                    </div>
                    <!-- singel testimonial -->
                </div>
                <div class="col-lg-6">
                    <div class="singel-testimonial">
                        <div class="testimonial-thum">
                            <img src="assets/images/testimonial/t-3.jpg" alt="Testimonial" />
                            <div class="quote">
                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="testimonial-cont">
                            <p style="width: 28rem;">
                                Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis
                                sem nibh id elit. Duis sed odio sit amet sem nibh id elit
                                sollicitudirem
                            </p>
                            <h6>Rubina Helen</h6>
                            <span>Bsc, Engineering</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { onMounted, ref } from 'vue';
    import $ from 'jquery'; // Import jQuery
    import 'slick-carousel'; // Import Slick Carousel JS
    import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
    export default {
        name: 'TestimonialPart',
        setup() {
            const testimonialPart = ref(null);
            onMounted(() => {
                $(testimonialPart.value).slick({
                    dots: true,
                    infinite: true,
                    speed: 800,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });
            });
            return {
                testimonialPart
            }
        },
    };
</script>
<style>
    #testimonial {}

    #testimonial .section-title {
        position: relative;
        z-index: 5;
    }

    #testimonial .section-title h5,
    #testimonial .section-title h2 {
        color: #fff;
    }

    #testimonial .section-title h5::before {
        background-color: #fff;
    }

    .testimonial-slied {
        position: relative;
        z-index: 5;
    }

    .singel-testimonial {
        position: relative;
    }

    .singel-testimonial .testimonial-thum {
        position: absolute;
        display: inline-block;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .singel-testimonial .testimonial-thum img {
        border-radius: 5px;
    }

    .singel-testimonial .testimonial-thum .quote {
        position: absolute;
        right: -22px;
        top: -22px;
    }

    .singel-testimonial .testimonial-thum .quote i {
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #ffc600;
        border-radius: 50%;
        color: #07294d;
        font-size: 18px;
    }

    .singel-testimonial .testimonial-cont {
        padding-left: 140px;
    }

    .singel-testimonial .testimonial-cont p {
        color: #fff;
        padding-bottom: 32px;
    }

    .singel-testimonial .testimonial-cont h6 {
        color: #fff;
        padding-bottom: 4px;
    }

    .singel-testimonial .testimonial-cont span {
        color: #fff;
        font-size: 18px;
    }

    .testimonial-slied .slick-dots {
        text-align: center;
    }

    .testimonial-slied .slick-dots li {
        display: inline-block;
        margin-top: 15px;
    }

    .testimonial-slied .slick-dots li button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #fff;
        font-size: 0;
        padding: 0;
        border: 0;
        margin: 0 3px;
        cursor: pointer;
    }

    .testimonial-slied .slick-dots li.slick-active button {
        background-color: #ffc600;
    }
</style>