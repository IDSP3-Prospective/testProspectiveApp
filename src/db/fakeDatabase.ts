import { type } from "@/db/schema/comments"
import { mediaType } from "@/db/schema/media"
import { incomeClass } from "@/db/schema/requirements"
import { awardType } from "@/db/schema/scholarship"
import { booleanType } from "@/db/schema/user-scholarship"

export type Disability = {
  id: number
  disability: string
}

export type Ethnicity = {
  id: number
  ethnicity: string
}

export type Field = {
  id: number
  field: string
}

export type LevelOfEducation = {
  id: number
  levelOfEducation: string
}

export type Religion = {
  id: number
  religion: string
}

export type Institution = {
  id: number
  institution: string
}

export type Sport = {
  id: number
  sport: string
}

export type YearOfStudy = {
  id: number
  yearOfStudy: number
}

export type Chat = {
  id: number
  name: string
  updatedAt: Date
}

export type ChatUser = {
  id: number
  chatId: number
  userId: number
}

export type ChatMessages = {
  id: number
  chatId: number
  messagesId: number
}

export type Comments = {
  id: number
  parentPostId: number
  parentPostType: type
  comment: string
  like: number
  dislike: number
  createdAt: Date
  userId: number
  type: type
  mediaId: number
}

export type Media = {
  id: number
  mediaType: mediaType
  url: string
  width: number
  height: number
}
export type Messages = {
  id: number
  text: string
  createdAt: Date
  userId: number
  isChatGpt: number
}

export type Requirements = {
  id: number
  incomeClass: incomeClass
  gpa: number
  grade: number
}

export type RequirementsLevelOfEducation = {
  id: number
  requirementsId: number
  levelOfEducationId: number
}

export type RequirementsYearOfStudy = {
  id: number
  requirementsId: number
  YearOfStudyId: number
}

export type RequirementsField = {
  id: number
  requirementsId: number
  fieldId: number
}

export type RequirementsSchool = {
  id: number
  requirementsId: number
  schoolId: number
}

export type RequirementsEthnicity = {
  id: number
  requirementsId: number
  ethnicityId: number
}

export type RequirementsReligion = {
  id: number
  requirementsId: number
  religionId: number
}

export type RequirementsDisability = {
  id: number
  requirementsId: number
  disabilityIdId: number
}

export type RequirementsSport = {
  id: number
  requirementsId: number
  sportId: number
}

export type Reviews = {
  id: number
  review: string
  like: number
  dislike: number
  userId: number
  scholarshipId: number
  createdAt: Date
  type: type
  mediaId: number
}

export type Scholarship = {
  id: number
  name: string
  sourceId: number
  description: string
  amount: number
  deadline: Date
  link: string
  award: awardType
  requirementsId: number
  mediaId: number
}
export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  tuitionCost: number
  profilePicId: number
  requirementsId: number
}

export type UserScholarship = {
  id: number
  userId: number
  scholarshipId: number
  scholarshipSaved: booleanType
  scholarshipApplied: booleanType
}

export const disabilities: Disability[] = [
  {
    id: 1,
    disability: "ADHD",
  },
  {
    id: 2,
    disability: "Down Syndrome",
  },
]

export const ethnicity: Ethnicity[] = [
  {
    id: 1,
    ethnicity: "african american",
  },
  {
    id: 2,
    ethnicity: "caucasian",
  },
  {
    id: 3,
    ethnicity: "asian",
  },
  {
    id: 4,
    ethnicity: "aboriginal",
  },
]

export const field: Field[] = [
  {
    id: 1,
    field: "science",
  },
  {
    id: 2,
    field: "engineering",
  },
  {
    id: 3,
    field: "business",
  },
]

export const levelOfEducation: LevelOfEducation[] = [
  {
    id: 1,
    levelOfEducation: "highschool",
  },
  {
    id: 2,
    levelOfEducation: "college",
  },
  {
    id: 3,
    levelOfEducation: "university",
  },
  {
    id: 4,
    levelOfEducation: "grad school",
  },
  {
    id: 5,
    levelOfEducation: "masters",
  },
  {
    id: 6,
    levelOfEducation: "phd",
  },
]


export const religion: Religion[] = [
  {
    id: 1,
    religion: "christian",
  },
  {
    id: 2,
    religion: "muslim",
  },
  {
    id: 3,
    religion: "jewish",
  },
  {
    id: 4,
    religion: "buddhist",
  },
]


export const institution: Institution[] = [
  {
    id: 1,
    institution: "British Columbia School of Institute",
  },
  {
    id: 2,
    institution: "University of British Columbia",
  },
]

