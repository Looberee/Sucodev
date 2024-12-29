<template>
    <div class="blog-edit">
    <h1>Edit Blog</h1>
    <form class="edit-blog-form" @submit.prevent="updateBlog">
        <div class="input-group">
            <label for="title">Title:</label>
            <input
                id="title"
                placeholder="Enter blog title..."
                type="text"
                v-model="blogTitle"
                class="input"
                required
            />
        </div>
        <div class="input-group">
            <label for="content">Content:</label>
            <textarea
                id="content"
                placeholder="Enter blog content..."
                v-model="blogContent"
                class="input"
                required
            ></textarea>
        </div>
        <div class="input-group">
            <label for="title">Blog Type:</label>
            <input
                id="type"
                placeholder="Enter blog type..."
                type="text"
                v-model="blogType"
                class="input"
                required
            />
        </div>
        <button class="update-blog-btn" type="submit">Update</button>
    </form>
    </div>
</template>

<script>
export default {
    name: "EditBlog",
    data() {
    return {
        blogId: null,
        blogTitle: "",
        blogContent: "",
        blogType: "",
    };
    },
    created() {
    this.fetchBlog();
    },
    methods: {
    async fetchBlog() {
        try {
        this.blogId = this.$route.params.id;
        const response = await fetch(`https://67712bc72ffbd37a63ce6020.mockapi.io/blog/${this.blogId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blog = await response.json();
        this.blogTitle = blog.blogTitle;
        this.blogContent = blog.blogContent;
        this.blogType = blog.blogType;
        } catch (error) {
        console.error("Error fetching blog:", error);
        }
    },
    async updateBlog() {
        try {
        const response = await fetch(`https://67712bc72ffbd37a63ce6020.mockapi.io/blog/${this.blogId}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            blogTitle: this.blogTitle,
            blogContent: this.blogContent,
            blogType: this.blogType,
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const updatedBlog = await response.json();
        console.log("Blog updated successfully:", updatedBlog);
        this.$router.push(`/blog/${this.blogId}`);
        } catch (error) {
        console.error("Error updating blog:", error);
        }
    },
    },
};
</script>

<style src="../assets/editblog.css"></style>
