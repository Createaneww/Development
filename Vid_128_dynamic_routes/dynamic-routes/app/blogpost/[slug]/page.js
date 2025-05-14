export default async function Page({ params }) {
  const { slug } = await params
let languages = ["cpp" , "python" , "java" , "c#" , "rust" , "c"]
if(languages.includes(params.slug)){
return <div>My Post: {slug}</div>
}
else{
    return <div>Post not found</div>
}
}
