<template>
  <div id="app">
    <vs-navbar
      v-model="indexActive"
      color="#ffff99"
      text-color="rgba(102, 102, 102, 6)"
      active-text-color="rgba(102, 102, 102, 1)">
      <vs-navbar-title>
        ToDo管理
      </vs-navbar-title>
      <vs-navbar-item index="0">
        <router-link to="#">Homeもくそもないが</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        は？
      </vs-navbar-item>

      <vs-spacer></vs-spacer>

      <vs-button
        vs-color-text="rgb(102, 102, 102, 1)"
        vs-color="rgba(102, 102, 102, 6)"
        vs-type="flat"
        vs-radius="50%"
        vs-icon="more_horiz"
        v-on:click="activeSideBar =! activeSideBar">
      </vs-button>

    </vs-navbar>

    <div ref="parentOfSideBar">
      <vs-sidebar
        v-bind:parent="$refs.parentOfSideBar"
        default-index="1"
        color="primary"
        spacer
        v-model="activeSideBar">
        <div
          class="header-sidebar"
          slot="header">
          <vs-avatar
            size="70px"
            src="https://randomuser.me/api/portraits/men/85.jpg"/>

          <h4>
            My Name
            <vs-button
              vs-color="primary"
              vs-icon="more_horiz"
              vs-type="flat">
            </vs-button>
          </h4>

        </div>

        <vs-sidebar-item
          index="1"
          icon="question_answer">
          Dashboard
        </vs-sidebar-item>

        <vs-sidebar-item
          index="2"
          icon="gavel">
          History
        </vs-sidebar-item>

        <vs-divider
          icon="person"
          position="left">
          User
        </vs-divider>

        <vs-sidebar-item
          index="3"
          icon="verified_user">
          Configurations
        </vs-sidebar-item>
        <vs-sidebar-item
          index="4"
          icon="account_box">
          Perfile
        </vs-sidebar-item>
        <vs-sidebar-item
          index="5" >
          Card
        </vs-sidebar-item>

        <div
          class="footer-sidebar"
          slot="footer">
          <vs-button
            vs-icon="reply"
            vs-color="danger"
            vs-type="flat">
            log out
          </vs-button>
          <vs-button
            vs-icon="settings"
            vs-color="primary"
            vs-type="border">
          </vs-button>
        </div>
      </vs-sidebar>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      indexActive: 0,
      activeSideBar: false,
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vs-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
