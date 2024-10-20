<template>
  <div>
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitPost">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" v-model="formValues.title" placeholder="Enter title"
                  required />
              </div>
              <div class="form-group">
                <label for="author">Author</label>
                <input type="text" class="form-control" id="author" v-model="formValues.author_name"
                  placeholder="Enter author name" required />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" v-model="formValues.description"
                  placeholder="Enter description" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue';
  import axios from 'axios';
  export default {
    'name': 'AddModal',

    setup(props, { emit }) {
      const formValues = ref({
        title: "",
        author_name: "",
        description: "",
      });

      const submitPost = async () => {
        try {
          const response = await axios.post(
            'https://apiadmin.prbglobalbd.com/api/post/add',
            formValues.value
          );
          emit('postAdded', response.data); // Emit the event to the parent component
          formValues.value = { title: '', author_name: '', description: '' }; // Reset the form
          alert('Post added successfully');
        } catch (error) {
          console.error('There was an error submitting the post', error);
        }
      };

      return {
        formValues,
        submitPost
      }
    }
  }
</script>