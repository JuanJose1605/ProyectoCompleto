
import Layout from "@/module/layout/layouts";
import Link from "next/link";



export default function Home() {

  return (
    <Layout >
     <Link href="/home">
      <button
      className=" m-5 w-full bg-blue-700 text-white p-3 rounded-md ">Ingresar</button>
    </Link>
    </Layout>
  );
}
