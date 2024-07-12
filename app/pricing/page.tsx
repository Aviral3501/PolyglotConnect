import Link from "next/link"

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <div>page</div>
    <Link href={"/"} >Home</Link>
    </>
  )
}

export default page