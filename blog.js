function createBlogBlock(block) {
  if (block.type === "heading") {
    const heading = document.createElement("h3");
    heading.innerHTML = block.text;
    return heading;
  }

  if (block.type === "list") {
    const list = document.createElement("ul");

    block.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = item;
      list.appendChild(listItem);
    });

    return list;
  }

  if (block.type === "image") {
    const figure = document.createElement("figure");
    figure.className = "blog-post-image";

    const image = document.createElement("img");
    image.src = block.src;
    image.alt = block.alt;
    image.loading = "lazy";

    figure.appendChild(image);

    if (block.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = block.caption;
      figure.appendChild(caption);
    }

    return figure;
  }

  const paragraph = document.createElement("p");
  paragraph.innerHTML = block.text;
  return paragraph;
}

function createBlogPost(post) {
  const article = document.createElement("article");
  article.className = "blog-post";

  const meta = document.createElement("time");
  meta.className = "blog-post-date";
  meta.dateTime = post.dateTime;
  meta.textContent = post.dateLabel;

  const title = document.createElement("h2");
  title.textContent = post.title;

  const summary = document.createElement("p");
  summary.className = "blog-post-summary";
  summary.textContent = post.summary;

  const content = document.createElement("div");
  content.className = "blog-post-content";
  post.body.forEach((block) => content.appendChild(createBlogBlock(block)));

  article.append(meta, title, summary, content);
  return article;
}

function renderBlog() {
  const language = document.documentElement.lang || "de";
  const texts = window.BLOG_TEXTS[language] || window.BLOG_TEXTS.de;
  const titleTarget = document.querySelector("[data-blog-title]");
  const postsTarget = document.querySelector("[data-blog-posts]");

  if (!postsTarget) {
    return;
  }

  if (titleTarget) {
    titleTarget.textContent = texts.pageTitle;
  }

  postsTarget.replaceChildren(...texts.posts.map(createBlogPost).reverse());
}

document.addEventListener("DOMContentLoaded", renderBlog);
