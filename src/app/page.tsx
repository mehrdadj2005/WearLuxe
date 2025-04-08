"use client";

import { Typography } from "@mui/material";

// also this hook have for react-query (useMutation)
import { useQuery } from "@tanstack/react-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default function Home() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <Typography variant="h1">WearLuxe</Typography>
      {data?.map((post, key) => {
        return (
          <div key={key} className="max-w-2/3">
            <Typography variant="h6">Title: {post.title}</Typography>
            <p>Body: {post.body}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
