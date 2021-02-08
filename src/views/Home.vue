<template>
  <div>
    <Nav />
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
          have in both users, stakeholders and how it <br />
          affects their lives.
        </p>
      </div>
      <img src="../assets/hero-img.png" alt="" class="head_img" />
      <p class="head_content_p2 two">
        I am <span>Michael Shumaker</span>
        a passionate multidisciplinary UI / UX designer with dyslexia, but most of all I
        am interested in the process, outcomes and the behavioural changes the solutions I
        create have in both users, stakeholders and how it affects their lives.
      </p>
    </div>
    <div class="scroll">
      <p>Scroll down</p>
      <img src="../assets/scroll.svg" alt="" />
    </div>
    <!-- Projects -->
    <div class="projects">
      <h1 class="projects_heading">What I have been up to</h1>

      <div class="projects_case" v-for="(item, index) in projects" :key="index">
        <div class="projects_case_about">
          <div>
            <p class="projects_case_about_tag">UI / UX</p>
            <h1 class="projects_case_about_title">{{ item.title }}</h1>
            <p class="projects_case_about_desc">{{ item.desc }}</p>
          </div>
          <a @click="msg" :href="item.link"
            ><button class="projects_case_about_btn">view case study</button></a
          >
        </div>
        <img :src="item.img" alt="" />
      </div>

      <a href="/projects">
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
      </a>
    </div>
    <div class="testimonials">
      <h1>Latest feedback</h1>
      <div class="says">
        <div class="say" v-for="(item, index) in testimonials" :key="index">
          <div class="say_person">
            <img src="../assets/test.png" alt="" srcset="" />
            <div class="says_person_name">
              <h5>{{ item.name }}</h5>
              <p>{{ item.occupation }}</p>
            </div>
          </div>
          <p class="say_desc">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="about" id="about">
      <img src="../assets/about-img.png" alt="" />
      <div class="about_content">
        <h1>About me</h1>
        <p>“Everything is figure-out-able”</p>
        <p>
          I live by this quote, it has built me into a competent problem solving human, it
          means that no matter how difficult a situation is, I would always find a way
          out.
        </p>
        <p>
          My name is <span>Michael Shumaker</span>, you can also call me satoshi 16px. I
          am a multi-disciplinary UI/UX designer, I have been solving design problems for
          the past 7 years, solving web and mobile problems for over a year.
        </p>
        <p>
          As a UI/UX designer the impact of a product on the product owner and the users
          is very important to me Empathy, Testing, iterations, simplicity, and asking why
          are always involved in my design process.
        </p>
        <p>
          Being a desiger with dyslexia is a struggle and as much as I struggle, it has
          helped me be more patient, empathetic, extremely meticulous in the details, have
          a minimalist approach in UI design and big on accessability.
        </p>
        <p>
          I do however enjoy, researching, unconventional conversations, extreme sports,
          animes, cooking, and working without music.
        </p>
        <router-link to="/resume" target="_blank">
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
        </router-link>
      </div>
    </div>
    <div class="contact" id="contact">
      <h1>Let's work together</h1>
      <p>Shoot me a message</p>

      <form @submit.prevent="submitForm">
        <div class="contact_fields">
          <div class="contact_fields_field">
            <label for="name">Your Full Name</label>
            <input
              v-model="name"
              required
              placeholder="John Doe"
              type="text"
              name=""
              id=""
            />
          </div>

          <div class="contact_fields_field">
            <label for="name">Email</label>
            <input
              v-model="email"
              required
              placeholder="JohnDoe@email.com"
              type="text"
              name=""
              id=""
            />
          </div>

          <div class="contact_fields_field text">
            <label for="name">Your Message</label>
            <textarea
              v-model="message"
              required
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
      <div class="toast" :class="{ sent: sent }">
        <svg
          width="822"
          height="397"
          viewBox="0 0 822 397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="822" height="397" rx="40" fill="#41B883" />
          <path
            d="M251.935 250.864C244.447 250.864 237.247 249.664 230.335 247.264C223.519 244.864 218.239 241.696 214.495 237.76L218.671 229.552C222.319 233.2 227.167 236.176 233.215 238.48C239.263 240.688 245.503 241.792 251.935 241.792C260.959 241.792 267.727 240.16 272.239 236.896C276.751 233.536 279.007 229.216 279.007 223.936C279.007 219.904 277.759 216.688 275.263 214.288C272.863 211.888 269.887 210.064 266.335 208.816C262.783 207.472 257.839 206.032 251.503 204.496C243.919 202.576 237.871 200.752 233.359 199.024C228.847 197.2 224.959 194.464 221.695 190.816C218.527 187.168 216.943 182.224 216.943 175.984C216.943 170.896 218.287 166.288 220.975 162.16C223.663 157.936 227.791 154.576 233.359 152.08C238.927 149.584 245.839 148.336 254.095 148.336C259.855 148.336 265.471 149.152 270.943 150.784C276.511 152.32 281.311 154.48 285.343 157.264L281.743 165.76C277.519 162.976 273.007 160.912 268.207 159.568C263.407 158.128 258.703 157.408 254.095 157.408C245.263 157.408 238.591 159.136 234.079 162.592C229.663 165.952 227.455 170.32 227.455 175.696C227.455 179.728 228.655 182.992 231.055 185.488C233.551 187.888 236.623 189.76 240.271 191.104C244.015 192.352 249.007 193.744 255.247 195.28C262.639 197.104 268.591 198.928 273.103 200.752C277.711 202.48 281.599 205.168 284.767 208.816C287.935 212.368 289.519 217.216 289.519 223.36C289.519 228.448 288.127 233.104 285.343 237.328C282.655 241.456 278.479 244.768 272.815 247.264C267.151 249.664 260.191 250.864 251.935 250.864ZM376.528 215.296H313.168C313.744 223.168 316.768 229.552 322.24 234.448C327.712 239.248 334.624 241.648 342.976 241.648C347.68 241.648 352 240.832 355.936 239.2C359.872 237.472 363.28 234.976 366.16 231.712L371.92 238.336C368.56 242.368 364.336 245.44 359.248 247.552C354.256 249.664 348.736 250.72 342.688 250.72C334.912 250.72 328 249.088 321.952 245.824C316 242.464 311.344 237.856 307.984 232C304.624 226.144 302.944 219.52 302.944 212.128C302.944 204.736 304.528 198.112 307.696 192.256C310.96 186.4 315.376 181.84 320.944 178.576C326.608 175.312 332.944 173.68 339.952 173.68C346.96 173.68 353.248 175.312 358.816 178.576C364.384 181.84 368.752 186.4 371.92 192.256C375.088 198.016 376.672 204.64 376.672 212.128L376.528 215.296ZM339.952 182.464C332.656 182.464 326.512 184.816 321.52 189.52C316.624 194.128 313.84 200.176 313.168 207.664H366.88C366.208 200.176 363.376 194.128 358.384 189.52C353.488 184.816 347.344 182.464 339.952 182.464ZM436.075 173.68C445.579 173.68 453.115 176.464 458.683 182.032C464.347 187.504 467.179 195.52 467.179 206.08V250H456.955V207.088C456.955 199.216 454.987 193.216 451.051 189.088C447.115 184.96 441.499 182.896 434.203 182.896C426.043 182.896 419.563 185.344 414.763 190.24C410.059 195.04 407.707 201.712 407.707 210.256V250H397.483V174.256H407.275V188.224C410.059 183.616 413.899 180.064 418.795 177.568C423.787 174.976 429.547 173.68 436.075 173.68ZM534.824 245.392C532.904 247.12 530.504 248.464 527.624 249.424C524.84 250.288 521.912 250.72 518.84 250.72C511.736 250.72 506.264 248.8 502.424 244.96C498.584 241.12 496.664 235.696 496.664 228.688V182.896H483.128V174.256H496.664V157.696H506.888V174.256H529.928V182.896H506.888V228.112C506.888 232.624 507.992 236.08 510.2 238.48C512.504 240.784 515.768 241.936 519.992 241.936C522.104 241.936 524.12 241.6 526.04 240.928C528.056 240.256 529.784 239.296 531.224 238.048L534.824 245.392ZM589.539 149.2H601.635L599.475 219.76H591.555L589.539 149.2ZM595.587 250.72C593.475 250.72 591.651 250 590.115 248.56C588.675 247.024 587.955 245.248 587.955 243.232C587.955 241.12 588.675 239.392 590.115 238.048C591.555 236.608 593.379 235.888 595.587 235.888C597.699 235.888 599.475 236.608 600.915 238.048C602.355 239.392 603.075 241.12 603.075 243.232C603.075 245.248 602.355 247.024 600.915 248.56C599.475 250 597.699 250.72 595.587 250.72Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import { db } from "@/firebase/firebaseInit";
