<template>
  <div>
    <!-- TOP -->
    <div class="head">
      <div class="head_content">
        <h2>Hello, there!</h2>
        <p class="head_content_p1 one">
          I’m certain you came here wondering what is so<br />
          great about me, and what I do 🙂.
        </p>
        <p class="head_content_p1 two">
          I’m certain you came here wondering what is so great about me, and what I do 🙂.
        </p>
        <p class="head_content_p2 one">
          I am <span>Michael Shumaker</span><br />
          a passionate multidisciplinary UI / UX<br />
          designer with dyslexia, but most of all I am <br />
          interested in the process, outcomes and the<br />
          behavioural changes the solutions I create <br />
          have in both user’s, stakeholder, and how it <br />
          affects their lives.
        </p>
      </div>
      <img src="../assets/hero-img.png" alt="" class="head_img" />
      <p class="head_content_p2 two">
        I am <span>Michael Shumaker</span>
        a passionate multidisciplinary UI / UX designer with dyslexia, but most of all I
        am interested in the process, outcomes and the behavioural changes the solutions I
        create have in both user’s, stakeholder, and how it affects their lives.
      </p>
    </div>
    <div class="scroll">
      <p>Scroll down</p>
      <img src="../assets/scroll.svg" alt="" />
    </div>
    <!-- Projects -->
    <div class="projects">
      <h1 class="projects_heading">What I have been up to</h1>

      <p class="projects_p">
        Asides the times I am building amazing user experiences and interfaces for
        startups, helping them acquire and retain users, other times I'm probably looking
        for the next anime to watch or the next recipe to cook. in the meantime, feel free
        to go through the projects i have been opportune to create.
      </p>

      <div class="projects_case" v-for="(item, index) in projects" :key="index">
        <div class="projects_case_about">
          <div>
            <p class="projects_case_about_tag">{{ item.tag }}</p>
            <h1 class="projects_case_about_title">{{ item.title }}</h1>
            <p class="projects_case_about_desc">{{ item.desc }}</p>
          </div>
          <button class="projects_case_about_btn">view case study</button>
        </div>
        <img :src="item.img" alt="" />
      </div>

      <button class="projects_btn">
        <span>View all projects </span>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.292894 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292894 1.70711C-0.0976306 1.31658 -0.0976306 0.683417 0.292894 0.292893Z"
            fill="#2FA6FF"
          />
        </svg>
      </button>
    </div>
    <div class="testimonials">
      <h1>Testimonials</h1>
      <div class="says">
        <div class="say">
          <div class="say_person">
            <img src="../assets/test.png" alt="" srcset="" />
            <div class="says_person_name">
              <h5>John Ruffalo</h5>
              <p>CEO Ron corp</p>
            </div>
          </div>
          <p class="say_desc">
            “He is very meticuluos with his process it was fun working with him”
          </p>
        </div>
        <div class="say">
          <div class="say_person">
            <img src="../assets/test.png" alt="" srcset="" />
            <div class="says_person_name">
              <h5>John Ruffalo</h5>
              <p>CEO Ron corp</p>
            </div>
          </div>
          <p class="say_desc">
            “He is very meticuluos with his process it was fun working with him”
          </p>
        </div>
        <div class="say">
          <div class="say_person">
            <img src="../assets/test.png" alt="" srcset="" />
            <div class="says_person_name">
              <h5>John Ruffalo</h5>
              <p>CEO Ron corp</p>
            </div>
          </div>
          <p class="say_desc">
            “He is very meticuluos with his process it was fun working with him”
          </p>
        </div>
        <div class="say">
          <div class="say_person">
            <img src="../assets/test.png" alt="" srcset="" />
            <div class="says_person_name">
              <h5>John Ruffalo</h5>
              <p>CEO Ron corp</p>
            </div>
          </div>
          <p class="say_desc">
            “He is very meticuluos with his process it was fun working with him”
          </p>
        </div>
      </div>
    </div>
    <div class="about" id="about">
      <img src="../assets/about-img.png" alt="" />
      <div class="about_content">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis est lectus
          luctus ac vel. Nulla enim sapien a, odio nec lorem sit. Ac pulvinar amet sit
          facilisi. Dignissim mauris senectus sed neque bibendum libero. Vel eu risus nisi
          porttitor. Turpis libero, facilisis bibendum elementum, elit velit, porta
          mattis.
        </p>
        <button>
          <span>Get my CV</span>
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 18H14.5L14.5 5.82843L10.6716 2H2.5V18ZM2.5 0C1.39543 0 0.5 0.895431 0.5 2V18C0.5 19.1046 1.39543 20 2.5 20H14.5C15.6046 20 16.5 19.1046 16.5 18V5.82843C16.5 5.29799 16.2893 4.78929 15.9142 4.41421L12.0858 0.585786C11.7107 0.210714 11.202 0 10.6716 0H2.5Z"
              fill="#040921"
            />
            <path
              d="M4.5 15C4.5 14.4477 4.94772 14 5.5 14H11.5C12.0523 14 12.5 14.4477 12.5 15C12.5 15.5523 12.0523 16 11.5 16H5.5C4.94772 16 4.5 15.5523 4.5 15Z"
              fill="#040921"
            />
            <path
              d="M4.5 11C4.5 10.4477 4.94772 10 5.5 10H9.5C10.0523 10 10.5 10.4477 10.5 11C10.5 11.5523 10.0523 12 9.5 12H5.5C4.94772 12 4.5 11.5523 4.5 11Z"
              fill="#040921"
            />
            <path
              d="M4.5 7C4.5 6.44772 4.94772 6 5.5 6H7.5C8.05228 6 8.5 6.44772 8.5 7C8.5 7.55228 8.05228 8 7.5 8H5.5C4.94772 8 4.5 7.55228 4.5 7Z"
              fill="#040921"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="contact">
      <h1>Let's work together</h1>
      <p>Shoot me a message</p>

      <form>
        <div class="contact_fields">
          <div class="contact_fields_field">
            <label for="name">Your Full Name</label>
            <input placeholder="John Doe" type="text" name="" id="" />
          </div>

          <div class="contact_fields_field">
            <label for="name">Email</label>
            <input placeholder="JohnDoe@email.com" type="text" name="" id="" />
          </div>

          <div class="contact_fields_field text">
            <label for="name">Your Message</label>
            <textarea
              placeholder="Start typing..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>

        <button>Get in touch</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const projects = ref([
      {
        tag: "UI / UX",
        title: "Project title",
        desc: "Project summary is a b2b company that specialise in crypto........",
        img: require("../assets/project-img.svg"),
      },
      {
        tag: "UI / UX",
        title: "Project title",
        desc: "Project summary is a b2b company that specialise in crypto........",
        img: require("../assets/project-img.svg"),
      },
      {
        tag: "UI / UX",
        title: "Project title",
        desc: "Project summary is a b2b company that specialise in crypto........",
        img: require("../assets/project-img.svg"),
      },
    ]);

    const testimonials = ref([
      {
        desc: "",
        name: "",
        occupation: "",
      },
      {
        desc: "",
        name: "",
        occupation: "",
      },
      {
        desc: "",
        name: "",
        occupation: "",
      },
    ]);

    return { projects, testimonials };
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: auto;
  min-height: 75vh;
}

