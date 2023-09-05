import Link from "next/link";

export default function Home() {
  return (
    <main className="grid justify-items-center pt-5">
      <h1>Nextjs 13 Application</h1>
      <article className="p-2 flex gap-3 justify-items-center">
        <Link className=" min-w-[120px] text-center bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" href={'/login'}>Login</Link>
        <Link className="min-w-[120px] text-center bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" href={'/singup'}>SingUp</Link>
      </article>
    </main>
  )
}
