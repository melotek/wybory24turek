import HomeContent from "@/components/_pages/home/content";
import useSWR from "swr";

const fetcher = (query: string) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

type Data = {
  users: {
    name: string;
  }[];
};

export default function Index() {


  return (
    
    <div>
      <HomeContent/>
     
    </div>
  );
}
