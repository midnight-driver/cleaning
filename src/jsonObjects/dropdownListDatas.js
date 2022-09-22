const headerDropDownList = [
  { name: "Select Service", value: "none" },
  { name: "Sofa Deep Cleaning", value: "sofaCleaning" },
  {
    name: "House Cleaning",
    value: "houseCleaning",
  },
  {
    name: "Office Cleaning",
    value: "officeCleaning",
  },
  {
    name: "Kitchen Deep Cleaning",
    value: "kitchenDeepCleaning",
  },
  {
    name: "Bathroom Deep Cleaning",
    value: "bathroomDeepCleaning",
  },
  {
    name: "Sanitization",
    value: "sanitization",
  },
  {
    name: "Carpet Cleaning",
    value: "carpetCleaning",
  },
  {
    name: "Chair Cleaning",
    value: "chairCleaning",
  },
  {
    name: "Glass Cleaning",
    value: "glassCleaning",
  },
  {
    name: "Carpenters",
    value: "carpenters",
  },
  {
    name: "Painters",
    value: "painters",
  },
  {
    name: "Cleaning Services",
    value: "cleaningServices",
  },
  {
    name: "Pest Control",
    value: "pestControl",
  },

  {
    name: "Packers & Movers",
    value: "packers&Movers",
  },
  {
    name: "Plumbers",
    value: "plumbers",
  },
  {
    name: "Electricians",
    value: "electrician",
  },
  {
    name: "AC Service Repair",
    value: "acserviceRepair",
  },
  
];

