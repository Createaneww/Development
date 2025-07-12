
import Image from "next/image";

export default function Home() {
  // console.log("The id is" , process.env.ID);
  // console.log("The secret is" , process.env.SECRET);
  
  return (
    <div>
      Home page
      <div>
        The id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.NEXT_PUBLIC_SECRET} AND THE NAME IS {process.env.NAME}
      </div>
    </div>
  );
}
