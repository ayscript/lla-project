import Header from "../Components/Header";
import "../App.css";
import Star from "../Components/Star";
import {
  Instagram,
  Norfolk,
  Facebook,
  Apple,
  Github,
} from "../Components/Icons";

const HomePage = () => {
  return (
    <>
      <div className="hero">
        <h1>
          LinkedIn Local Abeokuta <span>1.0</span>
        </h1>
      </div>

      <section className="hero-2">
        <div>
          <h2>Where Connections Spark Opportunities</h2>
          <p>
            Join top entrepreneurs and professionals in shaping Abeokuta’s
            business future.
          </p>
          <a href="/register">
            <button className="buttons">Register Now</button>
          </a>
        </div>
        <img src="img/LLA-Visual2.png" alt="" />
      </section>

      <section className="convener-section">
        <h2>Meet The convener</h2>
        <div className="convener-info">
          <img src="img/convener.png" alt="convener photo" />
          <div className="convener-bio">
            <p>
              Omotayo Babatunde is the visionary force known as Coach Maverick,
              who navigates success as a globally recognised LinkedIn Brand
              Strategist, Content Writer.
            </p>
            <p>
              As a LinkedIn Brand Strategist, Omotayo masterfully positions
              business owners, creators, and professionals to effortlessly
              attract the opportunities they desire.
            </p>
            <p>
              A graduate with First Class Honours in English Studies from
              Babcock University, Omotayo's writing journey began over a decade
              ago, evolving into a powerhouse of expertise. From an HR role in
              an Indonesian hospitality franchise, she transitioned into the
              world of Communications and Content Writing, eventually founding
              Maverick Content Company.
            </p>
            <p>
              With a wealth of experience, Omotayo intricately weaves skills and
              experiences, guiding individuals and organisations towards global
              growth, financial success, and unparalleled career opportunities
              through her exceptional content crafting.
            </p>
            <p>
              Beyond her remarkable milestones, Omotayo's impact resonates
              globally. She has coached over 2000 professionals from over 10
              countries, empowering them to build robust personal brands that
              captivate clients, recruiters, and global opportunities, getting
              her recognised by Favikon as one of the Top LinkedIn Growth
              Professionals in Nigeria. The many testimonials she's received are
              a testament to her transformative influence.
            </p>
          </div>
        </div>
      </section>
      <section className="expectSection">
        <img
          src="/img/conference-img.jpg"
          alt="a photo of-a seminar with a diverse group"
        />
        <div>
          <h2>What to expect:</h2>
          <p>
            LINKEDIN LOCAL ABEOKUTA 1.0 seeks to bridge the gap between ideation
            and reality while bringing people together and helping them see
            possibilities.
          </p>
          <p>
            It aims to unite an estimated 3,500 attendees (in-person and via
            livestream), including professionals, entrepreneurs, techies,
            creatives, freelancers, change-makers. This event will include:
          </p>
          <ul>
            <li>
              <Star /> Keynote Speeches
            </li>
            <li>
              <Star /> Couch Sessions
            </li>
            <li>
              <Star /> Mentor Exchange Sections
            </li>
            <li>
              <Star /> Panel Sessions
            </li>
          </ul>
          <button className="buttons">Read More</button>
        </div>
      </section>
      <section className="brandSection">
        <h2>Our Partners and Sponsors</h2>
        <div>
          <Instagram />
          <Norfolk />
          <Facebook />
          <Apple />
          <Github />
        </div>
      </section>
      <section className="cta-section">
        <h2>Limited Slots Available! Secure Your Spot Today</h2>
        <div>
          <div>
            <img src="/img/cta-img-1.jpg" alt="" />
          </div>
          <div>
            <img src="/img/cta-img-2.jpg" alt="" />
          </div>
          <div>
            <img src="/img/cta-img-3.jpg" alt="" />
          </div>
        </div>
        <a href="/register">
          <button className="buttons">Register Now</button>
        </a>
      </section>
      <section className="feedback">
        <h2>We Value Your Feedback!</h2>
        <form action="">
          <label htmlFor="">
            <p>Kindly take a moment to tell us what you think</p>
            <textarea name="" id=""></textarea>
          </label>
          <button className="buttons">Share my feedback</button>
        </form>
      </section>
    </>
  );
};

export default HomePage;
