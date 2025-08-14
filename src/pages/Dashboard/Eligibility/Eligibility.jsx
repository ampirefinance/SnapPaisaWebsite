// import React, { useContext, useEffect, useState } from "react";
// import c1icon from "../../../images/c1.png";
// import c2icon from "../../../images/c2.png";
// import c4icon from "../../../images/c4.png";
// import { useNavigate } from "react-router-dom";
// import { getStorage, isEmpty } from "../../../Utils/common";
// import ContextDashboard from "../../../Context/ContextDashboard";
// import { DashboardWrapper } from "../style";
// import ProgressBar from "../../../components/ProgressBar/ProgressBar";
// import DashboardCard2 from "../DashboardCard2";

// const cardList = [

//   {
//     heading: "Loan Calculator",
//     desc: "Choose the loan amount and tenure.",
//     img: c1icon,
//     link: "/my-dashboard/calculate-loan",
//   },
//   {
//     heading: "Employment Information",
//     desc: "Share about your work status.",
//     img: c2icon,
//     link: "/my-dashboard/about-your-company",
//   },
//   {
//     heading: "Upload Your Documents",
//     desc: "Share your documents to verify your details",
//     img: c4icon,
//     link: "/my-dashboard/adhar-upload",
//   },
//   {
//     heading: "Banking Details",
//     desc: "Share your banking details",
//     img: c2icon,
//     link: "/my-dashboard/bank-detail",
//   },
  
// ];

// function Eligibility() {
//   const [cards, setCards] = useState(cardList);
//   const [progressBar, setProgressBar] = useState(getStorage("step_percent"));
//   const [stepComplate, setStepComplate] = useState(false);
//   const { setps,currentEvent } = useContext(ContextDashboard);
//   const navigate = useNavigate();
//   const [activeCardIndex, setActiveCardIndex] = useState(0);

//   const redirect = (data) => {
//     navigate(data.link);
//   };

//   // useEffect(() => {
//   //   if (!isEmpty(setps)) {
//   //     checkStep(setps);
//   //   }
//   // }, [setps]);

//   // function checkStep(data) {
//   //   setProgressBar(data?.step_complete_percent);

//   //   // Check completion status of each step
//   //   const isFirstCardComplete = data?.documents_uploads === "DONE";
//   //   const isSecondCardComplete = data?.company_info === "DONE";

//   //   // Activate next card based on completion
//   //   if (isFirstCardComplete && activeCardIndex === 0) {
//   //     setActiveCardIndex(1);
//   //   } 
//   //   if (isFirstCardComplete && isSecondCardComplete && activeCardIndex === 1) {
//   //     setActiveCardIndex(2);
//   //   }
//   // }

//   // useEffect(() => {
//   //   setCards((prevCards) =>
//   //     prevCards.map((card, index) => ({
//   //       ...card,
//   //       complate: (index === 0 && setps?.documents_uploads === "DONE") ||
//   //                 (index === 1 && setps?.company_info === "DONE") ||
//   //                 (index === 2 && setps?.loan_cal === "DONE"),
//   //     }))
//   //   );
//   // }, [setps]);

//   useEffect(()=>{
//     const steps=currentEvent(getStorage("next_step"));
//     setActiveCardIndex(steps);
    
//   },[]);

//   return (
//     <DashboardWrapper>
//       <ProgressBar value={`${progressBar}%`} />
//       <div className="carde">
//         {cards.map((value, index) => {
//           const isActive = index === activeCardIndex;
//           return (
//             <DashboardCard2
//               number={index + 1}
//               heading={value.heading}
//               desc={value.desc}
//               img={value.img}
//               complate={value.complate}
//               disable={!isActive}
//               key={index}
//               onClick={() => isActive && redirect(value)} // Only redirect if the card is active
//             />
//           );
//         })}
//         <div className="hideMD"></div>
//       </div>
//     </DashboardWrapper>
//   );
// }

// export default Eligibility;



import React, { useContext, useEffect, useState } from "react";



import c1icon from "../../../images/c1.png";
import c2icon from "../../../images/c2.png";
import c3icon from "../../../images/c3.png";
import c4icon from "../../../images/c4.png";
import c5icon from "../../../images/c5.png";
import banner from "../../../images/bannerimg2.png";
import play from "../../../images/play-circle.png";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { getStorage, setStorage } from "../../../Utils/common";
import ContextDashboard from "../../../Context/ContextDashboard";
import { DashboardWrapper } from "../style";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import DashboardCard2 from "../DashboardCard2";
import { getDashboardData } from "../../../Utils/api";


const cardList = [
  {
        heading: "Loan Calculator",
        desc: "Choose the loan amount and tenure.",
        img: c1icon,
        link: "/my-dashboard/calculate-loan",
      },
      {
        heading: "Employment Information",
        desc: "Share about your work status.",
        img: c2icon,
        link: "/my-dashboard/about-your-company",
      },
      {
        heading: "Upload Your Documents",
        desc: "Share your documents to verify your details",
        img: c4icon,
        link: "/my-dashboard/adhar-upload",
      },
      {
        heading: "Banking Details",
        desc: "Share your banking details",
        img: c2icon,
        link: "/my-dashboard/bank-detail",
      },
      
    ];



