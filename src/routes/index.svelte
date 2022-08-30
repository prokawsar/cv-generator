<script>
  import Navbar from '../components/Navbar.svelte';
</script>

<div class="container">
  <Navbar />

  <div class="d-flex justify-content-between flex-row mt-2">
    <div class="col-3" />
    <div class="col-6">
      <div class="d-flex flex-row">
        <input
          class="form-control form-control-lg me-2"
          type="search"
          placeholder="Your name"
          aria-label="Your name"
        />
        <button class="btn btn-outline-success" type="submit">Go</button>
      </div>
    </div>
    <div class="col-3" />
  </div>
</div>
