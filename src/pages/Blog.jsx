import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import { blogPosts } from "../data/blogPosts.js";

export default function Blog() {
  return (
    <div className="page">
      <SectionLabel>Stories</SectionLabel>
      <h2>Blog</h2>
      <p className="intro">
        Recent updates from across the 41 Clubs Nepal family. Full articles
        live on the national site — each card links through to the original
        post. Club 4's own write-ups can be added here directly.
      </p>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <a
            className="blog-card"
            href={post.url}
            target="_blank"
            rel="noreferrer"
            key={post.url}
          >
            <img src={post.image} alt="" loading="lazy" />
            <div className="blog-card-body">
              <span className="blog-card-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="read-more">
                Read on 41clubs.org.np <ArrowUpRight size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