export const sport: Sport[] = [
  {
    id: 1,
    sport: "basketball",
  },
  {
    id: 2,
    sport: "football",
  },
  {
    id: 3,
    sport: "soccer",
  },
  {
    id: 4,
    sport: "volleyball",
  },
]

export const yearOfStudy: YearOfStudy[] = [
  {
    id: 1,
    yearOfStudy: 1,
  },
  {
    id: 2,
    yearOfStudy: 2,
  },
  {
    id: 3,
    yearOfStudy: 3,
  },
  {
    id: 4,
    yearOfStudy: 4,
  },
]


export const chats: Chat[] = [
  {
    id: 1,
    name: "IDSP",
    updatedAt: new Date(2023, 9, 4),
  },
  {
    id: 2,
    name: "FSWD",
    updatedAt: new Date(2023, 9, 4),
  },
  {
    id: 3,
    name: "Web Design",
    updatedAt: new Date(2023, 9, 4),
  },
]

export const chatUser: ChatUser[] = [
  {
    id: 1,
    chatId: 1,
    userId: 1
  },
  {
    id: 2,
    chatId: 1,
    userId: 2
  },
  {
    id: 3,
    chatId: 1,
    userId: 3
  },
  {
    id: 4,
    chatId: 1,
    userId: 4
  },
  {
    id: 5,
    chatId: 1,
    userId: 5
  },
  {
    id: 6,
    chatId: 1,
    userId: 6
  },
  {
    id: 7,
    chatId: 1,
    userId: 7
  },
  {
    id: 8,
    chatId: 1,
    userId: 8
  },
  {
    id: 9,
    chatId: 2,
    userId: 1
  },
  {
    id: 10,
    chatId: 2,
    userId: 2
  },
  {
    id: 11,
    chatId: 2,
    userId: 3
  },
  {
    id: 12,
    chatId: 2,
    userId: 4
  },
  {
    id: 13,
    chatId: 3,
    userId: 5
  },
  {
    id: 13,
    chatId: 3,
    userId: 6
  },
  {
    id: 13,
    chatId: 3,
    userId: 7
  },
  {
    id: 13,
    chatId: 3,
    userId: 8
  },
]

export const chatMessages: ChatMessages[] = [
  {
    id: 1,
    chatId: 1,
    messagesId: 1
  },
  {
    id: 2,
    chatId: 1,
    messagesId: 2
  },
  {
    id: 3,
    chatId: 2,
    messagesId: 3
  },
  {
    id: 4,
    chatId: 2,
    messagesId: 4
  },
  {
    id: 1,
    chatId: 3,
    messagesId: 5
  },
  {
    id: 1,
    chatId: 3,
    messagesId: 6
  },
]

export const comments: Comments[] = [
  {
    id: 1,
    parentPostId: 1,
    parentPostType: "review",
    comment: "lorem ipsum",
    like: 1,
    dislike: 1,
    createdAt: new Date(2023, 9, 4),
    userId: 1,
    type: "review",
    mediaId: 1,
  },
  {
    id: 2,
    parentPostId: 1,
    parentPostType: "comment",
    comment: "Comment on Comment(nested)",
    like: 0,
    dislike: 0,
    createdAt: new Date(2023, 9, 4),
    userId: 2,
    type: "comment",
    mediaId: 2,

  },
  {
    id: 3,
    parentPostId: 2,
    parentPostType: "comment",
    comment: "@userId: 2, Reply Comment",
    like: 0,
    dislike: 0,
    createdAt: new Date(2023, 9, 4),
    userId: 3,
    type: "comment",
    mediaId: 15,


  },
  {
    id: 4,
    parentPostId: 3,
    parentPostType: "comment",
    comment: "@userId: 3, Reply to reply Comment",
    like: 0,
    dislike: 0,
    createdAt: new Date(2023, 9, 4),
    userId: 2,
    type: "comment",
    mediaId: 2,
  },

]

