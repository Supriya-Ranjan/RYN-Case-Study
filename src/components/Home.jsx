import Hero from "./HomeComponents/Hero";
import Title from "../common/coreComponent/Title";
import Work from "./HomeComponents/Work";

import {
  EXPERTISE_CONFIG,
  WORK_CONFIG,
  WORKS,
  BLOGS,
  BLOGS_CONFIG,
  EXPERIENCES_CONFIG,
} from "../common/enums/home";

import bullet from "../assets/img/bullet.svg";
import work1 from "../assets/img/work1.png";
import work2 from "../assets/img/work2.png";
import work3 from "../assets/img/work3.png";
import star from "../assets/img/star.svg";
import Experience from "./HomeComponents/Experience";
import Blog from "./HomeComponents/Blog";

function Home() {
  const workImages = {
    [WORKS.ANALYSIS]: work1,
    [WORKS.FORTKNOX]: work2,
    [WORKS.ZENOCIDE]: work3,
  };

  const blogImages = {
    [BLOGS.BLOG_1]: work1,
    [BLOGS.BLOG_2]: work2,
    [BLOGS.BLOG_3]: work3,
  };

  return (
    <div className="flex flex-col gap-10">
      {/*Hero*/}
      <div>
        <Hero />
      </div>

      {/* Expertise */}
      <div>
        <Title path={star} name="Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
          {EXPERTISE_CONFIG.map((service) => (
            <div key={service?.key}>
              <h3 className="text-lg font-bold mb-2">▪ {service?.title}</h3>
              <p className="text-sm leading-relaxed">{service?.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work */}
      <div className="flex flex-col gap-7">
        <Title path={star} name="Work" isViewAll />

        <div className="flex flex-col gap-5">
          {Object.values(WORK_CONFIG).map((work) => (
            <Work
              key={work?.key}
              img={workImages[work?.key] || null}
              title={work?.title}
              desc={work?.desc}
              tags={work?.tags}
              btnText={work?.btnText}
            />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col gap-7 mt-10">
        <Title path={star} name="Experience" />

        <div className="flex flex-col gap-5">
          {EXPERIENCES_CONFIG.map((experience, index) => (
            <Experience
              key={index}
              role={experience?.role}
              name={experience?.name}
              date={experience?.date}
            />
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="flex flex-col gap-7 mt-10">
        <Title path={star} name="Blog" isViewAll />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {Object.values(BLOGS_CONFIG).map((blog) => (
              <Blog
                key={blog?.key}
                img={blogImages[blog?.key] || null}
                title={blog?.title}
                date={blog?.date}
                tags={blog?.tags}
                btnText={blog?.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
