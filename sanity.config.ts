import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import author from "./sanity/schemas/AuthorSchema";
import project from "./sanity/schemas/ProjectSchema";
import blockContent from './sanity/schemas/blockContent';
import ProjectType from "./sanity/schemas/ProjectType";
import gist from "./sanity/schemas/gist";
import { visionTool } from "@sanity/vision"

const config = defineConfig({
    projectId: "omhgxsgj",
    dataset: "production",
    title: "Arnav Singh",
    apiVersion: "2023-09-06",
    basePath: "/admin",
    plugins: [
        deskTool(),
        visionTool(),
    ], 
    schema: { types: [ 
        author, 
        project, 
        ProjectType, 
        blockContent,
        gist
     ] }
})
 
export default config;