export default async function Page({ params }) {
  const { handle } = await params

  const item = {
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
    <div className="flex flex-col justify-center items-center pt-[180px] gap-3">
      <img className="w-[10vw] h-[19vh] rounded-full" src={item.pic} alt="" />
      <span className="font-bold text-xl">@{handle}</span>
      <div className="links flex gap-5 flex-col">
        {item.links.map((item, index) => {
          return <div className=" flex gap-10 p-5 pr-15 bg-slate-300 rounded-xl " key={index}>
            <div className="font-bold text-lg">
              {item.linktxt}
            </div>
            <div>
             {item.link}
            </div>
          </div>
        })}
      </div>
    </div>
  </div>
}