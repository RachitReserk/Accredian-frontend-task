const Footer = () => {
    return (
      <footer className="w-screen bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-lg font-semibold mb-4">Programs</h2>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300 hover:text-white cursor-pointer">{program}</span>
                <span className="text-xl font-bold text-gray-400">+</span>
              </div>
            ))}
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Email (Data Science): <a href="mailto:admissions@accredian.com" className="text-blue-400 hover:underline">admissions@accredian.com</a></p>
            <p>Email (Product Management): <a href="mailto:pm@accredian.com" className="text-blue-400 hover:underline">pm@accredian.com</a></p>
            <p>Data Science Helpline: <a href="tel:+919076593292" className="text-blue-400 hover:underline">+91 9076593292</a></p>
            <p>PM Helpline: <a href="tel:+919625811509" className="text-blue-400 hover:underline">+91 9625811509</a></p>
            <p>Student Helpline: <a href="tel:+919692325207" className="text-blue-400 hover:underline">+91 9692325207</a></p>
            <p className="mt-2">Office: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-4">Accredian</h2>
            {["About", "Career", "Blog", "Admission Policy", "Referral Policy", "Privacy Policy", "Terms Of Service", "Master FAQs"].map((link, index) => (
              <p key={index} className="hover:text-gray-400 cursor-pointer py-1">{link}</p>
            ))}
  
            <h2 className="text-lg font-semibold mt-6">Follow Us</h2>
            <div className="flex space-x-4 mt-3">
              {[
                { name: "Facebook", url: "#", icon: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000 " },
                { name: "LinkedIn", url: "#", icon: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"},
                { name: "Instagram", url: "#", icon: "https://img.icons8.com/?size=100&id=32323&format=png&color=000000" }, 
              ].map((social, index) => (
                <a key={index} href={social.url} className="hover:text-gray-400">
                  <img className="h-6 w-6" src={social.icon}/>
                </a>
              ))}
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  