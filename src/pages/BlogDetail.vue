<template>
    <div v-if="blog" class="blog-detail">
        <div class="detailed-heading-container">
            <h1 class="detailed-blog-heading">{{ blog.blogTitle }}</h1>
            <p class="detailed-blog-intro">{{ blog.blogIntro }}</p>
        </div>

        <div class="detailed-blog-content" v-html="enhancedContent"></div>

        <Action :blogId="blog.id" @edit="editBlog" @delete="deleteBlog" />
    </div>

    <div v-else>
        <p>Loading blog...</p>
    </div>
</template>

<script>
import { htmlExtractor } from "../helper/htmlextractor.js";
import Action from "../components/Action.vue"; // Correct import

export default {
    name: "BlogDetail",
    components: {
    Action, // Register Action Component
    },
    data() {
    return {
        blog: null,
    };
    },
    created() {
    this.fetchBlog();
    },
    computed: {
    enhancedContent() {
        return htmlExtractor(this.blog?.blogContent || "");
    },
    },
    methods: {
    async fetchBlog() {
        const blogId = this.$route.params.id;
        try {
        const response = await fetch(`https://67712bc72ffbd37a63ce6020.mockapi.io/blog/${blogId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.blog = await response.json();
        } catch (error) {
        console.error("Error fetching blog:", error);
        }
    },
    editBlog() {
        // Navigate to the edit page with the current blog ID
        this.$router.push({ name: "EditBlog", params: { id: this.blog.id } });
    },
    async deleteBlog() {
        if (confirm("Are you sure you want to delete this blog?")) {
        try {
            const response = await fetch(`https://67712bc72ffbd37a63ce6020.mockapi.io/blog/${this.blog.id}`, {
            method: "DELETE",
            });
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            alert("Blog deleted successfully!");
            this.$router.push("/blog"); // Navigate back to the blog list
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
        }
    },
    },
};
</script>

<style src="../assets/blogdetail.css"></style>
