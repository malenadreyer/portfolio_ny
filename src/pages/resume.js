

"use client";
import Header from "@/components/Header";
import { motion } from "framer-motion"; // Importer motion fra framer-motion
import MouseFollower from "@/components/Mouse";


const Resume = () => {
  return ( 
    <>
    <MouseFollower color="#343067" hoverColor="#343067" clickedColor="#ffff" />
    <Header/>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start med opacity 0 og y-position lidt under
        animate={{ opacity: 1, y: 0 }} // Fade ind og bevæg sig op til den oprindelige position
        transition={{ duration: 1, ease: "easeOut" }} // Timing og transition for animationen
      >

    <div> <h1 className="font-bold text-[5rem] text-center py-7">Resumé</h1>
<section id="resumé" class="py-10">
  <div class="relative">

    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class=" text-right text-lg text-gray-700">
        <p className="font-josefin">Oktober 2023 - Current</p>
      </div>
      <div class="relative col-span-2 ">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-1"></div>
        <h3 class="text-xl font-bold pb-2">Customer Service Assistant</h3>
        <p class="text-gray-500 font-josefin">
          Fashion Society <span>| <a href="https://fashionsociety.dk/" class="text-[#E8B3A9] hover:underline">https://fashionsociety.dk/</a></span>
        </p>
        <p class="pb-4 font-serif">
        At Fashion Society, I focus solely on customer service for all four brands operating from the same location. My responsibilities include handling customer inquiries, processing returns, and ensuring a smooth and positive customer experience. I work extensively with SPY, Shopify, Webshipper, Excel, and Customerly on a daily basis. By addressing customer needs efficiently and professionally, I play a key role in maintaining high levels of customer satisfaction across all brands.        </p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>

    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">May 2023 - August 2023</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-1"></div>
        <h3 class="text-xl font-bold pb-2">Customer Service Advisor</h3>
        <p class="text-gray-500 font-josefin">
          Telia APS | <a href="https://www.telia.dk/" class="text-[#E8B3A9] hover:underline">https://www.telia.dk/</a>
        </p>
        <p class="pb-4 font-serif">
        At Telia, I was responsible for managing customer inquiries via phone and email, providing professional assistance, guidance, and support to B2C customers. I efficiently handled order inquiries, complaints, and exchanges, demonstrating strong communication skills in both Danish and English. By working swiftly and systematically, I navigated various systems and databases to deliver accurate solutions to customers. My dedicated and professional approach to customer service contributed significantly to maintaining high levels of customer satisfaction        </p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>

    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">December 2021 - August 2023</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Sales Advisor
        </h3>
        <p class="text-gray-500 font-josefin">
        Maria Black | <a href="https://www.maria-black.com/dk/?utm_source=google&utm_medium=cpc&utm_content=brand&gad_source=1&gclid=Cj0KCQiAgJa6BhCOARIsAMiL7V9w5AxVLj-lQAdgnry0extSDyqv6C3TXOMFhKO7VBRSI1riIyiF6qsaApvgEALw_wcB" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">
        My responsibility was to create awareness for NoFipa's vintage bags on Instagram. This included managing advertisements and effectively marketing products to our B2C customers. In addition to that, I was in charge of shooting all visual content for Instagram, Facebook, and their website. My daily tasks primarily involved developing marketing strategies for the company. Other duties included using Shopify, maintaining the warehouse, and conducting stock counts.
<br></br> <br></br>
In this role, I utilized the Adobe Creative Suite extensively to produce high-quality content for archive38 Instagram. I used Photoshop for editing and enhancing product images, and Premiere Pro for creating engaging video content. I also developed and executed social media strategies, ensuring that our visual branding aligned with our marketing goals. This holistic approach allowed me to elevate the brand’s online presence and maintain a cohesive aesthetic across platforms.        </p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">January 2021 - January 2022</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Content Creator/Sales</h3>
        <p class="text-gray-500 font-josefin">
        NoFipa - archive38 | <a href="https:/archive38.com" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">
        My responsibility was to create awareness for NoFipa's vintage bags on Instagram. This included managing advertisements and effectively marketing products to our B2C customers. In addition to that, I was in charge of shooting all visual content for Instagram, Facebook, and their website. My daily tasks primarily involved developing marketing strategies for the company. Other duties included using Shopify, maintaining the warehouse, and conducting stock counts.
<br></br> <br></br>
In this role, I utilized the Adobe Creative Suite extensively to produce high-quality content for archive38 Instagram. I used Photoshop for editing and enhancing product images, and Premiere Pro for creating engaging video content. I also developed and executed social media strategies, ensuring that our visual branding aligned with our marketing goals. This holistic approach allowed me to elevate the brand’s online presence and maintain a cohesive aesthetic across platforms.        </p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">January 2019 - March 2021</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Assistent Store Manager</h3>
        <p class="text-gray-500 font-josefin">
        Marc Jacobs Airport | <a href="https://www.marcjacobs.com/" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">
        As Assistant Store Manager, my responsibilities included handling customer complaints, preparing monthly sales reports, driving in-store sales, maintaining cleanliness, managing inventory, and performing various ad-hoc tasks. I was also the primary opener of the store, often managing the shop independently for up to five hours at a time, which allowed me to focus on key operational duties. The majority of my time was dedicated to assisting customers and ensuring they had a premium shopping experience, while also optimizing daily store operations.</p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">September 2018 - December 2018</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Sales Associate</h3>
        <p class="text-gray-500 font-josefin">
        Illum Shoe Heaven  | <a href="https://illum.dk/?utm_source=google&utm_medium=cpc&utm_campaign=brand&gad_source=1&gclid=CjwKCAjw9eO3BhBNEiwAoc0-jYNcFoTjbjZYfv9skkswipsv2IosfaOml3HjGKjPXIbiWGSTnB7qohoCimsQAvD_BwE" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">As a sales assistant in Illum’s shoe department, I was required to have knowledge of a wide range of footwear, from stilettos and sneakers to boots. Illum boasts one of the largest selections of brands in the Nordics, and the expectation was not only to drive sales of high-end brands but also to ensure an exceptional customer experience. My responsibilities included cleaning, preparing for sales events, and maintaining inventory, though my primary focus was always on delivering strong sales performance on the shop floor.</p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">February 2017 - September 2019</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Visuel Merchandiser
        </h3>
        <p class="text-gray-500 font-josefin">
        Magasin Field's | <a href="https://www.magasin.dk/?gad_source=1&gclid=CjwKCAjw9eO3BhBNEiwAoc0-jd5oxJYG30g0zzR2xiyuaE_dvo58snHjBxqN65oZC5TiUXkJenxwIBoCW3IQAvD_BwE" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">As a Visual Merchandiser in the children's department at Magasin, I was responsible for creating visually appealing and strategically arranged displays to enhance the customer shopping experience. This included designing seasonal layouts, ensuring optimal product placement, and maintaining high visual standards throughout the store. I regularly rotated merchandise to highlight key collections, restocked popular items, and coordinated the visual presentation with promotional campaigns. Additionally, I organized and managed inventory to ensure seamless product flow and frequently collaborated with sales staff to maximize the impact of visual merchandising on sales.</p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">September 2013 - February 2017</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Manager
        </h3>
        <p class="text-gray-500 font-josefin">
        
McDonald's - Kastrup Lufthavn | <a href="https://www.mcdonalds.com/dk/da-dk.html" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">As a Manager at McDonald’s, I held a wide range of responsibilities, with one of the key duties being to ensure that both the restaurant and staff were fully prepared for the two major rush periods each day. With four hours daily under potential evaluation by our corporate office, it was crucial that I ensured all employees were in proper uniform, the restaurant maintained a pristine appearance, and that every guest received exceptional service. Additional responsibilities included overseeing cash reconciliation, opening and closing systems, managing a team of 5-20 employees, and monitoring sales and inventory throughout the day.</p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">May 2019 - February 2022</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Hostess/Office Manager
        </h3>
        <p class="text-gray-500 font-josefin">
        
        Babylon Resturant - Søpavillonen | <a href="https://www.restaurantbabylon.dk/" class="text-[#E8B3A9] hover:underline">https://hm.com/</a>
        </p>
        <p class="pb-4 font-serif">At Babylon, I worked as a seater during the restaurant's operating hours, where I was responsible for welcoming and seating guests at their tables. In addition to my role as a seater, I also took on administrative tasks outside of opening hours. This included ensuring the office was clean and organized, and that meetings were scheduled and held as planned. I also managed bookings and coordinated reservations with my supervisor.</p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[90%] top-[10%] left-[-2%]"></div>
      </div>
    </div>


    <div class="grid grid-cols-3 gap-4 mt-20">
      <div></div>
      <div class="">
        <h2 class="font-bold text-[2rem] text-[#343067] font-shyte  py-7">Education</h2>
      </div>
    </div>


    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">August 2023 - Current</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">Profession Bachelor - Multimedia Design</h3>
        <p class="text-gray-500 font-josefin">
          KEA - Københavns Erhvervsakademi <span>| <a href="https://kea.dk/" class="text-[#E8B3A9] hover:underline">https://kea.dk/</a></span>
        </p>
        <p class="pb-4 font-serif">
          In the Multimedia Design program at KEA, students gain a comprehensive education that combines creativity, technology, and communication. They learn fundamental design principles, graphic design tools, and web development skills.
        </p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>

    <div class="grid grid-cols-3 max-w-[1100px] gap-10 mb-8">
      <div class="text-right text-lg text-gray-700">
      <p className="font-josefin">January 2020 - January 2023</p>
      </div>
      <div class="relative col-span-2">
        <div class="absolute w-5 h-5 bg-[#E8B3A9] rounded-full -left-7 top-3"></div>
        <h3 class="text-xl font-bold pb-2">HF</h3>
        <p class="text-gray-500 font-josefin">
        KVUC <span>| <a href="https://kvuc.dk/?gad_source=1&gclid=CjwKCAjw9eO3BhBNEiwAoc0-jfXMyrAywjqonJu9kPyyKLQktjLVoCtuTF3vxM2wtxj56wfWJEXvqhoCkrwQAvD_BwE" class="text-[#E8B3A9] hover:underline">https://kvuc.dk/</a></span>
        </p>
        <p class="pb-4 font-serif">
        I completed my HF at KVUC to finish my upper secondary education, which allowed me to expand my academic opportunities. This program provided me with a solid foundation in various subjects, enhancing my critical thinking and communication skills. By achieving my HF, I have now positioned myself to pursue further studies in English and explore new academic avenues.</p>
        <div class="absolute w-0.5 bg-[#E8B3A9] h-[130%] top-[10%] left-[-2%]"></div>
      </div>
    </div>
  </div>
</section>

      </div>
      </motion.div>
      </>
   );
}
 
export default Resume;