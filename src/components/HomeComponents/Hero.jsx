import doradesign from "../../assets/img/doradesign.svg";
import wave from "../../assets/img/wave.svg";
import silsla from "../../assets/img/silsla.svg";
import hero1 from "../../assets/img/hero1.jpg";
import hero2 from "../../assets/img/hero2.png";

function Hero() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div>
        <div class="flex flex-wrap justify-center items-center text-white font-syne font-extrabold text-5xl md:text-6xl gap-5">
          <span>I AM A</span>
          <img
            src={hero1}
            alt="icon"
            class="w-22 h-12 rounded-full object-cover"
          />
          <span>FREELANCE</span>
          <span>DESIGNER</span>
          <img
            src={hero2}
            alt="icon"
            class="w-22 h-12 rounded-full object-cover"
          />
          <span>FROM</span>
          <span class="text-white px-3 py-1 rounded-lg">SAN FRANCISCO</span>
        </div>

        <div className="flex items-center mt-15">
          <div className="flex-1">
            <img src={doradesign} alt="doraDesign" />
          </div>

          <div className="flex-1">
            <img src={wave} alt="wave" className="flex-1" />
          </div>

          <div className="flex-1">
            <img src={silsla} alt="silsla" className="flex-1" />
          </div>

          <div className="flex-2">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
