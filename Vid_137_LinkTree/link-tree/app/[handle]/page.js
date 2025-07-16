import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";
export default async function Page({ params }) {
  const { handle } = await params

  const client = await clientPromise;
  const db = client.db("Linktree")
  const collection = db.collection("links")


  // if handle already used , cant make another linktree with same handle name
   const item = await collection.findOne({handle: handle})
   if(!item){
    return notFound()
   }

  const item2 = {
    "_id": {
      "$oid": "68763c26e881580c94d177d0"
    },
    "links": [
      {
        "link": "parthpatel18122003@gamil.com",
        "linktxt": "Gmail"
      },
      {
        "link": "https://www.facebook.com/",
        "linktxt": "Facebook"
      },
      {
        "link": "www.x.com",
        "linktxt": "Twitter"
      }
    ],
    "handle": "Parthkesath",
    "pic": "https://images.prismic.io/turing/652ec6fefbd9a45bcec81a1f_Coder_a63a8aeefd.webp?auto=format,compress"
  }

  return <div className="min-h-screen bg-slate-700 ">
   {item &&  <div className="flex flex-col justify-center items-center pt-[180px] gap-3">
      <img className="w-[10vw] h-[19vh] rounded-full" src={item2.pic} alt="" />
      <span className="font-bold text-xl">@{handle}</span>
      <div className="links flex gap-5 flex-col">
        {item2.links.map((item2, index) => {
          return <div className="shadow-2xl flex justify-center gap-10 p-5 min-w-96  bg-slate-300 rounded-xl " key={index}>
            <Link className="font-bold text-lg" target="_blank" href={item2.link}> {item2.linktxt}
            </Link>
          </div>
        })}
      </div>
    </div>}
  </div>
}