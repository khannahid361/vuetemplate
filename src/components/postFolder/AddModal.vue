<template>
  <div>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <form id="">
            <div class="modal-body">
              <div class="form-group col-md-12">
                <label for="title">Title*</label>
                <input type="text" name="title" id="title" class="form-control">
              </div>
              <div class="form-group col-md-12">
                <label for="author_name">Author*</label>
                <input type="text" name="author_name" id="author_name" class="form-control">
              </div>
              <div class="form-group col-md-12">
                <label for="description">Description*</label>
                <textarea name="description" id="description" class="form-control"></textarea>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-success">Save</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    'name': 'AddModal',
  }
</script>