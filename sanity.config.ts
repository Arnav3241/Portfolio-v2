import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "omhgxsgj",
    dataset: "production",
    title: "Arnav Singh",
    apiVersion: "2023-09-06",
    basePath: "/admin",
    plugins: [deskTool()], 
})

export default config;