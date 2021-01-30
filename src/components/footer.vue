<template>
  <div class="footer">
    <div class="socials">
      <a href="linkedin.com/in/michael-shumaker-ms" target="_blank">
        <img src="../assets/linkedin.svg" alt="" srcset="" />
      </a>
      <a href="https://twitter.com/TheMShumaker" target="_blank">
        <img src="../assets/twitter.svg" alt="" srcset="" />
      </a>
    </div>
    <div class="misc">
      <strong>Let's talk</strong>
      <p>+234 810 395 1178</p>
      <a href="mailto:Mshumaker.ms@gmail.com">Mshumaker.ms@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 20px auto;
}
.socials img {
  margin-right: 30px;
}
.misc {
  text-align: right;
}
.misc p {
  margin: 10px 0;
}
.misc a {
  color: black;
  text-decoration: none;
}
@media (max-width: 482px) {
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 170px;
    width: 90%;
    margin: 20px auto;
  }
  .socials img {
    margin: 0 20px;
  }
  .misc {
    text-align: center;
  }
  .misc p {
    margin: 10px 0;
  }
}
</style>
