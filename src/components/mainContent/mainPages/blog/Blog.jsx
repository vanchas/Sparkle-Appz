import React from 'react';
import s from './blog.module.scss';
import BlogHeader from './BlogHeader';
import BlogArticles from './BlogArticles';

function Blog() {
  return (
    <div className={s.blog_wrapper}>
      <BlogHeader />
      <BlogArticles />
    </div>
  );
}

export default Blog;
