<template>
  <div>
    <div class="head">
      <div class="head_content">
        <h2>Hello, there!</h2>
        <p class="head_content_p1 one">
          I’m certain you came here wondering what is so<br />
          great about me, and what I do 🙂.
        </p>
        <p class="head_content_p1 two">
          I’m certain you came here wondering what is so
          great about me, and what I do 🙂.
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 85vh;
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
  line-height: 35px;
}
.head_content_p2 {
  line-height: 45px;
}
.head_content_p2.two, .head_content_p1.two {
  display: none;
}
.head_content_p2 span {
  color: #2fa6ff;
  font-size: 40px;
  font-weight: 500;
}
.head_img {
  width: 380px;
}
@media (max-width: 1110px) {
  .head {
    flex-direction: column;
  }
  .head_img {
    width: 300px;
  }
  .head_content p {
    font-size: 17px;
    line-height: 20px;
  }
  .head_content_p2 {
    line-height: 35px;
  }
  .head_content_p2.one, .head_content_p1.one {
    display: none;
  }
  .head_content_p2.two, .head_content_p1.two {
    display: block;
  }
  .head_content_p2 span {
    font-size: 20px;
  }
}
</style>