export const media: Media[] = [
  {
    id: 1,
    mediaType: "image",
    url: "https://picsum.photos/seed/picsum/500/500",
    width: 200,
    height: 300
  },
  {
    id: 2,
    mediaType: "video",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 3,
    mediaType: "gif",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 4,
    mediaType: "image",
    url: "https://picsum.photos/seed/picsum/500/500",
    width: 200,
    height: 300
  },
  {
    id: 5,
    mediaType: "video",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 6,
    mediaType: "gif",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 7,
    mediaType: "image",
    url: "https://picsum.photos/seed/picsum/500/500",
    width: 200,
    height: 300
  },
  {
    id: 8,
    mediaType: "video",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 9,
    mediaType: "gif",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 10,
    mediaType: "image",
    url: "https://picsum.photos/seed/picsum/500/500",
    width: 200,
    height: 300
  },
  {
    id: 11,
    mediaType: "video",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 12,
    mediaType: "gif",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 13,
    mediaType: "image",
    url: "https://picsum.photos/seed/picsum/500/500",
    width: 200,
    height: 300
  },
  {
    id: 14,
    mediaType: "video",
    url: "url",
    width: 200,
    height: 300
  },
  {
    id: 15,
    mediaType: "gif",
    url: "url",
    width: 200,
    height: 300
  },
]
export const messages: Messages[] = [
  {
    id: 1,
    text: "Hey ready for IDSP",
    createdAt: new Date(2023, 9, 4),
    userId: 1,
    isChatGpt: 1
  },
  {
    id: 2,
    text: "Yea excited",
    createdAt:  new Date(2023, 9, 4),
    userId: 7,
    isChatGpt: 2
  },
  {
    id: 3,
    text: "Design Lorem Ipsum",
    createdAt:  new Date(2023, 9, 4),
    userId: 5,
    isChatGpt: 1
  },
  {
    id: 4,
    text: "Lorem Ipsum",
    createdAt:  new Date(2023, 9, 4),
    userId: 8,
    isChatGpt: 1
  },
  {
    id: 5,
    text: "FSWD Lorem Ipsum",
    createdAt:  new Date(2023, 9, 4),
    userId: 2,
    isChatGpt: 2
  },
  {
    id: 6,
    text: "Lorem Ipsum",
    createdAt: new Date(2023, 9, 4),
    userId: 3,
    isChatGpt: 1
  },
]

export const requirements: Requirements[] = [
  {
    id: 1,
    incomeClass: "low",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 2,
    incomeClass: "low",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 3,
    incomeClass: "middle",
    grade: 70,
    gpa: 3.0,
  },
  {
    id: 4,
    incomeClass: "low",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 5,
    incomeClass: "middle",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 6,
    incomeClass: "middle",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 7,
    incomeClass: "high",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 8,
    incomeClass: "high",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 9,
    incomeClass: "low",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 10,
    incomeClass: "low",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 11,
    incomeClass: "low",
    grade: 86,
    gpa: 4.0,
  },
  {
    id: 12,
    incomeClass: "high",
    grade: 86,
    gpa: 4.0,
  },
]

export const requirementsLevelOfEducation: RequirementsLevelOfEducation[] = [
  {
    id: 1,
    requirementsId: 1,
    levelOfEducationId: 3
  },
  {
    id: 2,
    requirementsId: 2,
    levelOfEducationId: 2
  },
  {
    id: 3,
    requirementsId: 3,
    levelOfEducationId: 3
  },
  {
    id: 4,
    requirementsId: 4,
    levelOfEducationId: 3
  },
  {
    id: 5,
    requirementsId: 5,
    levelOfEducationId: 4
  },
  {
    id: 6,
    requirementsId: 6,
    levelOfEducationId: 1
  },
  {
    id: 7,
    requirementsId: 7,
    levelOfEducationId: 5
  },
  {
    id: 8,
    requirementsId: 8,
    levelOfEducationId: 3
  },
  {
    id: 9,
    requirementsId: 9,
    levelOfEducationId: 2
  },
  {
    id: 10,
    requirementsId: 9,
    levelOfEducationId: 3
  },
  {
    id: 11,
    requirementsId: 9,
    levelOfEducationId: 4
  },
  {
    id: 12,
    requirementsId: 10,
    levelOfEducationId: 5
  },
  {
    id: 13,
    requirementsId: 10,
    levelOfEducationId: 6
  },
  {
    id: 14,
    requirementsId: 11,
    levelOfEducationId: 3
  },
  {
    id: 15,
    requirementsId: 12,
    levelOfEducationId: 2
  },
]
export const requirementsYearOfStudy: RequirementsYearOfStudy[] = [
  {
    id: 1,
    requirementsId: 2,
    YearOfStudyId: 3,
  },
  {
    id: 2,
    requirementsId: 2,
    YearOfStudyId: 2,
  },
  {
    id: 3,
    requirementsId: 3,
    YearOfStudyId: 4,
  },
  {
    id: 4,
    requirementsId: 4,
    YearOfStudyId: 1,
  },
  {
    id: 5,
    requirementsId: 5,
    YearOfStudyId: 4,
  },
  {
    id: 6,
    requirementsId: 6,
    YearOfStudyId: 3,
  },
  {
    id: 7,
    requirementsId: 7,
    YearOfStudyId: 3,
  },
  {
    id: 8,
    requirementsId: 8,
    YearOfStudyId: 2,
  },

  {
    id: 9,
    requirementsId: 10,
    YearOfStudyId: 4,
  },
  {
    id: 10,
    requirementsId: 11,
    YearOfStudyId: 2,
  },
  {
    id: 11,
    requirementsId: 12,
    YearOfStudyId: 1,
  },
  {
    id: 12,
    requirementsId: 12,
    YearOfStudyId: 2,
  },
]

