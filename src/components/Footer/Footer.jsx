
import footer1 from "../../assets/images/footer1.png"
import footer2 from "../../assets/images/footer2.png"
import footer3 from "../../assets/images/footer3.png"
import footer4 from "../../assets/images/footer4.png"
import footer5 from "../../assets/images/footer5.png"
import footer6 from "../../assets/images/footer6.webp"
export default function Footer() {
  return (
   <footer className="bg-[rgb(242,242,242)] ">
<div className="container w-full p-6">
  <h2 className="text-3xl text-[#212529]">Get the fresh Cart App</h2>
  <p className="text-[#6d767e] font-light mb-3">we will send you a link , open it on your phone to download the app</p>
 <div className="flex mb-5">
 <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block me-3 grow p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email ..." required />
 <button className="text-white bg-[#08ac0a]  p-2 rounded-md  ">share app link</button>
 </div>
 <div className="partner   flex justify-between p-4 border-y-2 items-center">
  <div className="payment flex justify-center items-center">
    <p className="text-l text-[#212529]">payment partners</p>
<img src={footer1} className="w-8 h-7 mx-2 " alt="" />
<img src={footer2} className="w-8 h-7 mx-2 " alt="" />
<img src={footer3} className="w-8 h-7 mx-2 " alt="" />
<img src={footer4} className="w-8 h-7 mx-2 " alt="" />

  </div>
  <div className="app flex jus items-center">
    <p className="text-l text-[#212529]">Get deliveries With FreshCart</p>
    <button><img src={footer5} className="w-20" alt="" /></button>
    <button><img src={footer6} className="w-20" alt="" /></button>
  </div>
 </div>
</div>
   </footer>
  )
}

