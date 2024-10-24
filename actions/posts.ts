"use server";

import { handleError } from "@/lib/utils";

export async function getPosts() {
    const api = "https://jsonplaceholder.typicode.com/posts";

    try{
        const response = await fetch(api);
        const posts = await response.json();

        return posts;
    }catch(error){
        handleError(error);
    }    
}

export async function getPost(id: string){
    const api = `https://jsonplaceholder.typicode.com/posts/${id}`

    try{
        const response = await fetch(api);
        const post = await response.json();

        return post;
    }catch(error){
        handleError(error);
    }
}