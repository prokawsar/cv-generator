<script>
  import { userInfo } from '../utils/store';
  import { isActive } from '@roxi/routify';
</script>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CV Generator</a>
    {#if $userInfo.name && $isActive('/templates')}
      <span>
        <span class="badge bg-secondary fs-6">Hey ! Hello, </span>
        <span class="round fw-bold fs-6 bg-white p-1">{$userInfo.name}</span>
      </span>
    {/if}
    <!-- <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Your name"
        aria-label="Your name"
      />
      <button class="btn btn-outline-success" type="submit">Go</button>
    </div> -->
  </div>
</nav>

<style>
  .round {
    border: 1px solid rgb(114, 162, 79);
    border-radius: 3px;
  }
</style>
