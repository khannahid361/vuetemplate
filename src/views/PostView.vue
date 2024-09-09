<template>
  <Header />
  <section
    id="page-banner"
    class="pt-105 pb-110 bg_cover"
    data-overlay="8"
    style="background-image: url(assets/images/page-banner-1.jpg)"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-banner-cont">
            <h2>Posts</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Posts
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="teachers-part" class="pt-65 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="section-title mt-50 pb-35">
            <h5>Featured Posts</h5>
            <h2>Feel The Posts</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="post in posts.data"
          :key="post.id"
          class="col-lg-3 col-sm-6"
        >
          <div class="singel-teachers mt-30 text-center">
            <router-link :to="{ name: 'postDetails', params: { id: post.id } }">
              <div class="image">
                <img src="assets/images/teachers/t-1.jpg" alt="Teachers" />
              </div>
              <div class="cont">
                <h6>{{ post.title }}</h6>
                <span>{{ post.author_name }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const posts = ref([]);

    onMounted(() => {
      axios
        .get("http://vueapiadmin.test/api/post/list")
        .then((response) => {
          console.log(response.data);
          posts.value = response.data; // Ensure this is an array
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return {
      posts,
    };
  },
};
</script>
