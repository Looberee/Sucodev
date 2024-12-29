<template>
    <div class="blogs">
    <div class="InputContainer">
        <input
        placeholder="Type Something"
        id="input"
        class="input-search"
        name="text"
        type="text"
        />
        <label class="labelforsearch" for="input">
        <svg class="searchIcon" viewBox="0 0 512 512">
            <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            ></path>
        </svg>
        </label>
    </div>
    <div class="blog-list" v-for="(blog, index) in blogs" :key="index">
        <Blog 
            :blogId="blog.id"
            :titleImage="blog.blogTitleImage"
            :author="blog.blogAuthor"
            :blogType="blog.blogType"
            :title="blog.blogTitle"
            :blogIntro="blog.blogIntro"
        />
    </div>
    </div>
</template>


<script>
import Blog from "../components/Blog.vue";

export default {
  name: "AppBlogs",
  components: {
    Blog,
  },
  data() {
    return {
      blogs: [], // Initialize blogs as an empty array
    };
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await fetch("https://67712bc72ffbd37a63ce6020.mockapi.io/blog");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.blogs = data; // Assign the fetched data to blogs
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },
  },
  mounted() {
    this.fetchBlogs(); // Fetch blogs when the component is mounted
  },
};
</script>

<style src="../assets/blogs.css"></style>
