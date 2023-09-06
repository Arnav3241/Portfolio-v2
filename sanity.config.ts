import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import author from "./sanity/schemas/AuthorSchema";
import project from "./sanity/schemas/ProjectSchema";
import blockContent from './sanity/schemas/blockContent';

const config = defineConfig({
    projectId: "omhgxsgj",
    dataset: "production",
    title: "Arnav Singh",
    apiVersion: "2023-09-06",
    basePath: "/admin",
    plugins: [deskTool()], 
    schema: { types: [ author, project, blockContent ] }
})
 
export default config;