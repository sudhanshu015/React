import React from 'react';

import Card from '../componants/Card';

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    nameOfCompany: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    nameOfCompany: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    nameOfCompany: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    nameOfCompany: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    nameOfCompany: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    nameOfCompany: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/fX6Iy_njeKMT2csBhDRXXq0GP6Eq2dJKrxi-XEHrHyE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/ODE2MDgyNC9waG90/by90aGUtb3BlbmFp/LWxvZ28tZGlzcGxh/eXMtb24tYS1zbWFy/dHBob25lLXNjcmVl/bi1yZWZsZWN0aW5n/LWdyZWVuLWJlYW1z/LW9wZW5haS1wcmVz/ZW50cy1zb3JhLTIu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhQWUo2N0dzVURW/ZDJLSExJSmp2dFlX/YnVvcHFFOGx2SDhT/SWJqcnh4a289",
    nameOfCompany: "OpenAI",
    datePosted: "6 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$120/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/qyE-YPn0pvNkHFLQpN468s2DGGYcYPyIj77W4TeqwRs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVjLzIy/LzNkLzVjMjIzZGY2/YTQ3YWZkODlhNTEx/YjU3NmU0ZGI1NDBi/LmpwZw",
    nameOfCompany: "Uber",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/sKPcqXRMOJs7uBKh9AcWSlOrW-TnrYl36ghiPqMFLY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hZG9iZS0xLnN2/Zw",
    nameOfCompany: "Adobe",
    datePosted: "10 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Noida, India"
  }
];
 console.log(jobOpenings);
 
// export default jobOpenings;
  return (
    <div className="parent">
     {jobOpenings.map(function(elem,idx){
      return <div key ={idx}> 
       
        <Card company={elem.nameOfCompany}  datePosted={elem.datePosted}     post={elem.post} tag1={elem.tag1} tag2={elem.tag2}   pay={elem.pay}  location={elem.location}  logo={elem.brandLogo}/>
    </div>
       })}
    </div>
  );
};

export default App;
