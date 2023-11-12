import ScholarshipCardDescription from "@/app/components/organisms/scholarshipcarddescription"
import ScholarshipCardRequirements from "@/app/components/organisms/scholarshipcardrequirements"
import TitleBlock from "@/app/components/molecules/titleblock";
import { getScholarshipByID } from "@/app/fakedb-mid";

export default function ScholarshipPage({params}: {params: {id: string }}) {

  const requirementList = ["Indigenous", "4.0 GPA", "Canadian Citizen", "Ontario Resident"]
  const requirements = "Here Are the Requirements"

  const scholarship = getScholarshipByID(Number(params.id))

  return (
    <div className="flex flex-col justify-center place-items-center md:mt-[100px]">
      <TitleBlock 
        header={scholarship.title}
        content={scholarship.provider}
      />
      <ScholarshipCardDescription 
        title={scholarship.title}
        content={scholarship.content}
        award={scholarship.award}
        deadline={scholarship.deadline}
        src={scholarship.src}
        alt={scholarship.alt}
        href={scholarship.href}
      />
      <ScholarshipCardRequirements content={requirements} list={requirementList} />
    </div>
  )
}
