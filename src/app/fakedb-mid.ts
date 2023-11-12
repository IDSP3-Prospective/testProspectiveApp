
export const scholarshipList = [
{
  "title": "Gates Millennium Scholars Program",
  "content": "The Gates Millennium Scholars Program, established in 1999, supports outstanding minority students to complete an undergraduate college education in any discipline of interest.",
  "provider": "Bill & Melinda Gates Foundation",
  "award": "Full",
  "deadline": "2022/09/15",
  "href": "https://www.gmsp.org/",
  "src": "https://upload.wikimedia.org/wikipedia/commons/0/0c/BillMelindaGatesFoundation.svg",
  "alt": "GMS Logo",
  "details": "/scholarship/1"
},

{
  "title": "The Coca-Cola Scholars Program",
  "content": "The Coca-Cola Scholars Program is an achievement-based scholarship awarded to graduating high school seniors each year. Students are recognized for their capacity to lead and serve.",
  "provider": "Coca-Cola Scholars Foundation",
  "award": "20,000",
  "deadline": "2022/10/31",
  "href": "https://www.coca-colascholarsfoundation.org/",
  "src": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Coca_Cola_ad_ca._1943_IMG_3744.JPG",
  "alt": "Coca-Cola Scholars Logo",
  "details": "/scholarship/2"
},

{
  "title": "Jackie Robinson Foundation Scholarship",
  "content": "The Jackie Robinson Foundation provides scholarships of up to $30,000 over four years to minority high school students showing leadership potential and demonstrating financial need.",
  "provider": "Jackie Robinson Foundation",
  "award": "30,000",
  "deadline": "2022/02/01",
  "href": "https://www.jackierobinson.org/",
  "src": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Jackie_Robinson%2C_Brooklyn_Dodgers%2C_1954.jpg",
  "alt": "Jackie Robinson Foundation Logo",
  "details": "/scholarship/3"
},

{
  "title": "Ron Brown Scholar Program",
  "content": "The Ron Brown Scholar Program seeks to identify African American high school seniors who will make significant contributions to society.",
  "provider": "Ron Brown Scholar Program",
  "award": "40,000",
  "deadline": "2022/11/01",
  "href": "https://www.ronbrown.org/",
  "src": "https://upload.wikimedia.org/wikipedia/commons/5/5b/RonBrownUS.JPG",
  "alt": "Ron Brown Scholar Logo",
  "details": "/scholarship/4"
},

{
  "title": "United Negro College Fund Scholarships",
  "content": "The UNCF offers several national and regional scholarships for African American and other minority students.",
  "provider": "UNCF",
  "award": "Varies",
  "deadline": "2022/08/29",
  "href": "https://www.uncf.org/scholarships",
  "src": "https://www.uncf.org/wp-content/uploads/2019/04/uncf-logo.png",
  "alt": "UNCF Logo",
  "details": "/scholarship/5"
}
]

export function getScholarshipByID(id: number) {
  
  const scholarship = scholarshipList[id - 1]

  // If scholarship is found, return it, otherwise return null or undefined
  return scholarship || null;
}