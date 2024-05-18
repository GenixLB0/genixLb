import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./News.css";

function News() {
  return (
    <div className="news">
      <SubTitle subTitle="Our News & Blogs" />
      <Title title="Largest The News & Blog" />
      <ul className="cards">
        <li className="card">
          <div className="top">
            <div className="image-holder"></div>
            <div className="tag">Solution</div>
          </div>
          <div className="bottom">
            <div className="post-info">
              <span>By: Admin, May 02, 2024</span>
              <span>Comments (02)</span>
            </div>
            <div className="post-title">
              Solution This Business For is Marketing Blog
            </div>
            <div className="post-desc">
              We business standard chunk ofI nibh velit auctor aliquet sollic
              tudin.
            </div>
            <div className="rate-read">
              <span className="stars">
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                (05)
              </span>
              <span className="read-more">
                <span>Read More</span>
                <img src="assets/icons/readmore.svg" alt="" width="14" />
              </span>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="top">
            <div className="image-holder"></div>
            <div className="tag">Solution</div>
          </div>
          <div className="bottom">
            <div className="post-info">
              <span>By: Admin, May 02, 2024</span>
              <span>Comments (02)</span>
            </div>
            <div className="post-title">
              We Should be Descriptive This Business
            </div>
            <div className="post-desc">
              We business standard chunk ofI nibh velit auctor aliquet sollic
              tudin.
            </div>
            <div className="rate-read">
              <span className="stars">
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                (05)
              </span>
              <span className="read-more">
                <span>Read More</span>
                <img src="assets/icons/readmore.svg" alt="" width="14" />
              </span>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="top">
            <div className="image-holder"></div>
            <div className="tag">Solution</div>
          </div>
          <div className="bottom">
            <div className="post-info">
              <span>By: Admin, May 02, 2024</span>
              <span>Comments (02)</span>
            </div>
            <div className="post-title">
              How digital marketing can increase your profit!
            </div>
            <div className="post-desc">
              We business standard chunk ofI nibh velit auctor aliquet sollic
              tudin.
            </div>
            <div className="rate-read">
              <span className="stars">
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                <img src="assets/icons/star.svg" alt="" />
                (05)
              </span>
              <span className="read-more">
                <span>Read More</span>
                <img src="assets/icons/readmore.svg" alt="" width="14" />
              </span>
            </div>
          </div>
        </li>
      </ul>

      <div className="dots">
        <div className="1"></div>
        <div className="2 active"></div>
        <div className="3"></div>
        <div className="4"></div>
      </div>
    </div>
  );
}

export default News;