.head_content h2 {
  color: #092133;
  margin-bottom: 20px;
}
.head_content p {
  font-size: 23px;
}
.head_content_p1 {
  margin-bottom: 40px;
  line-height: 36px;
}
.head_content_p2 {
  line-height: 40px;
}
.head_content_p2.two,
.head_content_p1.two {
  display: none;
}
.head_content_p2 span {
  color: #2fa6ff;
  font-size: 40px;
  font-weight: 500;
}
.head_img {
  width: 450px;
}
.scroll {
  margin: 40px 0;
  min-height: 5vh;
  text-align: center;
}
.scroll p {
  margin-bottom: 10px;
}
/* PROJECTS */
.projects {
  background: #092133;
  color: #f3faff;
  padding: 50px 200px;
  width: 100%;
}
.projects_heading {
  color: white;
  margin-bottom: 20px;
}
.projects_p {
  width: 600px;
  line-height: 30px;
  margin-bottom: 110px;
}
.projects_case {
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.projects_case_about {
  background: #f3faff;
  color: #092133;
  width: 40%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}
.projects_case_about_tag,
.projects_case_about_title {
  margin-bottom: 20px;
}
.projects_case_about_btn {
  padding: 20px 23px;
  background: #2fa6ff;
  color: #092133;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 17px;
}
.projects_case img {
  width: 60%;
}
.projects_btn {
  padding: 20px 23px;
  background: none;
  color: #2fa6ff;
  border: 1px solid #2fa6ff;
  width: 220px;
  margin: 20px auto;
  outline: none;
  border-radius: 10px;
  font-size: 17px;
}
.projects_btn span {
  margin-right: 10px;
}
/* TESTIMONIALS */
.testimonials {
  padding: 50px 20px;
}
.testimonials h1 {
  text-align: center;
}
.says {
  display: grid;
  grid-template-columns: repeat(4, 320px);
  grid-gap: 20px;
  padding: 50px 0px;
  width: 80%;
  margin: 40px auto;
  overflow: hidden;
  overflow-x: scroll;
}
.says::-webkit-scrollbar {
  height: 5px;
}
.says::-webkit-scrollbar-thumb {
  background: #092133;
  border-radius: 100px;
}
.say {
  padding: 20px;
  background: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.118);
}
.say_person {
  display: flex;
  align-items: center;
}
.say_person img {
  margin-right: 10px;
}
/* ABOUT */
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  min-height: 80vh;
  margin: 100px auto;
}
.about h1,
.about p {
  margin-bottom: 20px;
}
.about p {
  line-height: 30px;
  width: 400px;
  align-self: flex-end;
}
.about button {
  padding: 17px 30px;
  background: #2fa6ff;
  color: #092133;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about button span {
  margin-right: 10px;
}
.about button svg {
  width: 14px;
}
.contact {
  background: #2fa6ff;
  padding: 50px 200px;
}
.contact_fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 40px 0;
}
.contact_fields label {
  font-weight: 500;
}
.contact_fields input,
.contact_fields textarea {
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background: #faf8f8;
  outline: none;
}
.text {
  width: 100%;
  grid-column: 1/3;
}
.contact button {
  padding: 17px 30px;
  background: #092133;
  color: #2fa6ff;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
}
::placeholder {
  color: #7d8b95, 100%;
}
@media (max-width: 1270px) {
  .head,
  .about {
    width: 92%;
  }
}
@media (max-width: 1278px) {
  .projects {
    padding: 100px;
  }
  .contact {
    background: #2fa6ff;
    padding: 50px;
  }
  .contact_fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 40px 0;
  }
}
@media (max-width: 1110px) {
  .head {
    flex-direction: column;
  }
  .head_img,
  .about img {
    width: 300px;
  }
  .head_content p {
    font-size: 17px;
  }
  .head_content_p1 {
    line-height: 33px;
  }
  .head_content_p2 {
    line-height: 35px;
  }
  .head_content_p2.one,
  .head_content_p1.one {
    display: none;
  }
  .head_content_p2.two,
  .head_content_p1.two {
    display: block;
  }
  .head_content_p2 span {
    font-size: 20px;
  }

  .projects_case {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column-reverse;
    margin-top: 50px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  .projects_case_about {
    padding: 30px;
    width: 100%;
    height: 300px;
  }
  .projects_case img {
    width: 100%;
  }
  .about {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    margin: 100px auto;
  }
  .about p {
    line-height: 30px;
    width: 100%;
    align-self: flex-end;
  }
}
@media (max-width: 740px) {
  .projects {
    padding: 25px;
  }
  .projects_heading {
    font-size: 20px;
  }
  .projects_p {
    width: 100%;
    font-size: 14px;
  }
  .projects_case_about_title {
    font-size: 20px;
  }
  .projects_case_about_desc {
    font-size: 13px;
  }
  .projects_case_about_btn {
    font-size: 14px;
    padding: 15px;
  }
}
@media (max-width: 468px) {
  .says {
    display: grid;
    grid-template-columns: repeat(4, 100%);
    grid-gap: 20px;
    padding: 50px 0px;
    width: 95%;
    margin: 40px auto;
    overflow: hidden;
    overflow-x: scroll;
  }
  .contact {
    background: #2fa6ff;
    padding: 20px;
  }
  .contact_fields {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin: 40px 0;
  }
  .text {
    width: 100%;
    grid-column: 1/2;
  }
}
</style>
