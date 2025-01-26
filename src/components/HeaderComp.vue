<script setup></script>
<template>
    <header class="header_area">
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <router-link class="navbar-brand logo_h" to="/"
                        ><img src="../assets/img/logo.png" alt=""
                    /></router-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div
                        class="collapse navbar-collapse offset"
                        id="navbarSupportedContent"
                    >
                        <ul class="nav navbar-nav menu_nav justify-content-end">
                            <li
                                class="nav-item"
                                :class="{ active: $route.path === '/' }"
                            >
                                <router-link class="nav-link" to="/"
                                    >Home</router-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                :class="{ active: $route.path === '/about' }"
                            >
                                <router-link class="nav-link" to="/about"
                                    >About</router-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                :class="{ active: $route.path === '/services' }"
                            >
                                <router-link class="nav-link" to="/services"
                                    >Services</router-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                :class="{
                                    active: $route.path === '/portfolio',
                                }"
                            >
                                <router-link class="nav-link" to="/portfolio"
                                    >Portfolio</router-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                :class="{ active: $route.path === '/blog' }"
                            >
                                <router-link class="nav-link" to="/blog"
                                    >Blog</router-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                :class="{ active: $route.path === '/contact' }"
                            >
                                <router-link class="nav-link" to="/contact"
                                    >Contact</router-link
                                >
                            </li>
                            <!-- <li class="nav-item submenu dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Pages</a
                >
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="elements.html">Elements</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="portfolio-details.html"
                      >Portfolio Details</a
                    >
                  </li>
                </ul>
              </li> -->
                            <!-- <li class="nav-item submenu dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Blog</a
                >
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="single-blog.html">Blog Details</a>
                  </li>
                </ul>
              </li> -->
                            <!-- <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li> -->
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<style scoped></style>
