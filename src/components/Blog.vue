<template>
    <div class="blog">
        <img v-if="titleImage" :src="titleImage" alt="Blog Image" class="blog-image" @click="routeBlogDetail"/>
        <p class="author-blog-type">
            By <span>{{ author }}</span> in <span>{{ blogType }}</span>
        </p>
        <h1 class="blog-heading" @click="routeBlogDetail">{{ title }}</h1>
        <p class="blog-introduction">{{ blogIntro }}</p>
    </div>
</template>

<script>
export default {
    name: "SingleBlog",
    props: {
        blogId: {
            type: Number,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        blogType: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        blogIntro: {
            type: String,
            required: true,
        },
        titleImage: {
            type: String,
            required: true,
        },
    },
    methods: {
        routeBlogDetail() {
            this.$router.push({ name: "BlogDetail", params: { id: this.blogId } });
        },
    },
};
</script>

<style src="../assets/blog.css"></style>
