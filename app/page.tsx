import AddNew from "@/components/AddNew";
import NavBar from "@/components/Nav"
import PostBox from "@/components/PostBox";

export default function Home (){
  return(
    <>
      <NavBar/>
      <div className="flex flex-wrap">
        <PostBox/>
        <PostBox/>
        <PostBox/>
        <AddNew/>
      </div>
    </>
  );
}