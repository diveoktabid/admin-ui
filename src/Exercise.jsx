import React from "react";
import PostCard from "./PostCard";
import { postsData } from "./postsData";

const Exercise = () => {
  return (
    <div className="min-h-screen bg-special-mainBg p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-red-600 mb-8 text-center">
          Post Cards
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {postsData.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercise;