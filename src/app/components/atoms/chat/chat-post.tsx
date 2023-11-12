import Link from "next/link"
import Image from "next/image"

export default function ChatPost(id: number) {

  // const scholarship = db.select().from(scholarshipTable).where(eq(scholarshipTable.id, id))

  return (
    <div className="p-2 m-auto w-2/5">

      {/* <Link href={`/scholarship/${scholarship.id}`}>
                <div>
                    <Image src={chat.media.url} alt="scholarship image"></Image>
                </div>
                <h3 className="text-2xl font-bold">{chat.name}</h3>
                <p className="m-2">{scholarship.description}</p>
            </Link> */}
    </div>
  )
}