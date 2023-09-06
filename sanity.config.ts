import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/AuthorSchema";

const config = defineConfig({
    projectId: "omhgxsgj",
    dataset: "production",
    title: "Arnav Singh",
    apiVersion: "2023-09-06",
    basePath: "/admin",
    plugins: [deskTool()], 
    schema: { types: [ project ] }
})
 
export default config;