export const requirementsField: RequirementsField[] = [
  {
    id: 1,
    requirementsId: 1,
    fieldId: 1,
  },
  {
    id: 2,
    requirementsId: 2,
    fieldId: 1,
  },
  {
    id: 3,
    requirementsId: 3,
    fieldId: 1,
  },
  {
    id: 4,
    requirementsId: 4,
    fieldId: 3,
  },
  {
    id: 5,
    requirementsId: 5,
    fieldId: 2,
  },
  {
    id: 6,
    requirementsId: 6,
    fieldId: 2,
  },
  {
    id: 7,
    requirementsId: 7,
    fieldId: 3,
  },
  {
    id: 8,
    requirementsId: 8,
    fieldId: 3,
  },
  {
    id: 9,
    requirementsId: 9,
    fieldId: 1,
  },
  {
    id: 10,
    requirementsId: 10,
    fieldId: 2,
  },
]

export const requirementsSchool: RequirementsSchool[] = [
  {
    id: 1,
    requirementsId: 1,
    schoolId: 1,
  },
  {
    id: 2,
    requirementsId: 2,
    schoolId: 2,
  },
  {
    id: 3,
    requirementsId: 3,
    schoolId: 1,
  },
  {
    id: 4,
    requirementsId: 4,
    schoolId: 2,
  },
  {
    id: 5,
    requirementsId: 5,
    schoolId: 1,
  },
  {
    id: 6,
    requirementsId: 6,
    schoolId: 2,
  },
  {
    id: 7,
    requirementsId: 7,
    schoolId: 1,
  },
  {
    id: 8,
    requirementsId: 8,
    schoolId: 2,
  },
  {
    id: 9,
    requirementsId: 9,
    schoolId: 1,
  },
  {
    id: 10,
    requirementsId: 10,
    schoolId: 2,
  },
]

export const requirementsEthnicity: RequirementsEthnicity[] = [
  {
    id: 1,
    requirementsId: 1,
    ethnicityId: 1,
  },
  {
    id: 2,
    requirementsId: 2,
    ethnicityId: 2,
  },
  {
    id: 4,
    requirementsId: 4,
    ethnicityId: 4,
  },
  {
    id: 6,
    requirementsId: 6,
    ethnicityId: 3,
  },
  {
    id: 12,
    requirementsId: 12,
    ethnicityId: 5,
  },
]

export const requirementsReligion: RequirementsReligion[] = [
  {
    id: 1,
    requirementsId: 2,
    religionId: 2,
  },
  {
    id: 2,
    requirementsId: 4,
    religionId: 3,
  },
  {
    id: 3,
    requirementsId: 6,
    religionId: 1,
  },
  {
    id: 4,
    requirementsId: 8,
    religionId: 1,
  },
]

export const requirementsDisability: RequirementsDisability[] = [
  {
    id: 3,
    requirementsId: 3,
    disabilityIdId: 1,
  },
  {
    id: 2,
    requirementsId: 8,
    disabilityIdId: 2,
  },
]

export const requirementsSport: RequirementsSport[] = [
  {
    id: 1,
    requirementsId: 2,
    sportId: 3,
  },
  {
    id: 2,
    requirementsId: 6,
    sportId: 4,
  },
]

