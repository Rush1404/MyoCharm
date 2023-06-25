import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">Learn How AI at Myocharm is Transforming Healthcare</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={blog01} date="June 24, 2023" text="What is Muscular Dystropy, Myopathy and Neutropathy?" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="June 24, 2023" text="Our Spectrogram and Wave Analysis With Keras and Tensorflow" />
        <Article imgUrl={blog03} date="June 24, 2023" text="Global Youth at Wafflehacks 2023 Create AI Medical Solutions" />
        <Article imgUrl={blog04} date="June 24, 2023" text="Explore How MyoCharm is a leader in AI Corporate Social Responsbility" />
        <Article imgUrl={blog05} date="June 24, 2023" text="Find Out How MyoCharm's Solutions are Revolutionising Healthcare" />
      </div>
    </div>
  </div>
);

export default Blog;