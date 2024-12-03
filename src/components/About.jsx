import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function About(){
    return(
        <div className="px-4 md:py-24 py-14 pt-28 text-center bg-white text-slate-800 md:mt-0 mt-40" id="about"   data-aos="fade-up"
        data-aos-duration="5000">
            <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl text-4xl mb-10 font-semibold">About Me</h1>
            <p className="text-lg">Hi! I’m Obidiran Kehinde Ayodeji, a talented and dedicated software engineer
                known for his expertise in designing, developing, and optimizing software solutions. With a deep
                understanding of programming languages, frameworks, and modern technologies, he thrives in creating
                innovative applications that address real-world problems. I also committed to continuous learning,
                staying updated with industry trends, and leveraging my skills to deliver efficient, scalable, and 
                user-centric software. I have a problem solving mindset, attention to detail, and collaborative
                spirit make him a valuable contributor to any development team. Whether tackling complex algorithms
                or designing intuitive user interfaces, also driven by a passion for excellence in software engineering.
                </p>
            </div>
        </div>
    );
}

export default About