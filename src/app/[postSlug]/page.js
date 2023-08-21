import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import CodeSnippet from "@/components/CodeSnippet";

export async function generateMetadata({ params }) {
	const post = await loadBlogPost(params.postSlug);
	const { title, abstract } = post.frontmatter;

	return {
		title: title,
		description: abstract,
	};
}

async function BlogPost({ params }) {
	const post = await loadBlogPost(params.postSlug);
	const { title, publishedOn } = post.frontmatter;

	return (
		<article className={styles.wrapper}>
			<BlogHero title={title} publishedOn={publishedOn} />
			<div className={styles.page}>
				<MDXRemote
					source={post.content}
					components={{
						pre: CodeSnippet,
					}}
				/>
			</div>
		</article>
	);
}

export default BlogPost;
