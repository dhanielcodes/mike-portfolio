<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }">
      <img class="nav_logo" src="../assets/logo.svg" alt="" />
    </router-link>
    <ul class="nav_links">
      <div class="nav_burg" :class="{ open: open }">
        <div class="overlay" @click="open = false" :class="{ open: open }"></div>
        <div class="burger">
          <svg
            :class="{ open: open }"
            @click="open = false"
            class="close"
            width="54"
            height="48"
            viewBox="0 0 54 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 48L16 48C7.16344 48 0 40.8366 0 32L0 16C0 7.16344 7.16344 0 16 0L54 0L54 48Z"
              fill="#F3FAFF"
            />
            <path
              d="M33.3636 30.364C33.7541 29.9734 33.7541 29.3403 33.3636 28.9497L28.4145 24.0007L33.365 19.0502C33.7555 18.6597 33.7555 18.0266 33.3649 17.636C32.9744 17.2455 32.3413 17.2455 31.9507 17.636L27.0003 22.5865L22.0499 17.636C21.6594 17.2455 21.0262 17.2455 20.6357 17.636C20.2451 18.0266 20.2451 18.6597 20.6357 19.0502L25.5861 24.0007L20.637 28.9497C20.2465 29.3403 20.2465 29.9734 20.637 30.364C21.0275 30.7545 21.6607 30.7545 22.0512 30.364L27.0003 25.4149L31.9494 30.364C32.3399 30.7545 32.9731 30.7545 33.3636 30.364Z"
              fill="#040921"
            />
          </svg>

          <svg
            :class="{ open: open }"
            @click="open = true"
            class="pullout"
            width="54"
            height="48"
            viewBox="0 0 54 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H38C46.8366 0 54 7.16344 54 16V32C54 40.8366 46.8366 48 38 48H0V0Z"
              fill="#2FA6FF"
            />
            <path
              d="M30.2929 28.2929C29.9024 28.6834 29.9024 29.3166 30.2929 29.7071C30.6834 30.0976 31.3166 30.0976 31.7071 29.7071L36.7071 24.7071C37.0976 24.3166 37.0976 23.6834 36.7071 23.2929L31.7071 18.2929C31.3166 17.9024 30.6834 17.9024 30.2929 18.2929C29.9024 18.6834 29.9024 19.3166 30.2929 19.7071L33.5858 23L19.9444 23C19.4228 23 19 23.4477 19 24C19 24.5523 19.4228 25 19.9444 25L33.5858 25L30.2929 28.2929Z"
              fill="#F3FAFF"
            />
          </svg>
        </div>
        <router-link class="nav_link" :to="{ name: 'Projects' }">Projects</router-link>
        <a class="nav_link" href="/#about">About me</a>
        <a class="nav_link nav_cta" href="/#contact">Get in touch</a>
      </div>
      <a class="nav_link nav_cta" href="/#contact">Get in touch</a>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const open = ref(false);

    function toggle() {}

    return { open, toggle };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  width: 1200px;
  margin: auto;
  z-index: 7000px;
}
@media (max-width: 1270px) {
  .nav {
    width: 92%;
  }
}
.nav_logo {
  width: 60px;
}
.nav_links {
  display: flex;
  align-items: center;
}
.nav_link {
  color: #092133;
  text-decoration: none;
  margin-left: 30px;
  font-size: 15px;
}
.nav_link.nav_cta {
  padding: 12px 15px;
  background: #2fa6ff;
  border-radius: 10px;
}
.burger {
  display: none;
  cursor: pointer;
}
.nav_burg .nav_link.nav_cta {
  display: none;
}
@media (max-width: 600px) {
  .burger {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 1;
  }
  .nav_link.nav_cta {
    margin-right: 0;
  }
  .nav_burg {
    position: fixed;
    top: 0;
    left: 0;
    background: #2fa6ff;
    height: 100vh;
    width: 80%;
    display: flex;
    padding: 20px 40px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all 0.3s;
    transform: translateX(-100%);
  }

  .nav_burg .nav_link {
    margin-bottom: 20px;
  }
  .nav_burg .nav_link.nav_cta {
    display: block;
    background: #092133;
    color: #2fa6ff;
  }
  .overlay {
    position: fixed;
    right: 0;
    top: 0;
    width: 20%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.288);
    backdrop-filter: blur(5px);
    transition: all 0.3s;
  }
  .pullout {
    transition: all 0.3s;
  }
  .pullout.open {
    opacity: 0;
    pointer-events: none;
  }
  .nav_burg.open {
    transform: translateX(0%);
  }
  .overlay.open {
    transform: translateX(99.9%);
    width: 30%;
  }
}
</style>
