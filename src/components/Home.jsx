import Hero from "./HomeComponents/Hero";
import Title from "../common/coreComponent/Title";
import Work from "./HomeComponents/Work";
import Experience from "./HomeComponents/Experience";
import Blog from "./HomeComponents/Blog";
import TestimonialSlider from "./HomeComponents/TestimonialSlider";

import {
  EXPERTISE_CONFIG,
  WORK_CONFIG,
  BLOGS_CONFIG,
  EXPERIENCES_CONFIG,
  TESTIMONIALS,
} from "../common/enums/home";

function Home() {
  const star = "../../public/assets/img/star.svg";

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
          {WORK_CONFIG.map((work, index) => (
            <Work
              key={index}
              img={work?.img || null}
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
            {BLOGS_CONFIG.map((blog, index) => (
              <Blog
                key={index}
                img={blog?.img || null}
                title={blog?.title}
                date={blog?.date}
                tags={blog?.tags}
                btnText={blog?.btnText}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex flex-col mt-10">
        <Title path={star} name="What they say" />
        <TestimonialSlider testimonials={TESTIMONIALS} />
      </div>
    </div>
  );
}

export default Home;
