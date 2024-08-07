import React,{useEffect} from "react";
import FlapGrid from "../Components/FlapGrid";

const Recruitment=()=>{
    useEffect(() => {
        document.title = "Recruitment - First Track Solution Technologies";
    }, []); 
    return(
        <div className=" mx-auto">
      <div className=" w-full md:w-2/3 mx-auto z-0 font-inter my-2">
                <div className="absolute w-full md:w-2/3 h-60 md:h-96 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                    <h1 className="text-4xl font-bold">Recruitment - Job Portal</h1>
                </div>
                    <img src="images/serv4.jpg" alt="Placeholder" className="w-full h-60 md:h-96 object-cover "/>
            </div>

        <div className="bg-neutral-100 mx-auto p-6  font-inter">
        <div className="text-justify" >At First Track Solution Technologies, we understand the complexities of the recruitment process and the critical role it plays in the success of an organization. Our Recruitment-Job Portal service is designed to simplify and enhance the hiring experience for both employers and job seekers. With our advanced portal, we offer a seamless, user-friendly platform that streamlines job posting, candidate search, and application management. </div>
        <div className="text-black font-semibold mt-3">Key Features</div>
        <div className="my-3">
            <ul className="text-orange-500 font-bold">Dynamic Job Listings</ul>
            <li className="my-2"><span className="font-bold">Efficient Job Posting: </span> Job seekers can build detailed profiles, upload resumes, and highlight skills and achievements. Employers can create company profiles to showcase their culture and values.</li>
            <li className="my-2"><span className="font-bold">Candidate Matching: </span> Automatically match job seekers with relevant job opportunities based on their profiles and preferences.</li>
            
        </div>
        <div className="my-3">
        <ul className="text-orange-500 font-bold">Candidate and Employer Profiles</ul>
            <li className="my-2"><span className="font-bold">Comprehensive Profiles: </span> Employers can quickly create, edit, and manage job listings. Customize postings with job descriptions, requirements, and company details.</li>
            <li className="my-2"><span className="font-bold">Profile Management: </span> Users can update their profiles, track applications, and manage job alerts easily.</li>
        </div>
        <div className="my-3">
            <ul className="text-orange-500 font-bold">Advanced Search Capabilities</ul>
            <li className="my-2"><span className="font-bold">Powerful Search Filters: </span> Job seekers can search for jobs by keyword, job type, location, salary range, and other criteria to find the best-fit opportunities.</li>
            <li className="my-2"><span className="font-bold">Intelligent Recommendations: </span> Our system provides personalized job recommendations based on user profiles and search history.</li>
            
        </div>
        </div>

       <div className="my-8">
       <FlapGrid/>
       </div>

       




        </div>
    )
}

export default Recruitment;