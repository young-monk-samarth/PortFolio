<!-- src/routes/feedback/+page.svelte -->
<script>
    import { enhance } from '$app/forms';
    export let form;
  
    // Reset form fields after success, but keep message visible
    $: if (form?.success) {
      setTimeout(() => document.querySelector('form').reset(), 2000); // Reset after 2s delay
    }
  </script>
  
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Submit Feedback</h1>
  
      {#if form?.success}
        <p class="text-green-600 mb-4 font-semibold">Feedback submitted successfully!</p>
      {/if}
      {#if form?.error}
        <p class="text-red-600 mb-4 font-semibold">Error: {form.error}</p>
      {/if}
  
      <form method="POST" use:enhance class="space-y-4">
        <div>
          <label class="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-700 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-700 font-medium">Feedback</label>
          <textarea
            name="feedback"
            required
            class="w-full p-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>