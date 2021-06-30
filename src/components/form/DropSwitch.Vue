

<template>
    <div>
  
  
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
    />

    <div class="container mx-auto">
      <div
        class="group relative flex flex-column overflow-hidden p-4 pr-12 bg-indigo-800 outline-none rounded my-2 cursor-pointer select-dropdown"
        tabindex="1"
      >
        <!-- select icon -->
        <div
          class="h-8 w-8 border border-indigo-200 inline-flex items-center justify-center text-indigo-200 absolute right-0 top-0 mt-4 mr-4 rounded-full transform ease-in-out duration-500 group-focus:rotate-180"
        >
          <span class="material-icons">
            keyboard_arrow_down
          </span>
        </div>
        <!-- select icon -->
        <div class="flex-col flex-grow">
          <!-- options -->
          <div class="flex items-center relative">
            <input
              class="opacity-0 absolute appearance-none"
              type="radio"
              id="default"
              name="gender"
              value="null"
              checked
              disabled
            />
            <label
              class="flex hidden py-1 flex-grow group-focus:flex text-white cursor-pointer"
              for="default"
              >Login With Email or Phone</label
            >
          </div>

          <!--  -->
          <div class="flex items-center relative">
            <input
              class="opacity-0 absolute appearance-none"
              type="radio"
              id="option1"
              name="gender"
              value="Phone"
            />
            <label
              class="flex hidden py-1 flex-grow group-focus:flex text-white hover:bg-indigo-900 cursor-pointer"
              for="option1"
              >Phone</label
            >
          </div>
          <!--  -->
          <div class="flex items-center relative">
            <input
              class="opacity-0 absolute appearance-none"
              type="radio"
              id="option2"
              name="gender"
              value="email"
            />
            <label
              class="flex hidden py-1 flex-grow group-focus:flex text-white hover:bg-indigo-900 cursor-pointer"
              for="option2"
              >Email</label
            >
          </div>
          <!-- options -->
        </div>
      </div>
    </div>
      
  </div>
</template>

<style scoped>
      	/* ----- custom css ----------*/
      @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.login form .select-dropdown input[type="radio"]:checked,
.select-dropdown input[type="radio"]:checked + label {
  display: inline-block;
}

      /* ------- code generated using built tool ------------*/
      
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

.login form button,
.login form input,
.login form optgroup,
.login form select,
.login form textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.login form button,
.login form input {
  overflow: visible;
}
.login form button,
.login form select {
  text-transform: none;
}
.login form [type="button"],
.login form [type="reset"],
.login form [type="submit"],
.login form button {
  -webkit-appearance: button;
}
.login form [type="button"]::-moz-focus-inner,
.login form [type="reset"]::-moz-focus-inner,
.login form [type="submit"]::-moz-focus-inner,
.login form button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
.login form [type="button"]:-moz-focusring,
.login form [type="reset"]:-moz-focusring,
.login form [type="submit"]:-moz-focusring,
.login form button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
.login form fieldset {
  padding: 0.35em 0.75em 0.625em;
}
.login form legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
.login form progress {
  vertical-align: baseline;
}
.login form textarea {
  overflow: auto;
}
.login form [type="checkbox"],
.login form [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.login form [type="number"]::-webkit-inner-spin-button,
.login form [type="number"]::-webkit-outer-spin-button {
  height: auto;
}
.login form [type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
.login form [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.login form ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
.login form details {
  display: block;
}
.login form summary {
  display: list-item;
}
.login form [hidden],
.login form template {
  display: none;
}


      
</style>