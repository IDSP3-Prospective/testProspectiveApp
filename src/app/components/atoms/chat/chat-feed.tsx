import PostScholarship from "../../molecules/post-scholarship"
import { Chat } from "@/db/fakeDatabase"

interface ChatFeedProps {
  chatArr: Chat[]
}

export default function ChatFeed({ chatArr }: ChatFeedProps) {

  // const scholarship = db.select().from(scholarshipTable).where(eq(scholarshipTable.id, id))
  // const feed = chatArr.map(chat =>
  //     <PostScholarship id={chat.id}></PostScholarship>
  // )

  return (
    <div>

    </div>
  )
}