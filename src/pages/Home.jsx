import Navbar from "../Components/Navbar";
import { Header } from "../Components/Header";
import "../App.css";

const HomePage = () => {
    return (
        <>
      <Header />

      <div className="hero">
        <h1>
          LinkedIn Local Abeokuta<span>1.0</span>
        </h1>
      </div>

      <section className="hero-2">
        <div>
          <h2>Where Connections Spark Opportunities</h2>
          <p>Join top entrepreneurs and professionals in shaping Abeokuta’s business future.</p>
          <button>Register Now</button>
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
      {/* <div className="w-full">
          <Navbar />
      </div> */}
    </>
        
    )
}

export default HomePage;