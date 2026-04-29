import React from "react";
import Conteinar from "../Conteinar";
import Button from "../Button";

const blogPosts = [
  {
    id: 1,
    category: "SUSTAINABILITY",
    title: "With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues",
    author: "Andrew Savage",
    date: "January 16, 2024",
    image: "/src/assets/blog1.png",
  },
  {
    id: 2,
    category: null,
    title: "Hero of the Month: Respire",
    author: null,
    date: "January 10, 2024",
    image: "/src/assets/blog2.png",
  },
  {
    id: 3,
    category: null,
    title: "Lime Recaps 2023 With Its Annual 'Ride Replay'",
    author: null,
    date: "December 13, 2023",
    image: "/src/assets/blog3.png",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#1a1a1a] py-20">
      <Conteinar>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#4ade4a] text-sm font-semibold tracking-wide mb-2">
            Lime Times Blog
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Our Latest News
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full aspect-video overflow-hidden rounded-xl mb-4 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-1">
                {post.category && (
                  <p className="text-[#4ade4a] text-[11px] font-bold tracking-widest uppercase mb-2">
                    {post.category}
                  </p>
                )}

                <h3 className="text-white text-[28px] font-poppins leading-snug flex-1">
                  {post.title}
                </h3>

                {/* Date — সবসময় নিচে */}
                <p className="text-gray-400 text-sm mt-4">
                  {post.author
                    ? `by ${post.author} | ${post.date}`
                    : post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-14">
          <Button btnText={'View More'}/>
        </div>
      </Conteinar>
    </section>
  );
};

export default Blog;