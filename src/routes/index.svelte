<script>
  import { goto } from '@roxi/routify';
  import { userInfo } from '../utils/store';

  const gotoTemplate = () => {
    $goto('/templates');
  };
</script>

<div class="container">
  <div class="d-flex justify-content-between flex-row mt-2">
    <div class="col-3" />
    <div class="col-6">
      <div class="d-flex flex-row">
        <input
          class="form-control form-control-lg me-2"
          type="search"
          bind:value={$userInfo.name}
          placeholder="Your name"
          aria-label="Your name"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          class:disabled={!$userInfo.name}
          on:click={gotoTemplate}>Go</button
        >
      </div>
    </div>
    <div class="col-3" />
  </div>
</div>
