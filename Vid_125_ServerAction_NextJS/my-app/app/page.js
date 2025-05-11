import { submitAction } from "@/actions/Form";



export default function Home() {


  return (
    <div className="w-2/3 mx-auto my-14">
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input className="text-black bg-white mx-4" name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input className="text-black bg-white mx-4" name="add" id="add" type="text" />
        </div>

        <div>
      <button className="border border-white px-3">
        Submit
      </button>
        </div>

      </form>
    </div>
  );
}
