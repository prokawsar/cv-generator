<script>
  import TemplateSelector from '../components/TemplateSelector.svelte';
</script>

<div class="d-flex flex-column">
  <label class="form-label" for="">Select template</label>
  <TemplateSelector />
  <div class="d-flex flex-row">
    <div class="col-8">
      <div class="mb-3">
        <label for="" class="form-label">Designation</label>
        <input
          type="text"
          class="form-control"
          id=""
          placeholder="Designation"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">About you</label>
        <textarea class="form-control" id="" rows="4" />
      </div>

      <div class="">
        <button class="btn btn-success float-end">Have a look</button>
      </div>
    </div>
    <div class="col-4">
      <div
        class="d-flex justify-content-center align-items-center p-2"
        style="height: 300px;"
      >
        <span class="fs-4 text-muted text-uppercase"
          >/* Reactive view of selected template will be here */</span
        >
      </div>
    </div>
  </div>
</div>