export const reviews: Reviews[] = [
  {
    id: 1,
    review: "Design Lorem Ipsum",
    like: 0,
    dislike: 0,
    userId: 5,
    scholarshipId: 2,
    createdAt: new Date(2023, 8, 4),
    type: "review",
    mediaId: 0,
  },
  {
    id: 2,
    review: " More Design Lorem Ipsum",
    like: 0,
    dislike: 0,
    userId: 5,
    scholarshipId: 2,
    createdAt: new Date(2023, 8, 4),
    type: "review",
    mediaId: 13,
  },
  {
    id: 3,
    review: "Low income Lorem Ipsum",
    like: 0,
    dislike: 0,
    userId: 5,
    scholarshipId: 11,
    createdAt: new Date(2023, 8, 4),
    type: "review",
    mediaId: 14,
  },
]
export const scholarship: Scholarship[] = [
  {
    id: 1,
    name: "BCIT Design",
    sourceId: 1,
    description: "Design Lorem ipsum",
    amount: 4658.80,
    deadline: new Date(2023, 10, 2),
    link: "link",
    award: "loan",
    requirementsId: 9,
    mediaId: 1,

  },
  {
    id: 2,
    name: "BCIT FSWD",
    sourceId: 1,
    description: "FSWD Lorem ipsum",
    amount: 4658.80,
    deadline: new Date(2023, 10, 2),
    link: "link",
    award: "scholarship",
    requirementsId: 10,
    mediaId:2
  },
  {
    id: 3,
    name: "Low income",
    sourceId: 2,
    description: "Low income Lorem ipsum",
    amount: 4658.80,
    deadline: new Date(2023, 10, 2),
    link: "link",
    award: "bursary",
    requirementsId: 11,
    mediaId: 3,

  },
  {
    id: 4,
    name: "Ethnicity",
    sourceId: 2,
    description: "Ethnicity Lorem ipsum",
    amount: 4658.80,
    deadline: new Date(2023, 10, 2),
    link: "link",
    award: "grant",
    requirementsId: 12,
    mediaId: 4
  },
]
export const user: User[] = [
  {
    id: 1,
    firstName: "Gary",
    lastName: "FSWD",
    email: "test",
    username: "Gary",
    password: "Gary",
    tuitionCost: 4658.80,
    profilePicId: 5,
    requirementsId: 1,
  },
  {
    id: 2,
    firstName: "Brett",
    lastName: "FSWD",
    email: "test",
    username: "Brett",
    password: "Brett",
    tuitionCost: 4658.80,
    profilePicId: 6,
    requirementsId: 2,
  },
  {
    id: 3,
    firstName: "Royce",
    lastName: "FSWD",
    email: "test",
    username: "Royce",
    password: "Royce",
    tuitionCost: 4658.80,
    profilePicId: 7,
    requirementsId: 3,
  },
  {
    id: 4,
    firstName: "Stephane",
    lastName: "FSWD",
    email: "test",
    username: "Stephane",
    password: "Stephane",
    tuitionCost: 4658.80,
    profilePicId: 8,
    requirementsId: 4,
  },
  {
    id: 5,
    firstName: "Paul",
    lastName: "Design",
    email: "test",
    username: "Paul",
    password: "Paul",
    tuitionCost: 4658.80,
    profilePicId: 9,
    requirementsId: 5,
  },
  {
    id: 6,
    firstName: "Kushal",
    lastName: "Design",
    email: "test",
    username: "Kushal",
    password: "Kushal",
    tuitionCost: 4658.80,
    profilePicId: 10,
    requirementsId: 6,
  },
  {
    id: 7,
    firstName: "Olivia",
    lastName: "Design",
    email: "test",
    username: "Olivia",
    password: "Olivia",
    tuitionCost: 4658.80,
    profilePicId: 11,
    requirementsId: 7,
  },
  {
    id: 8,
    firstName: "Patrick",
    lastName: "Design",
    email: "test",
    username: "Patrick",
    password: "Patrick",
    tuitionCost: 4658.80,
    profilePicId: 12,
    requirementsId: 8,
  },
]

export const userScholarship: UserScholarship[] = [
  {
    id: 1,
    userId: 1,
    scholarshipId: 1,
    scholarshipSaved: "true",
    scholarshipApplied: "false"
  },
  {
    id: 2,
    userId: 1,
    scholarshipId: 3,
    scholarshipSaved: "false",
    scholarshipApplied: "true"
  },
  {
    id: 3,
    userId: 2,
    scholarshipId: 1,
    scholarshipSaved: "true",
    scholarshipApplied: "false"
  },
  {
    id: 4,
    userId: 2,
    scholarshipId: 3,
    scholarshipSaved: "false",
    scholarshipApplied: "true"
  },
  {
    id: 5,
    userId: 3,
    scholarshipId: 2,
    scholarshipSaved: "true",
    scholarshipApplied: "false"
  },
  {
    id: 6,
    userId: 4,
    scholarshipId: 2,
    scholarshipSaved: "false",
    scholarshipApplied: "true"
  },
  {
    id: 7,
    userId: 1,
    scholarshipId: 4,
    scholarshipSaved: "true",
    scholarshipApplied: "false"
  },
]