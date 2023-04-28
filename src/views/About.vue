<template>
  <div>
    <i18n path="see-documentation" tag="p">
      <template slot="link">
        <a href="https://www.npmjs.com/package/vue-lang-router" target="_blank">
          <span>{{ $t("documentation") }}</span>
        </a>
      </template>
    </i18n>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>