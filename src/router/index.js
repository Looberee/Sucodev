import { createRouter, createWebHistory } from 'vue-router';
import BlogDetail from '../pages/BlogDetail.vue';
import AppBlogs from '../pages/Blogs.vue';
import CreateBlog from '../pages/CreateBlog.vue';

const routes = [
    {
        path: "/blog",
        name: "Blogs",
        component: AppBlogs,
    },
    {
        path: '/blog/:id',
        name: 'BlogDetail',
        component: BlogDetail,
        props: true,
    },
    {
        path: '/blog/create',
        name: 'CreateBlog',
        component: CreateBlog,
        props: true,
    },
    {
        path: "/blog/:id/edit",
        name: "EditBlog",
        component: () => import("../pages/EditBlog.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