import firebase from "firebase";
import { ref, toRefs, reactive } from "vue";

import Nav from "../components/Nav.vue";
import Foot from "../components/footer.vue";

export default {
  components: {
    Nav,
    Foot,
  },
  setup() {
    const state = reactive({
      projects: [],
      loading: true,
      sent: false,
    });
    db.collection("projects")
      .orderBy("id")
      .get()
      .then((response) => {
        response.forEach((data) => {
          const doc = {
            title: data.data().title,
            desc: data.data().desc,
            link: data.data().link,
            img: data.data().img,
          };
          state.projects.unshift(doc);
          state.loading = false;
        });
      });

    const testimonials = ref([
      {
        desc: " “He is very meticuluos with his process it was fun working with him”",
        name: "John Ruffalo",
        occupation: "CEO Ron corp",
      },
      {
        desc: " “He is very meticuluos with his process it was fun working with him”",
        name: "John Ruffalo",
        occupation: "CEO Ron corp",
      },
    ]);

    function msg() {
      alert(
        "I'm sorry i have to take you to another site to view this case study, i still owe the developer a pack of beer😩"
      );
    }

    //FORM SUBMISSION
    const name = ref("");
    const email = ref("");
    const message = ref("");

    var messagesRef = firebase.database().ref("michael-shumakers-portfolio-default-rtdb");

    function submitForm() {
      saveMessage(name.value, email.value, message.value);
      state.sent = true;
      setTimeout(() => {
        location.reload();
      }, 2000);
    }

    // Save message to firebase
    function saveMessage(name, email, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        message: message,
      });
    }

    return { msg, testimonials, name, email, message, submitForm, ...toRefs(state) };
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
.toast {
  position: fixed;
  bottom: 0px;
  right: 20px;
  transform: translateY(58%);
  width: 100px;
  z-index: 2000;
  transition: all 0.3s;
}
.toast.sent {
  transform: translateY(45%);
}
.toast svg {
  width: 100%;
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
  min-height: 360px;
  min-height: auto;
  border-radius: 10px;
  overflow: hidden;
}
.projects_case_about {
  background: #f3faff;
  color: #092133;
  width: 40%;
  min-height: 360px;
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
.projects_case_about_title {
  font-size: 24px;
}
.projects_case_about_desc {
  font-size: 16px;
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 50px 0px;
  width: 600px;
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
  background: none;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
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
  width: 500px;
  align-self: flex-end;
}
.about p span {
  color: #2fa6ff;
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
.about a {
  text-decoration: none;
  color: #092133;
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
  .projects_case_about_desc {
    font-size: 12px;
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
  .says {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 50px 0px;
    width: 75%;
    margin: 40px auto;
    overflow: hidden;
    overflow-x: scroll;
  }
}
@media (max-width: 468px) {
  .says {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    padding: 50px 0px;
    width: 90%;
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
