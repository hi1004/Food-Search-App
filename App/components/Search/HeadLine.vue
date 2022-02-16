<template>
  <div class="container headLine-section">
    <img
      class="search_bg"
      src="~/assets/images/search.png"
      alt="search_bg" />
    <h1>
      <span>FOOD SEARCH</span><br />
      THE OPEN<br />
      FOOD DATABASE
    </h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nisi quibusdam quisquam placeat provident quas reiciendis aperiam blanditiis. Molestias molestiae iusto rerum sequi rem culpa amet, numquam maxime cum itaque! <br />
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
    <Search />
  </div> 
</template>

<style lang="scss" scoped>
.container.headLine-section {
  padding: 40px;
  height: 100vh;
}
.search_bg {
  
}
h1 {
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  span {
    color: $primary;
  }
}
p {
  margin: 30px 0;
  color: $gray-600;
}
</style>