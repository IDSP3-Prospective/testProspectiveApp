// Database to be implemented
import { db } from '@/db'
import { scholarship } from '@/db/schema/scholarship'
import { asc, desc } from 'drizzle-orm'

import ScrollScholarshipcardSimple from './components/organisms/scrollscholarshipcardsimple'
import BlockHeader2 from './components/atoms/block/block-header-2'

import GreetingCard from './components/organisms/greetingcard'
import { scholarshipList } from './fakedb-mid'

export default function Home() {
  
  // Fake data
  const listTest = scholarshipList.map(item => {
    return {
      title: item.title,
      content: item.content,
      award: item.award,
      deadline: item.deadline,
      href: item.details,
      src: item.src,
      alt: item.alt
    }
  }
  )

  return (
    // <div className="md:mt-[80px]">
    //   <GreetingCard />

    //   {/* Scholarship header */}
    //   <div className="flex justify-center mx-auto w-[90%]">
    //     <BlockHeader2 header="Scholarships For You" />
    //   </div>
    //     <ScrollScholarshipcardSimple list={listTest} />
    // </div>
    <main>
      <p>Check</p>
    </main>
  )
}
