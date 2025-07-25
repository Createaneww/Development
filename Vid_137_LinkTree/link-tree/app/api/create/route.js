import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()

  const client = await clientPromise;
  const db = client.db("Linktree")
  const collection = db.collection("links")


  // if handle already used , cant make another linktree with same handle name
   const doc = await collection.findOne({handle: body.handle})

    if (doc){
      return Response.json({ success: false, error: true, message: 'This Bittree already exists!' })
    }

    const result = await collection.insertOne(body)
     
    return Response.json({ success: true, error: false, message: 'Your Bittree has been generated!', result: result,  })
  }