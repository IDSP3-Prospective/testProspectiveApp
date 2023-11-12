
import ScrollScholarshipcardSimple from '@/app/components/organisms/scrollscholarshipcardsimple'
import BlockHeader2 from '@/app/components/atoms/block/block-header-2'
import { scholarshipList } from '@/app/fakedb-mid'

export default function Scholarship() {

  const listTest = scholarshipList.map(item => {
    return {
      title: item.title,
      content: item.content,
      award: item.award,
      deadline: item.deadline,
      href: item.href,
      src: item.src,
      alt: item.alt
    }
  }
)
  
  return (
    <div className="md:mt-[100px]">
      <h1 className="text-4xl font-bold text-center text-blue-900 p-2">Scholarships</h1>
      <ScrollScholarshipcardSimple list={listTest} />
    </div>
  )
}