const selectionOptions = {
  none: [{ name: "Select Some Service", value: "Select" }],
  houseCleaning: [
    {
      name: "Deep Home Cleaning - 1 BHK Vacant",
      value: "Deep Home Cleaning - 1 BHK Vacant",
    },
    {
      name: "Deep Home Cleaning - 2 BHK Vacant",
      value: "Deep Home Cleaning - 2 BHK Vacant",
    },
    {
      name: "Deep Home Cleaning - 3 BHK Vacant",
      value: "Deep Home Cleaning - 3 BHK Vacant",
    },
    {
      name: "Deep Home Cleaning - 4 BHK Vacant",
      value: "Deep Home Cleaning - 4 BHK Vacant",
    },
    {
      name: "Deep Home Cleaning - 5 BHK Vacant",
      value: "Deep Home Cleaning - 5 BHK Vacant",
    },
    {
      name: "Deep Home Cleaning - 1 BHK Occupied",
      value: "Deep Home Cleaning - 1 BHK Occupied",
    },
    {
      name: " Deep Home Cleaning - 2 BHK Occupied",
      value: "Deep Home Cleaning - 2 BHK Occupied",
    },
    {
      name: "Deep Home Cleaning - 3 BHK Occupied",
      value: "Deep Home Cleaning - 3 BHK Occupied",
    },
    {
      name: "Deep Home Cleaning - 4 BHK Occupied",
      value: "Deep Home Cleaning - 4 BHK Occupied",
    },
    {
      name: "Deep Home Cleaning - 5 BHK Occupied",
      value: "Deep Home Cleaning - 5 BHK Occupied",
    },
    {
      name: "Deep Home Cleaning - 1 Room Kitchen Set ",
      value: "Deep Home Cleaning - 1 Room Kitchen Set ",
    },
    {
      name: "Deep Home Cleaning - 1 Room (Upto 200 Sq Ft)",
      value: "Deep Home Cleaning - 1 Room (Upto 200 Sq Ft)",
    },
    {
      name: "Deep Home Cleaning - 1 Room 1 Bathroom",
      value: "Deep Home Cleaning - 1 Room 1 Bathroom",
    },
    {
      name: "Deep Home Cleaning Villa - 2K-3K sqft ",
      value: "Deep Home Cleaning Villa - 2K-3K sqft ",
    },
    {
      name: "Deep Home Cleaning Villa - 3K-4K sqft",
      value: "Deep Home Cleaning Villa - 3K-4K sqft",
    },
    {
      name: "Deep Home Cleaning Villa - 4K - 5K sqft",
      value: "Deep Home Cleaning Villa - 4K - 5K sqft",
    },
    {
      name: "Deep Home Cleaning Villa - 5K - 6K sqft",
      value: "Deep Home Cleaning Villa - 5K - 6K sqft",
    },
  ],
  sofaCleaning: [
    {
      name: "Sofa Cleaning - 2 sofa seats",
      value: "Sofa Cleaning - 2 sofa seats",
    },
    {
      name: "Sofa Cleaning - 3 sofa seats",
      value: "Sofa Cleaning - 3 sofa seats",
    },
    {
      name: "Sofa Cleaning - 4 sofa seats",
      value: "Sofa Cleaning - 4 sofa seats",
    },
    { name: "Sofa Cleaning - 5 sofa seats", value: "Sofa Cleaning - 5 sofa seats" },
    { name: "Sofa Cleaning - 6 sofa seats", value: "Sofa Cleaning - 6 sofa seats" },
    { name: "Sofa Cleaning - 7 sofa seats", value: "Sofa Cleaning - 7 sofa seats" },
    { name: "Sofa Cleaning - 8 sofa seats", value: "Sofa Cleaning - 8 sofa seats" },
   
   
  ],
  kitchendeepCleaning: [

{
  name:'Kitchen Cleaning - with Chimney',
  value:"Kitchen Cleaning - with Chimney",
},
 { name: "Kitchen Cleaning - without Chimney", 
 value: "Kitchen Cleaning - without Chimney" },
  ],
 bathroomDeepCleaning:[
 { name: "Bathroom cleaning - 1 Bathroom", value: "Bathroom cleaning - 1 Bathroom" },
  { name: "Bathroom cleaning - 2 Bathroom ", value: "Bathroom cleaning - 2 Bathroom " },
   { name: "Bathroom cleaning - 3 Bathroom", value: "Bathroom cleaning - 3 Bathroom" },
    { name: "Bathroom cleaning - 6 To 8 Bathrooms", value: "Bathroom cleaning - 6 To 8 Bathrooms" },
         { name: "Bathroom cleaning -> 10 Bathrooms", value: "Bathroom cleaning -> 10 Bathrooms" },
         
 ],
sanitization :[
 { name: "Home Sanitization - 1 BHK ", value: "Home Sanitization - 1 BHK " },
  { name: "Home Sanitization - 2 BHK ", value: "Home Sanitization - 2 BHK " },
   { name: "Home Sanitization - 5 BHK", value: "Home Sanitization - 5 BHK" },
       { name: "Home Sanitization Villa - 2K-3K sqft ", value: "Home Sanitization Villa - 2K-3K sqft " },
       { name: "Home Sanitization Villa - 3K-4K sqft", value: "Home Sanitization Villa - 3K-4K sqft" },
       
],
carpetCleaning:[
{ name: "Carpet Deep Cleaning - 0-25 Sq Ft", value: "Carpet Deep Cleaning - 0-25 Sq Ft" },
{ name: "Carpet Deep Cleaning - 25-50 Sq Ft", value: "Carpet Deep Cleaning - 25-50 Sq Ft" },
{ name: "Carpet Deep Cleaning - 250-500 Sq Ft", value: "Carpet Deep Cleaning - 250-500 Sq Ft" },
{ name: "Carpet Deep Cleaning - 5000-10000 Sq Ft", value: "Carpet Deep Cleaning - 5000-10000 Sq Ft" },


],
chairCleaning:[
{ name: "Chair Deep Cleaning - 5-10 Chairs", value: "Chair Deep Cleaning - 5-10 Chairs" },
{ name: "Chair Deep Cleaning - 15-20 Chairs", 
value: "Chair Deep Cleaning - 15-20 Chairs" },
{ name: "Chair Deep Cleaning - 30-50 Chairs",
 value: "Chair Deep Cleaning - 30-50 Chairs" },
{ name: "", 
value: "" 
},
{ name: "Chair Deep Cleaning - 50-75 Chairs",
 value: "Chair Deep Cleaning - 50-75 Chairs" 
},
{ name: "Chair Deep Cleaning->100 Chairs",
 value: "Chair Deep Cleaning->100 Chairs"
 },
]


};

const titleList = {
  houseCleaning: "Select House Cleaning Option",
  none: "Select Some Option",
  sofaCleaning: "Select Sofa Cleaning Options",
  kitchendeepCleaning: "Select Kitchen Cleaning Options",
  bathroomDeepCleaning: "Select Bathroom Cleaning Options",
  sanitization: "Select Sanitization Options",
  carpetCleaning: "Select Carpet Cleaning Options",
  chairCleaning: "Select Chair Cleaning Options",
};

export { headerDropDownList, titleList, selectionOptions };
