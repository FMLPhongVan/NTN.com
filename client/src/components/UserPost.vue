<template>
  <v-container>
    <v-card min-width="500px">
      <v-card-header class="justify-space-between">
        <div class="d-flex">
          <v-avatar size="x-large">
            <v-img
              src="../assets/imgs/photo-1535713875002-d1d0cf377fde.jpeg"
              alt="Avatar"
            ></v-img>
          </v-avatar>
          <div class="ml-4">
            <h3>
              <router-link to="/profile">{{ username }}</router-link>
            </h3>
            <h5>{{ postDate }}</h5>
          </div>
        </div>
        <v-menu anchor="start">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="plain"
              icon="mdi-dots-vertical"
              class="w-auto"
              size="x-large"
              color="green-darken-4"
            ></v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-header>
      <v-card-content>
        <v-card-text class="text-black">
          <p v-for="(pa, i) in postContent" :key="i" class="text-justify">
            {{ pa }}
            <br />
          </p>
        </v-card-text>
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card-content>
    </v-card>
  </v-container>
</template>

<script>
// heroicons import
export default {
  data() {
    return {
      username: "Đoàn Duy Tùng",
      postDate: new Date().toISOString().slice(0, 10),
      items: [
        { title: "Click Messsssssssssssssss" },
        { title: "Click Messsssssssssss" },
        { title: "Click Measdasdasda" },
        { title: "Click Me 2" },
      ],
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus odio sed auctor eleifend. Aenean vel suscipit magna. Cras placerat sed arcu at maximus. Mauris ut fermentum dui. Vestibulum in risus varius, sagittis risus non, blandit odio. Suspendisse ornare metus in tincidunt suscipit. Nullam ultricies enim quis leo ullamcorper, sit amet dictum ex interdum. Vestibulum eget magna eu massa blandit aliquam. Ut accumsan porta neque, sit amet feugiat lorem elementum in. Mauris efficitur fermentum orci ut dignissim. Aenean sem purus, commodo nec ligula non, suscipit efficitur ex. Nam auctor ex non enim tristique, nec pellentesque enim vulputate.\n" +
        "\n" +
        "Suspendisse varius eget nisi ac aliquet. Nullam in maximus elit. Vestibulum feugiat nibh justo. Praesent tincidunt lectus ullamcorper tellus consectetur, sed sollicitudin orci egestas. Nullam auctor nibh et turpis fermentum, eu luctus lacus gravida. Duis nec enim vitae tortor euismod fringilla. Cras rutrum augue sapien, sed fermentum lectus pharetra et. Curabitur commodo felis sed justo tristique gravida. Nam tincidunt malesuada porta. Pellentesque convallis fermentum massa. Vestibulum ut dolor turpis. Vivamus imperdiet nulla metus. Vivamus et ex luctus, porttitor ligula sed, molestie nulla. Cras sed nunc vel sem luctus commodo. Sed eu pretium turpis, ut iaculis odio. Etiam consectetur auctor felis, eu vestibulum urna dictum sit amet.\n" +
        "\n" +
        "Sed sed augue ut eros ultrices tempor aliquet a magna. Nunc et mauris eget sem facilisis faucibus. Aliquam ultricies commodo condimentum. Morbi quis lacus molestie, gravida lacus eget, rutrum augue. Nunc sit amet orci ac odio mollis pharetra at eget nisi. Sed rhoncus imperdiet gravida. Sed vitae commodo ipsum. Phasellus gravida suscipit justo sit amet condimentum. Aliquam sollicitudin nibh sed dui placerat mollis. Aliquam lobortis turpis turpis, ac dignissim arcu feugiat ac. Curabitur quis euismod risus.\n" +
        "\n" +
        "Fusce justo turpis, eleifend vitae congue non, consectetur vitae eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean in sodales lacus. Mauris finibus lobortis nulla. Sed id posuere eros, convallis commodo quam. Quisque vulputate feugiat pulvinar. Quisque lobortis urna a purus consectetur dictum at quis lorem. Nullam nec nibh in risus scelerisque sagittis vitae nec purus. In rutrum lectus quis eros rhoncus blandit. Integer porta hendrerit purus at hendrerit. Vivamus finibus, tellus in rhoncus venenatis, nibh massa mollis turpis, nec vestibulum ipsum nulla quis magna. Aliquam imperdiet mauris id tellus porta convallis. Proin ultricies dui sem, quis dictum lacus blandit id.\n" +
        "\n" +
        "Maecenas eros tortor, placerat vitae est quis, bibendum mattis lectus. Donec enim est, dictum non viverra et, volutpat in ligula. Etiam pellentesque scelerisque justo, in iaculis sapien porta non. Etiam sem nisl, fringilla et turpis in, fermentum vulputate sapien. Etiam nec egestas urna. Mauris ac nisl risus. Nam convallis suscipit ultrices. Ut viverra dolor a pellentesque iaculis.\n" +
        "\n" +
        "- asdasdasdasddasdddsaddddddd\n" +
        "- 2eqweqweeeeeeeeeeeeeeeeee",
    };
  },
  methods: {
    gotoUserProfile() {
      console.log(this.username);
    },
  },
  beforeMount() {
    this.postContent = this.postContent.split("\n");
  },
};
</script>

<style></style>
