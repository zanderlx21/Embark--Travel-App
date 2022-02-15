import { useEffect, useState } from "react";





function Footer(){

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

    return (
        <div className="Footer">

            <h1 id="Logo-Header"><span id="Logo-E">e</span>mbark</h1>

            {showButton && (
            <button onClick={scrollToTop} className="Back-To-Top-Btn">
             Back to Top   {/* this sympol is used for the up-arrow  */}
            </button>
            )}

            <p>Copyright © 2004 2022 Yelp Inc. Yelp, Yelp logo, Yelp burst and related marks are registered trademarks of Yelp.</p>

        </div>
    )
}
export default Footer;