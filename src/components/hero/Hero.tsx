import { useEffect, useState } from "react";
import iphoneVideo from "../../assets/videos/iPhone_video.mp4";
import iphoneVideoTwo from "../../assets/videos/iPhone_video_two.mp4";
import apple from "../../assets/images/apple.png";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(iphoneVideo);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setVideoSrc(isDark ? iphoneVideoTwo : iphoneVideo);
    };

    // Dark mode o'zgarishini kuzatish
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    checkDarkMode(); // Boshlang‘ich tekshiruv

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-[100%] h-[100%] bg-black dark:bg-pink-200 text-white dark:text-black flex items-center px-6  py-12">
      <video
        key={videoSrc}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-lg text-left p-8 rounded-lg  self-start ml-10 text-white">
        <div className="flex items-center space-x-2">
          <img src={apple} alt="Apple Logo" className="w-8 h-8" />
          <p className="text-lg md:text-xl mt-2">iPhone 14 Series</p>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Up to 10% off Voucher
        </h2>
        <p className="text-lg md:text-xl">iPhone 14 Series</p>

        <a
          href="#"
          className="mt-4 inline-block text-white text-lg font-semibold relative after:content-[''] after:block after:w-full after:h-1 after:bg-white after:mt-1"
        >
          Shop Now →
        </a>
      </div>

    </section>
  );
};

export default Hero;