function Eligibility() {
  const [cards, setCards] = useState(cardList);
  const [stepComplate, setStepComplate] = useState(false);
  const [showSteps, setShowSteps] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [progressBar,setProgressBar] = useState(0)
  const {setps} = useContext(ContextDashboard);

  const navigate = useNavigate();
  const {currentEvent} = useContext(ContextDashboard);

  const redirect = (data) =>{
    console.log(data);
    navigate(data.link)
  }

  // const showSteps_ = ()=>{

  //  setToggle(!toggle)
  // }
  

  // useEffect(()=>{
  //   console.log("setps",setps)
  //   if(!isEmpty(setps)){
  //     checkStep(setps);
  //   }
   
  // },[setps]);

// function checkStep(data){
 
//       setProgressBar(data?.step_complete_percent);
//       const steps = (data?.step_stage - 1) ;
//       if(data?.step_complete_percent === 100){
//         setToggle(false)
//       }
//       setShowSteps(steps);
      
     
  
//   }


// useEffect(()=>{
//   setCards([
//     {
//       heading: "Loan Calculator",
//       desc: "Choose the loan amount and tenure.",
//       img: c1icon,
//       complate:setps?.loan_cal === "DONE",
//       link: "/my-dashboard/calculate-loan",
//     },
//     {
//       heading: "Employment Information",
//       desc: "Share about your work status.",
//       img: c2icon,
//       complate:setps?.company_info === "DONE",
//       link: "/my-dashboard/about-your-company",
//     },
//     {
//       heading: "Upload Your Documents",
//       desc: "Share your documents to verify your details",
//       img: c4icon,
//       complate:setps?.documents_uploads === "DONE",
//       link: "/my-dashboard/adhar-upload",
//     }
//   ])
// },[setps])



useEffect(() => {
  const params = {
    profile_id: getStorage("cust_profile_id") || "",
  };

  getDashboardData(params).then(resp => {
    if (resp?.data?.Status === 1) {
      const dashboardData = resp?.data || {};
      setStorage('dashboardData', dashboardData);
      setStorage('percent', dashboardData?.Data?.application_filled_percent);
      setProgressBar(dashboardData?.Data?.application_filled_percent);
      setStorage('next_step', dashboardData?.Data?.next_event_name);
      
      // Calculate the correct step for eligibility cards (starting from 0)
      const nextStep = dashboardData?.Data?.next_event_name;
      console.log("Eligibility - nextStep:", nextStep);
      if (nextStep) {
        const steps = currentEvent(nextStep);
        console.log("Eligibility - currentEvent result:", steps);
        // For eligibility, we need to adjust the step calculation
        // Since eligibility cards start after registration (step 8), we subtract 9
        const adjustedSteps = Math.max(0, steps - 9);
        console.log("Eligibility - adjusted steps:", adjustedSteps);
        setShowSteps(adjustedSteps);
      } else {
        console.log("Eligibility - no nextStep, defaulting to 0");
        setShowSteps(0);
      }
    }
  });
}, []);

useEffect(() => {
  const nextStep = getStorage("next_step");
  console.log("Eligibility useEffect2 - nextStep:", nextStep);
  if (nextStep) {
    const steps = currentEvent(nextStep);
    console.log("Eligibility useEffect2 - currentEvent result:", steps);
    // For eligibility, we need to adjust the step calculation
    const adjustedSteps = Math.max(0, steps - 9);
    console.log("Eligibility useEffect2 - adjusted steps:", adjustedSteps);
    setShowSteps(adjustedSteps);
  } else {
    console.log("Eligibility useEffect2 - no nextStep, defaulting to 0");
    setShowSteps(0);
  }
}, []);

  return (
    <>
    
    <DashboardWrapper>
      <ProgressBar value={`${progressBar}%`} title="Loan Application"  >
      </ProgressBar>

     {<div className="carde">
        {cards.map((value, index) => {
          const isCompleted = (index + 1) <= showSteps;
          const isCurrentStep = index === showSteps;
          const isDisabled = !isCurrentStep && !isCompleted;
          
          console.log(`Eligibility Card ${index + 1}:`, {
            heading: value.heading,
            isCompleted,
            isCurrentStep,
            isDisabled,
            showSteps
          });
          
          return (
           <DashboardCard2
                number={index + 1}  // Adding the card number
                heading={value.heading}
                desc={value.desc}
                img={value.img}
                complate={isCompleted}
                disable={isDisabled}
                key={index}
                onClick={() => !isDisabled && redirect(value)}
              />
          );
        })}
       <div className="hideMD"></div>
      </div>
      
      }
      
    </DashboardWrapper>
    </>
  );
}

export default Eligibility;