<template>
    <div class="action-buttons">
    <button class="edit-button" @click="routeToEdit">Edit</button>
    <button class="delete-button" @click="$emit('delete')">Delete</button>
    </div>
</template>

<script>
export default {
    name: "ActionButtons",
    props: {
    blogId: {
        type: String,
        required: true,
    },
    },
    methods: {
    routeToEdit() {
        if (this.blogId) {
        this.$router.push({ name: "EditBlog", params: { id: this.blogId } });
        } else {
        alert("Missing blogId parameter.");
        }
    },
    },
};
</script>

<style src="../assets/action.css"></style>
