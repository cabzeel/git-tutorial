import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div>
        <img src={logo} alt="HooBank" className="w-[266px] h-[72px] object-contain"/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, reliable and secure</p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' :  'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">@copyright 2024 - zeeltech solutions</p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' :  'mb-0'}`} />
        ))}
      </div>
    </div>
  </section>
)

export default Footer