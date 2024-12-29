<template>
    <div class="blog-create">
        <h1>Create a New Blog</h1>
        <form class="create-blog-form" @submit.prevent="createBlog">
            <div class="input-group">
                <label for="title">Title:</label>
                <input 
                    placeholder="Title..." 
                    type="text" 
                    name="text" 
                    v-model="blogTitle" 
                    class="input"
                />
                <span v-if="errors.blogTitle" class="error">{{ errors.blogTitle }}</span>
            </div>
            <div class="input-group">
                <label for="content">Content:</label>
                <textarea 
                    id="content" 
                    placeholder="Content..." 
                    type="text" 
                    name="text" 
                    class="input" 
                    v-model="blogContent"
                ></textarea>
                <span v-if="errors.blogContent" class="error">{{ errors.blogContent }}</span>
            </div>
            <div class="input-group">
                <label for="title">Blog Type:</label>
                <input 
                    placeholder="Blog Type..." 
                    type="text" 
                    name="text" 
                    v-model="blogType" 
                    class="input"
                />
                <span v-if="errors.blogTitle" class="error">{{ errors.blogTitle }}</span>
            </div>
            <button class="create-blog-btn" type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogTitle: "",
            blogIntro: "",
            blogContent: "",
            blogTitleImage: "",
            blogAuthor: "",
            blogType: "",
            errors: {}, // Object to store error messages
        };
    },
    methods: {
        validateInputs() {
            this.errors = {}; // Clear previous errors

            if (!this.blogTitle.trim()) {
                this.errors.blogTitle = "Please enter a title.";
            }
            if (!this.blogContent.trim()) {
                this.errors.blogContent = "Please enter the blog content.";
            }
            if (!this.blogType.trim()) {
                this.errors.blogContent = "Please enter the blog type.";
            }

            return Object.keys(this.errors).length === 0; // Return true if no errors
        },
        async createBlog() {
            if (!this.validateInputs()) {
                return; // Stop if validation fails
            }

            try {
                const response = await fetch("https://67712bc72ffbd37a63ce6020.mockapi.io/blog", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        blogTitle: this.blogTitle,
                        blogIntro: "A brief guide to setting up a mock API for your blog.",
                        blogContent: this.blogContent,
                        blogTitleImage: "https://th.wallhaven.cc/small/zy/zywwky.jpg",
                        blogAuthor: "Jane Doe",
                        blogType: this.blogType,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Blog created successfully:", data);
                this.$router.push("/blog");
            } catch (error) {
                console.error("Error creating blog:", error);
            }
        },
    },
};
</script>

<style src="../assets/createblog.css"></style>