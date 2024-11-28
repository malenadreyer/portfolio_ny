"use client"

const Footer = () => {
    return ( 
    <footer className="bg-[#343067] text-[#FEFEF2]">
 <div className="font-josefin justify-center items-center overflow-hidden pt-36">
      <div className="text-[#FEFEF2] text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold flex flex-wrap justify-center items-center">
        {/* Tekst i slangeform */}
        <span
          className="inline-block "
          style={{ transform: "translateY(-15px) rotate(20deg)" }}
        >
          G
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(5px)  rotate(15deg)" }}
        >
          e
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(10px) rotate(10deg)" }}
        >
          t
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(10px) rotate(10deg)" }}
        >
          &nbsp;
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(10px) rotate(-10deg)" }}
        >
          i
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(0px) rotate(-10deg)" }}
        >
          n
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(-5px) rotate(-5deg)" }}
        >
          &nbsp;
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(-15px) rotate(-10deg)" }}
        >
          t
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(-20px) rotate(-5deg)" }}
        >
          o
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(-25px) rotate(0deg)" }}
        >
          u
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(-20px) rotate(10deg)" }}
        >
          c
        </span>
        <span
          className="inline-block"
          style={{ transform: "translateY(-15px) rotate(10deg)" }}
        >
          h
        </span>
      </div>
    </div>

    <div
      className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-[#FEFEF2] pt-24 pb-24"
      style={{  display: "grid" }}
    >
      {/* Første kolonne */}
      <div >
        <h3 className="text-2xl font-bold mb-4">Links</h3>
        <p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline font-josefin"
          >
            Github
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-josefin text-lg  hover:underline"
          >
            Linkedin
          </a>
        </p>
        <p>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-josefin hover:underline"
          >
            CodePen
          </a>
        </p>
      </div>

      {/* Anden kolonne */}
      <div >
        <h3 className="text-2xl font-bold mb-4">Online</h3>
        <p>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-josefin hover:underline"
          >
            TikTok
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-josefin hover:underline"
          >
            Instagram
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg  font-josefin hover:underline"
          >
            Facebook
          </a>
        </p>
      </div>

      {/* Tredje kolonne */}
      <div >
        <h3 className="text-2xl font-bold mb-4">Shoot me an email</h3>
        <p>
          <a
            href="mailto:malenadreyer@gmail.com"
            className="text-lg font-josefin hover:underline"
          >
            malenadreyer@gmail.com
          </a>
        </p>
      </div>
    </div>
<div className="text-center">
    Maria Elena Toca Dreyer <span>| all rights reserved</span></div>
    </footer> );
}
 
export default Footer;